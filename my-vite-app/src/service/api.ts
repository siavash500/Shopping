import axios from "axios";

const client = axios.create({
    baseURL : "http://localhost:3001"
})

//why we use this  way?
//1: fasting
//شلوقی کد


export async function getProducts () {
    const {data} =  await client("/products")

    return data;    

}


