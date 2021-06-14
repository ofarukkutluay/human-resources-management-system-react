import axios from "axios";
import { apiCurriculumVitaesGetAll } from "./constants/apiConst";

export default class CurriculumVitaeService{
    getCurriculumVitaes(){
        return axios.get(apiCurriculumVitaesGetAll)
    }
}