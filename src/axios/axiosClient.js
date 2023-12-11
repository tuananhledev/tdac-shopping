import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://ghostrider5025-001-site1.dtempurl.com/api',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosInstance;