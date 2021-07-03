import axios from "axios";
import { apiWayOfWorkingGetAll } from "./constants/apiConst";


export default class WayOfWorkingService{
    getWayOfWorkings(){
        return axios.get(apiWayOfWorkingGetAll)
    }
}