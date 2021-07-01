import axios from "axios";
import { apiSchoolGetAll } from "./constants/apiConst";


export default class SchoolService{
    getSchools(){
        return axios.get(apiSchoolGetAll);
    }

}