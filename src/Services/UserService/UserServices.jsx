import axios from 'axios';
import  AxiosService from '../Axios/AxiosService';
var axiosService = new AxiosService;
export default class UserService
{
    Registrtion(userData){
        return axiosService.axiosPost(`http://localhost:8080/userapi/loginusers`,userData)
    }
}