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

}
