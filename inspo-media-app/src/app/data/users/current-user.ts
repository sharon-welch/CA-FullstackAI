import { Service } from '@angular/core';
import { Author, Authored } from '../../models/author-model';
import { CURRENT_USER_STORAGE_KEY, createGuestAuthor, isOwnedBy, parseAuthor } from './author-helpers';

// Stand-in user until Firebase Auth is added: a random id remembered in this browser.
// When Auth is added, only this service needs to change.
@Service()
export class CurrentUser {
  readonly author: Author = this.loadOrCreate();

  owns(item: Authored): boolean {
    return isOwnedBy(item, this.author.id);
  }

  private loadOrCreate(): Author {
    const saved = parseAuthor(this.read());
    if (saved) return saved;

    const guest = createGuestAuthor(crypto.randomUUID());
    this.write(guest);
    return guest;
  }

  private read(): string | null {
    try {
      return localStorage.getItem(CURRENT_USER_STORAGE_KEY);
    } catch {
      return null;
    }
  }

  private write(author: Author): void {
    try {
      localStorage.setItem(CURRENT_USER_STORAGE_KEY, JSON.stringify(author));
    } catch {
      // storage blocked (private window): the guest id lasts for this visit only
    }
  }
}
