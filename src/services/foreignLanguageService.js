import axios from "axios";
import { apiForeignLanguageGetAll } from "./constants/apiConst";


export default class ForeignLanguageService{
    getForeignLanguages(){
        return axios.get(apiForeignLanguageGetAll);
    }

}