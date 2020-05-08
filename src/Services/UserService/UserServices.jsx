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

export function chanageprofile(file, token) {
    return axios.post("http://localhost:8080/userapi/uploadedProfile", file, {
      headers: {
        "Content-Type": "multipart/form-data",
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

export function changeColor( colorDTO,id, token) {
    return axios.post("http://localhost:8080/notesapi/changeColor/"+id,colorDTO, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token,
            "Accept": "*",
        }
    });
}
export function createLabel(createLabelDto, token) {

    return axios.post("http://localhost:8080/labelapi/createLable", createLabelDto, {
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

export function updateLabel( token,data,labelid) {
    // var data = null;
    return axios.put("http://localhost:8080/labelapi/updateLable/"+labelid,data, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token,
        }
    });
}

export function deletelabel(labelid, token) {

    return axios.delete("http://localhost:8080/labelapi/deleteLable/"+labelid, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token,
        }
    });
}

export function addLabelWithNote( token,noteId,labelId) {
    var data = null;
    return axios.post("http://localhost:8080/labelapi/AddLablesInNotes/"+noteId+'/'+labelId,data, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token,
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
export function addTrash(id, token) {
    var data = null;
    return axios.post("http://localhost:8080/notesapi/trashedNotes/" + id, data, {
        headers: {
            "Content-Type": "appliaction/json; charset=utf-8",
            token: token
        }
    });
}
export function getAllTrashNotes(token) {
    return axios.get("http://localhost:8080/notesapi/showTrashNotes", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token
        }
    });
}
export function getSearchNotes(title,token) {
    return axios.get("http://localhost:8080/notesapi/findByDescription/"+title, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token
        }
    });
}
export function addPin(id, token) {
    var data = null;
    return axios.post("http://localhost:8080/notesapi/pinNotes/" + id, data, {
        headers: {
            "Content-Type": "appliaction/json; charset=utf-8",
            token: token
        }
    });
}
export function getAllPinNotes(token) {
    return axios.get("http://localhost:8080/notesapi/showPinNotes", {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token
        }
    });
}

export function addReminder( token,reminderDto,noteId) {
    var data = null;
    return axios.post("http://localhost:8080/notesapi/addReminder/"+noteId,reminderDto,data, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            token: token,
        }
    });
}