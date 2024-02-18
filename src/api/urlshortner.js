import axios from "axios"

const apiURL = 'https://odd-cyan-raven-boot.cyclic.app';

export const geturlDataRequest =(id)=>{
    return axios.get(`${apiURL}/url/analytics`, {
        headers: {
          accept: "application/json",
        },
      });
}

export const posturlDataRequest =(payload)=>{
    return axios.post(`${apiURL}/url`, payload, {
        headers: {
          accept: "application/json",
        },
      });
}

export const getAnalyticsRequest =()=>{
    return axios.get(`${apiURL}/:shortId`, {
        headers: {
          accept: "application/json",
        },
      });
}