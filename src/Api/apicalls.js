import {instance} from "../Api"
import { useParams } from "react-router-dom";

export const getCollections = async ()=>{

    const {data:{data}} = await instance.get("/collections?populate=*");
    return data
}


export const getFlowers = async ()=>{

    
}