import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:9999';
export function invokeInterceptor(){
    console.log("Interceptor Start");
axios.interceptors.request.use(function (request) {
     console.log("Inside Request Interceptor Start");
   request.tokenID = localStorage.tokenID
   console.log("Token id is :::: ",request.tokenID);
    return request;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
}
