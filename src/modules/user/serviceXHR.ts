import config from 'config.json';
import {AxiosInstance} from 'axios';

interface Interface {
    adapter: AxiosInstance;
    textError: string;
    invoke(userId: number): void;
}

class ServiceXHR implements Interface {
    constructor(adapter: AxiosInstance) {
        this.adapter = adapter;
    }

    adapter: AxiosInstance;
    textError = 'User can not be find!';

    invoke(userId: number): Promise<any> {
        return this.adapter({
            method: 'GET',
            url: `${config.url.todo}/${userId}`,
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        }).catch((err: Error) => console.error(this.textError, err));
    }
}

export default ServiceXHR;
