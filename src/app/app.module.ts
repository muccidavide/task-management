import { BrowserModule } from "@angular/platform-browser";
import { DatePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterOutlet } from "@angular/router";

// Components
import { AppComponent } from "./app.component";
import { CardComponent } from "./components/shared/card/card.component";
import { HeaderComponent } from "./components/header/header.component";
import { NewTaskComponent } from "./components/tasks/new-task/new-task.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { TaskComponent } from "./components/tasks/task/task.component";
import { UserComponent } from "./components/user/user.component";
@NgModule({
    declarations: [
        AppComponent,
        CardComponent,
        HeaderComponent,
        NewTaskComponent,
        TasksComponent,
        UserComponent,
        TaskComponent,
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, DatePipe, FormsModule, RouterOutlet]
})
export class AppModule {

}