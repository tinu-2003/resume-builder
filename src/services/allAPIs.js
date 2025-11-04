import { CommonAPI } from "./commonAPI";
import { ServerURL } from "./serviceURL";


// Add resume api call post(reqbody)

 export const addResumeAPI = async(reqBody)=>{
    return await CommonAPI('POST',  `${ServerURL}/resumes`,reqBody)
}

// Add history api call post(reqbody)

 export const addHistoryAPI = async(reqBody)=>{
    return await CommonAPI('POST',  `${ServerURL}/history`,reqBody)
}

// view history api call post(reqbody)

 export const viewHistoryAPI = async()=>{
    return await CommonAPI('GET',  `${ServerURL}/history`,{})
}

// delete history api call post(reqbody)

 export const deleteHistoryAPI = async(id)=>{
    return await CommonAPI('DELETE',  `${ServerURL}/history/${id}`,{})
}