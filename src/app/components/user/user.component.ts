import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../../../assets/users/dummy-users';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input({required: true}) id!: string; 
  @Input({required: true}) name!: string; 
  @Input({required: true}) avatar!: string; 

  @Output() selectUser = new EventEmitter<string>();

  handleUserClick() {
    this.selectUser.emit(this.id);
  }

}
