import {observable, action} from "mobx";

export interface IUser {
    title: string;
    chT(newTitle: string): void
}

class User implements IUser{
    @observable title= 'implements';

    @action chT(newTitle: string) {
        this.title = newTitle;
    }
}

export default new User();