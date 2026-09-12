import { Service, Signal, signal } from '@angular/core';
import { User } from './user';

@Service()
export class UserService {
    users: Signal<User[]> = signal([
        {id: '1', firstName: 'Joe', lastName: 'Johnson'},
        {id: '2', firstName: 'Mary', lastName: 'White'}
    ])
}
