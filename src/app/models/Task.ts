import { ITask } from "./interfaces/ITask";

export class Task implements ITask{
    constructor(public id: string,
        public userId: string, 
        public title: string,
        public summary: string,
        public dueDate: string
    ){}

}

export class TaskCreationDto{
    constructor(
        public title: string,
        public summary: string,
        public dueDate: string
    ){}
}