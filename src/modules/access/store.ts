import {observable} from "mobx";

export interface Interface {
    token: string
}

class Access implements Interface {
    @observable token = 'token';
}

export default new Access();