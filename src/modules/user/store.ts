import {observable, action, runInAction} from "mobx";
import transportInstance from 'helpers/transportInstance';
import serviceXHR from './serviceXHR';

const getUser = new serviceXHR(transportInstance);

interface User {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
}

export interface IUser {
    userId: number;
    data: User | null;
    getData(): void;
}

class User implements IUser {
    @observable userId = 1;
    @observable data = null;

    async getData() {
        const {data} = await getUser.invoke(this.userId);
        runInAction(() => {
           this.data = data;
           this.userId ++;
        });
    }
}

export default User;