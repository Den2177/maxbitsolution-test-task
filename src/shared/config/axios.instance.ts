import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE + import.meta.env.VITE_API_PREFIX,
});

// интерсепторы для обработки запросов, тк тут нет надобности решил не подключать
// axiosInstance.interceptors.request.use(requestInterceptor);
// axiosInstance.interceptors.response.use(successResponseInterceptor, errorResponseInterceptor);

export default axiosInstance;
