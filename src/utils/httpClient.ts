import axios from 'axios';
import apis from "./apis";

const HttpClient = axios.create({
    timeout: 60 * 1000
})

HttpClient.interceptors.request.use(config => {
    if (config.url !== apis.login || config.url !== apis.signUp && localStorage.getItem('token')) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return config
}, error => {
    return error.message
})

export default HttpClient
