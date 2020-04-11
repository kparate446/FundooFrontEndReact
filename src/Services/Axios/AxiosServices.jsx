import axios from 'axios';

export  class AxiosService {
    axiosPost(url,data){
        return axios.post(url,data)
    }
}
export default AxiosService;