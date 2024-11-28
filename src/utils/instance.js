import axios from 'axios';

const instance = axios.create({
 baseURL: 'http://13.239.136.180/api/v1/',
 headers: {
   'Content-Type': 'application/json',
 },
});


// Interceptor untuk JWT ke setiap request
instance.interceptors.request.use(
 (config) => {
   const token = localStorage.getItem('token');
   if (token) {
     config.headers['Authorization'] = `Bearer ${token}`;
   }
   return config;
 },
 (error) => {
   return Promise.reject(error);
 }
);


// Interceptor untuk error
instance.interceptors.response.use(
 (response) => response,
 (error) => {
   if (error.response) {
     const { status } = error.response;

     if (status === 401) {
       console.error('Unauthorized: Silakan login kembali.');
       // Redirect login
       window.location.href = '/login';
     } else if (status === 403) {
       console.error('Forbidden: Anda tidak memiliki akses.');
     } else {
       console.error(`Error ${status}: ${error.response.data.message || 'Terjadi kesalahan.'}`);
     }
   } else {
     console.error('Network Error atau server tidak dapat dihubungi.');
   }

   return Promise.reject(error);
 }
);

export default instance;