import axios from "axios";
import { apiUrl } from "./constants/apiConst";

export default class EmployerService {
    getEmployer (){
        return axios.get(apiUrl + "/employers/getall")
    }
}