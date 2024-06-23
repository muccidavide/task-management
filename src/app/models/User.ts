import { IUser } from "./interfaces/IUser";

export class User implements IUser {
    constructor(public id: string, public name: string, public avatar: string) {

    }
}