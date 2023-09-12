import axios from 'axios';

HttpClient.interceptors.request.use(config => {
    if (config.url !== apis.login || config.url !== apis.signUp && localStorage.getItem('token')) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }
    return config
}, error => {
    return error.message
})

export default HttpClient
