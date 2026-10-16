import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentDelete } from './comment-delete';

describe('CommentDelete', () => {
  let component: CommentDelete;
  let fixture: ComponentFixture<CommentDelete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentDelete],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentDelete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
