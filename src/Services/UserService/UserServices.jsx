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

    return axios.post("http://localhost:8080/notesapi/createNote", createNoteDto, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token
        }
    });
}

export function getAllNotes(token) {

    return axios.get("http://localhost:8080/notesapi/getNotes", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token
        }
    });
}
export function updateNote(id, updateNoteDto, token) {

    return axios.post("http://localhost:8080/notesapi/updateNote/"+id,updateNoteDto, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token,
        }
    });
}
export function deleteNote(id, token) {

    return axios.delete("http://localhost:8080/notesapi/deleteNote/"+id, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token,
        }
    });
}

export function changeColor(id, colorDTO, token) {
    return axios.post("http://localhost:8080/notesapi/changeColor/"+id,colorDTO, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token,
            "Accept": "*",
        }
    });
}
export function createLabel(createLabelDto, token) {

    return axios.post("http://localhost:8080/lableapi/createLable", createLabelDto, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token,
            "Accept": "*",
        }
    });
}

export function getAllLabels(token) {

    return axios.get("http://localhost:8080/labelapi/getLabels", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token
        }
    });
}
export function addInArchive(id, token) {
    var data = null;
    return axios.post("http://localhost:8080/notesapi/archiveNotes/" + id, data, {

        headers: {
            "Content-Type": "appliaction/json; charset=utf-8",
            token: token
        }
    });
}
export function getAllArchiveNotes(token) {
    return axios.get("http://localhost:8080/notesapi/showArchiveNotes", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token
        }
    });
}