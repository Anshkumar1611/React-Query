import axios from "axios"

const axiosInstance = axios.create({baseURL: "http://localhost:4000"})

// get requests
export const fetchSuperHeroes =()=>{
   return axiosInstance.get("/superheroes")
}

export const fetchSuperHero =(heroId)=>{
    return axiosInstance.get(`/superheroes/${heroId}`)
 }

 //post requests

 export const addSuperHero =(hero)=>{
   return axiosInstance.post("/superheroes",hero)
}

// patch request
//  export const updateSuperHero =(hero)=>{
//    return axiosInstance.patch("/superheroes",hero)
// }