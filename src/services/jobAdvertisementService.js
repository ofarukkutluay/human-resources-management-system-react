import axios from "axios";
import { apiJobAdvertisementAdd, apiJobAdvertisementGetAll } from "./constants/apiConst";


export default class JobAdvertisementService{
    getAllJobAdvertisement(){
        return axios.get(apiJobAdvertisementGetAll);
    }

    addJobAdvertisement(data){
        return axios.post(apiJobAdvertisementAdd,data)
    }


}