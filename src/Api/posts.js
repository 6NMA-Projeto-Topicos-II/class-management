import axios from 'axios';

export default axios.create({
    baseURL: 'http://85.31.230.148:7020/v1/',
    headers: {'Content-type': 'application/json'}
})