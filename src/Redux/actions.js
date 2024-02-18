import { geturlDataRequest, posturlDataRequest } from "../api/urlshortner";
import { urlConstants } from "./actionTypes"
import { message } from "antd";

 const geturlDataLoading =()=>{
    return{
        type:urlConstants.GET_ANALYTICS_LOADING,
        urlDataLoading:true
    }
};

 const geturlDataSuccess =(data)=>{
    return{
        type:urlConstants.GET_ANALYTICS_SUCCESS,
        data:data
    }
};

 const geturlDataError =(error)=>{
    return{
        type:urlConstants.GET_ANALYTICS_ERROR,
        error:error
    }
};

export const geturlData =()=>(dispatch)=>{
    dispatch(geturlDataLoading());
    return geturlDataRequest()
    .then((res)=>{
        dispatch(geturlDataSuccess(res.data))
    }).catch((error) => {
        dispatch(geturlDataError(error));
      });
};

 const posturlDataLoading =()=>{
    return{
        type: urlConstants.POST_URL_DATA_LOADING,
    }
 }
 const posturlDataSuccess =(data,setvalue)=>{
    setvalue('');
    message.success('url shortened succesfully!');
    return{
        type: urlConstants.POST_URL_DATA_SUCCESS,
        urlData:data
    }
 }
 const posturlDataError =(error)=>{
    return{
        type: urlConstants.POST_URL_DATA_ERROR,
        error
    }
 }
export const posturlData =(id,setvalue)=>(dispatch)=>{
    dispatch(posturlDataLoading());
    return posturlDataRequest({url:id})
    .then((res)=>{
        dispatch(posturlDataSuccess(res.data,setvalue))
    }).catch((error) => {
        dispatch(posturlDataError(error));
      });
}

 const getAnalyicsLoading =()=>{}
 const getAnalyticsSuccess =()=>{}
 const getAnalyticsError =()=>{}
export const getAnalytics =()=>{}