import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-a618c.firebaseio.com/'
});

export default instance;