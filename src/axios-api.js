import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://cafe-439ec.firebaseio.com'
});


export default axiosApi;