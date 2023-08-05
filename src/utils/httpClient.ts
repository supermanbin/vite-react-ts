import axios from 'axios';

const httpClient = axios.create({
  timeout: 3000
})

export default httpClient