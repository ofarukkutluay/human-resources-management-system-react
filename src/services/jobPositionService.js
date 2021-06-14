import axios from "axios";
import { apiJobPositionsGetAll } from "./constants/apiConst";

export default class JobPositionService {
    getJobPosition (){
        return axios.get(apiJobPositionsGetAll)
    }
}