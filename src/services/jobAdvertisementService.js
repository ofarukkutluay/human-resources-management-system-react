import axios from "axios";
import { apiActivateJobAdvertisement, apiJobAdvertisementAdd, apiJobAdvertisementGetAll, apiJobAdvertisementGetByActivatedFalse, apiJobAdvertisementGetByActivatedTrue } from "./constants/apiConst";


export default class JobAdvertisementService{
    getAllJobAdvertisements(){
        return axios.get(apiJobAdvertisementGetAll);
    }

    getByActivatedTrueJobAdvertisement(){
        return axios.get(apiJobAdvertisementGetByActivatedTrue);
    }

    getByActivatedFalseJobAdvertisement(){
        return axios.get(apiJobAdvertisementGetByActivatedFalse);
    }

    addJobAdvertisement(data){
        return axios.post(apiJobAdvertisementAdd,data)
    }

    activateJobAdvertisement(systemPersonnelId,jobAdvertisementId){
        return axios.post(apiActivateJobAdvertisement+`?jobAdvertisementId=${jobAdvertisementId}&systemPersonnelId=${systemPersonnelId}`)
    }


}