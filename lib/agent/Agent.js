import axios from "axios";
export const CreateNewCity = async (data,id) => {
    
    const res = await axios.post(`http://127.0.0.1:20200/api/v1/city/${id}`,data, { headers: { auth: localStorage.getItem("auth") } })
    return res
}
export const getStateById = async (id) => {
    const res = await axios.get(`http://127.0.0.1:20200/api/v1/state/${id}`, {
      headers: { auth: localStorage.getItem("auth") },
   
    });
console.log(res,"??????????????????????????????????");
    return res;
  }
  export const getAllCustomerByAgentId= async (params,id) => {
    const res = await axios.get(`http://127.0.0.1:20200/api/v1/allCustomer/agentId/${id}`, {
      headers: { auth: localStorage.getItem("auth") },
      params:params
    });

    return res;
  }
  export const CreatePolicyByAgent = async (planId,agentId,body) => {
   console.log(body)
    const res = await axios.post(`http://127.0.0.1:20200/api/v1/policy/${planId}/agentId/${agentId}`,body, { headers: { auth: localStorage.getItem("auth") } })
    
    return res
}