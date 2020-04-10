import axios from "axios";

export function userRegistration(regDto) {
    return axios.post("http://localhost:8080/userapi/addusers", regDto, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}  