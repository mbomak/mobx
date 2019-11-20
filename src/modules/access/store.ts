import {observable} from 'mobx';

export interface IAccess {
    token: string;
}

class Access implements IAccess {
    @observable token = 'token';
}

export default Access;
