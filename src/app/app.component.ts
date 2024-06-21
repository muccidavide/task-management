// CORE
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from "./components/user/user.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [HeaderComponent, RouterOutlet, UserComponent]
})
export class AppComponent {
  title = 'first-angular-app';
}
