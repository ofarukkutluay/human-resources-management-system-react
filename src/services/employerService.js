import axios from "axios";
import { apiEmployersGetAll } from "./constants/apiConst";

export default class EmployerService {
    getEmployer (){
        return axios.get(apiEmployersGetAll)
    }
}