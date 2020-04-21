import AxiosService from '../Axios/AxiosServices';
import axios from 'axios';
var axiosService=new AxiosService();

export function userRegistration(registrationDto) {
    return axiosService.axiosPost("http://localhost:8080/userapi/addusers", registrationDto, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}

export function userLogin(loginDTO) {
    return axiosService.axiosPost("http://localhost:8080/userapi/loginusers", loginDTO, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}

export function forgotPassword(forgotPasswordDTO) {

    return axiosService.axiosPost("http://localhost:8080/userapi/forgotpassword", forgotPasswordDTO, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}
export function resetPassword(resetPasswordDTO) {

    return axiosService.axiosPost("http://localhost:8080/userapi/resetpassword", resetPasswordDTO, {
        headers: {
            "Content-Type": "application/json;charset=utf-8"
        }
    });
}

export function createNote(createNoteDto, token) {

    return axiosService.axiosPost("http://localhost:8080/notesapi/createNote", createNoteDto, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token
        }
    });
}

export function getAllNotes(token) {

    return axios.get("http://localhost:8080/note/getallnotes", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token
        }
    });
}

