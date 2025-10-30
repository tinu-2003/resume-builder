// import axios  
import axios from "axios";


// configure axios

 export const CommonAPI = async(httpMethod,url,reqBody)=>{

    const reqConfig={
        method:httpMethod,
        url,
        data:reqBody
    }

    return await axios(reqConfig).then((res)=>{
        return res
    })

    .catch((err)=>{
        return err
    })
}