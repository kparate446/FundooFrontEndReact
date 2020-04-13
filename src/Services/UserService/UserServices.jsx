import axios from 'axios';
import  AxiosService from '../Axios/AxiosService';
var axiosService = new AxiosService;
var apiBaseUrl = "http://localhost:8080/userapi/";

// export default class UserService
// {
//     userRegistration(regDto){
//         return axiosService.axiosPost(apiBaseUrl+`addusers`,regDto,{
//             headers: {
//             "Content-Type": "application/json;charset=utf-8"
//         }
//         });
//     }
// }

// export function userRegistration(regDto) {
//     return axios.post("http://localhost:8080/userapi/addusers", regDto, {
//         headers: {
//             "Content-Type": "application/json;charset=utf-8"
//         }
//     });
// }