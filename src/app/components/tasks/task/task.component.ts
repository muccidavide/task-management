import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
//Comp
import { CardComponent } from '../../shared/card/card.component';
//Model & Service
import { Task } from '../../../models/Task';
import { TasksService } from '../../../services/tasks.services';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task!: Task;

  constructor(private _taskService: TasksService){}
  
  handleCompleteClick(): void{
    this._taskService.removeTask(this.task.id)
  }
}
