import axios from 'axios';
import config from "config";

const axiosInstance = axios.create({
    baseURL: config.apiUrl,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    // withCredentials: true,
});

export default axiosInstance;