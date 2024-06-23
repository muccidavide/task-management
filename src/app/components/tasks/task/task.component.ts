import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../../models/Task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss'
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() complete = new EventEmitter<string>();
  
  handleCompleteClick(): void{
    this.complete.emit(this.task.id);
  }
}
