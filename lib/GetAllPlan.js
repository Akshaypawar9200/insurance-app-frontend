import axios from "axios"

export const  GetAllPlan=async(planId)=>{

const res=await axios.get(`http://127.0.0.1:20200/api/v1/plan/${planId}`)
return res

}