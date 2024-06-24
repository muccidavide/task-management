import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  @Input({required: true}) user!: User; 
  @Input({required: true}) selected!: boolean;
  @Output() selectUser = new EventEmitter<User>();

  handleUserClick() {
    this.selectUser.emit(this.user);
  }

}
