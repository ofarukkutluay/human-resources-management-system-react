import axios from "axios";
import { apiUrl } from "./constants/apiConst";

export default class JobPositionService {
    getJobPosition (){
        return axios.get(apiUrl + "/jobpositions/getAll")
    }
}