// CORE
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from "./components/tasks/tasks.component";
import { UserComponent } from "./components/user/user.component";
// MODELS
import { DUMMY_USERS } from '../assets/users/dummy-users';
import { User } from './models/User';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [HeaderComponent, RouterOutlet, TasksComponent, UserComponent]
})
export class AppComponent {
  title = 'first-angular-app';
  users: User[] = DUMMY_USERS;
  userName: string = 'Please select a user to view his tasks';

  handleSelect(id: string){
    let name = DUMMY_USERS.find(u => u.id === id)?.name;
    this.userName = name ?? this.userName;
  }
}
 