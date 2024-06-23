import { Component, Input } from '@angular/core';

import { TaskComponent } from './task/task.component';

import { DUMMY_TASKS } from '../../../assets/tasks/tasks';
import { Task } from '../../models/Task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) userId!:string; 
  tasks : Task[] = DUMMY_TASKS;

  get selectedUserTasks(){
    return this.tasks.filter((t) => t.userId === this.userId)
  }

  handleCompleteTask(id: string):void{
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  addNewTask(){
    this.tasks.push({
      id: 't10',
      userId: this.userId,
      title: 'Build first praaaaaaaaaaaaaaaaaaaaaaaaototype',
      summary: 'Build a aaaaaaaaaaaaaaaaafirst prototype of the online shop website',
      dueDate: '2024-05-31',
    },)
  }
}
