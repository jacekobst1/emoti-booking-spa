import axios from 'axios';
import config from "config";
import fireToast from "lib/toast";

const axiosInstance = axios.create({
    baseURL: config.apiUrl,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
    // withCredentials: true,
});

// Handle exceptions
axiosInstance.interceptors.response.use(
    (res) => res,
    (error) => {
        const {status} = error.response;

        if ([400, 409, 422, 429, 500].includes(status)) {
            let message = error.response.data.message;
            if (status === 500) {
                message = 'Something went wrong. Contact the administrator.';
            }
            void fireToast('error', message);
            return Promise.reject(error);
        }
    }
);

export default axiosInstance;