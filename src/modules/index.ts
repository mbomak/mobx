import User, {IUser} from './user/store';
import Access, {IAccess} from './access/store';

export {User, Access};

export interface Stores {
    user: IUser;
    access: IAccess;
}
