import axios from "axios";
import { apiActivateEmployer, apiEmployersGetAll, apiEmployersGetByActivatedFalse, apiEmployersGetByActivatedTrue } from "./constants/apiConst";

export default class EmployerService {
    getAllEmployers (){
        return axios.get(apiEmployersGetAll)
    }

    getByActivatedTrueEmployers (){
        return axios.get(apiEmployersGetByActivatedTrue)
    }
    getByActivatedFalseEmployers (){
        return axios.get(apiEmployersGetByActivatedFalse)
    }

    activateEmployer(systemPersonnelId,employerId){
        return axios.post(apiActivateEmployer+`?employerId=${employerId}&systemPersonnelId=${systemPersonnelId}`)
    }
}