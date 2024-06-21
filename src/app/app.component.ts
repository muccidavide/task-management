// CORE
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DUMMY_USERS } from '../assets/users/dummy-users';
// COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from "./components/user/user.component";
import { User } from './models/User';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [HeaderComponent, RouterOutlet, UserComponent]
})
export class AppComponent {
  title = 'first-angular-app';
  users: User[] = DUMMY_USERS;

  handleSelect(id: string){
    console.log(id);
    
  }
}
