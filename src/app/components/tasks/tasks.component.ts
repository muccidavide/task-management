import { Component, Input } from '@angular/core';
// Modules and Services
import { Task, TaskCreationDto } from '../../models/Task';
import { TasksService } from '../../services/tasks.services';

@Component({
  selector: 'app-tasks',
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
