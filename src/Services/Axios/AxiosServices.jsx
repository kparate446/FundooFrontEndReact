import axios from 'axios';
var Baseurl="http://localhost:8080/";

export default  class AxiosServices {
  axiosPost(url, data) {
     return axios.post (url, data);
  }
  axiosGet(url,data,token){
    return axios.get(url,data,token);
  }

  Post(path,data,tokenAuth){
       return axios.post(Baseurl+path,data,tokenAuth);
    }
    
    GET(path,data,tokenAuth){
        return axios.get(Baseurl+path,data,tokenAuth);
     }
     
     PUT(path,data,tokenAuth){
        return axios.put(Baseurl+path,data,tokenAuth)
     }

     DELETE(path,tokenAuth){
        return axios.delete(Baseurl+path,tokenAuth);
     }

}
// export default AxiosServices;

