import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskCreationDto } from '../../../models/Task';
import { TasksService } from '../../../services/tasks.services';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.scss'
})
export class NewTaskComponent {
  @Input({required:true}) userId!: string;
  @Output() closeDialog = new EventEmitter();
  @Output() addTask = new EventEmitter<TaskCreationDto>();
  title: string = '';
  summary: string = '';
  dueDate: string = '';

  constructor(private tasksService: TasksService){}

  handleCloseDialog(): void {
    this.closeDialog.emit();
  }

  handleSubmit(): void{
    this.tasksService.addTask({
      title : this.title,
      summary: this.summary,
      dueDate: this.dueDate
    }, this.userId)
    this.handleCloseDialog();
  }
}
