import axios from 'axios';

export class AxiosService {
  axiosPost(url, data) {
     return axios.post (url, data);
  }
  axiosGet(url,data,token){
    return axios.get(url,data,token);
  }
}

export default AxiosService;
