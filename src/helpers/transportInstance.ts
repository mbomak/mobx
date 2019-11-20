import axios from 'axios';
import config from 'config.json';

export default axios.create({
    baseURL: config.url.base,
    timeout: 3000,
    headers: {'X-Custom-Header': 'foobar'}
});