import axios from "axios";
import { apiWorkingTimeGetAll } from "./constants/apiConst";


export default class WorkingTimeService{
    getWorkingTimes(){
        return axios.get(apiWorkingTimeGetAll)
    }
}