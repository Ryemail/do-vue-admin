import axios from 'axios';

const ajax = axios.create({
	baseURL: process.env.VUE_APP_API,
});

ajax.interceptors.request.use(
	(config) => {
		return config;
	},
	(err) => {
		return Promise.reject(err);
	}
);

ajax.interceptors.response.use(
	(config) => {
		console.log(config.data);
		return config.data;
	},
	(err) => {
		return Promise.reject(err);
	}
);

export default ajax;
