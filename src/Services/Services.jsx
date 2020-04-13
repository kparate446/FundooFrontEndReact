import axios from "axios";

// export function userRegistration(registrationDTO) {
//     return axios.post("http://localhost:8080/userapi/addusers", registrationDTO, {
//         headers: {
//             "Content-Type": "application/json;charset=utf-8"
//         }
//     });
// }

export function userRegistration(registrationDto) {
    return axios.post("http://localhost:8080/userapi/addusers", registrationDto, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}

export function userLogin(LoginDTO) {
    return axios.put("http://localhost:8080/userapi/loginusers", LoginDTO, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}