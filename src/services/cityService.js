import axios from "axios";
import { apiCityGetAll } from "./constants/apiConst";


export default class CityService{
    getCities(){
        return axios.get(apiCityGetAll);
    }

}