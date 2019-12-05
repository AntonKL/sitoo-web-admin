import axios from 'axios';

const instance = axios.create({ baseURL: 'http://localhost:8088/https://api-sandbox.mysitoo.com/v2/accounts/90316' });

instance.interceptors.request.use(
  (config) => {
    const axiosConfig = config;
    axiosConfig.headers.Authorization = `Basic ${process.env.REACT_APP_SITOO_API_KEY}`;
    return axiosConfig;
  },
);

export default instance;
