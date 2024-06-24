import { Injectable } from "@angular/core";
import { Task, TaskCreationDto } from "../models/Task";

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks: Task[] = [{
        id: 't1',
        userId: 'u1',
        title: 'Master Angular',
        summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
        dueDate: '2025-12-31',
    },
    {
        id: 't2',
        userId: 'u3',
        title: 'Build first prototype',
        summary: 'Build a first prototype of the online shop website',
        dueDate: '2024-05-31',
    },
    {
        id: 't3',
        userId: 'u3',
        title: 'Prepare issue template',
        summary:
            'Prepare and describe an issue template which will help with project management',
        dueDate: '2024-06-15',
    }]

    constructor(){
        const tasks = localStorage.getItem('tasks');

        if(tasks)
            this.tasks = JSON.parse(tasks);
    }

    private SaveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    getTasksForUser(userId: string) {
        return this.tasks.filter(t => t.userId === userId);
    }

    addTask(newTask: TaskCreationDto, userId: string) {
        this.tasks.push({
            // unique id mock
            id: new Date().getTime().toString(),
            userId: userId,
            title: newTask.title,
            summary: newTask.summary,
            dueDate: newTask.dueDate
        });
        this.SaveTasks();
    }

    removeTask(id: string) {
        this.tasks = this.tasks.filter(t => t.id !== id)
        this.SaveTasks();
    }
}