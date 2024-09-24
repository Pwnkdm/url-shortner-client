import axios from "axios";

const apiURL = "https://url-shortner-04u5.onrender.com";

export const geturlDataRequest = (id) => {
  return axios.get(`${apiURL}/url/analytics`, {
    headers: {
      accept: "application/json",
    },
  });
};

export const posturlDataRequest = (payload) => {
  return axios.post(`${apiURL}/url`, payload, {
    headers: {
      accept: "application/json",
    },
  });
};

export const getAnalyticsRequest = () => {
  return axios.get(`${apiURL}/url/:shortId`, {
    headers: {
      accept: "application/json",
    },
  });
};
