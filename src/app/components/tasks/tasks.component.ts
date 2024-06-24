import { Component, Input, OnInit } from '@angular/core';
// Components
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
// Modules and Services
import { Task, TaskCreationDto } from '../../models/Task';
import { TasksService } from '../../services/tasks.services';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NewTaskComponent, TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent{

  @Input({required: true}) name!: string;
  @Input({required: true}) userId!:string; 
  tasks!: Task[];
  isCreation: boolean = false;
  
  constructor(private taskService: TasksService){}

  get selectedUserTasks(): Task[]{
    return this.taskService.getTasksForUser(this.userId);
  }

  openNewTaskDialog(){
    this.isCreation = true;
  }

  closeNewTaskDialog(){
    this.isCreation = false;
  }
}
