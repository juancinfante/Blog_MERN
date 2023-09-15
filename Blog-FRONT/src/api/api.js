import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4001',
})

api.interceptors.request.use((config) => {
    config.headers = {
        'x-token': localStorage.getItem('token'),
    };
    return config;
})

export default api;