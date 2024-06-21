import { Component } from '@angular/core';
import { DUMMY_USERS } from '../../../assets/users/dummy-users';
import { User } from '../../models/User';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  selectedUser: User = DUMMY_USERS[randomIndex] 

  get imagePath(): string{
    return 'assets/users/' + this.selectedUser.avatar
  }

  handleUserClick() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser = DUMMY_USERS[randomIndex];
  }

}
