import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { RouterOutlet } from "@angular/router";

// Components
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { NewTaskComponent } from "./components/tasks/new-task/new-task.component";
import { TasksComponent } from "./components/tasks/tasks.component";
import { TaskComponent } from "./components/tasks/task/task.component";
import { UserComponent } from "./components/user/user.component";
import { SharedModule } from "./components/shared/shared.module";
@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        NewTaskComponent,
        TasksComponent,
        UserComponent,
        TaskComponent,
    ],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule, RouterOutlet, SharedModule]
})
export class AppModule {

}