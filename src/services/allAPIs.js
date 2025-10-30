import { CommonAPI } from "./commonAPI";
import { ServerURL } from "./serviceURL";


// Add resume api call post(reqbody)

const addResumeAPI = async(reqBody)=>{
    return await CommonAPI('POST',  `${ServerURL}/resumes`,reqBody)
}