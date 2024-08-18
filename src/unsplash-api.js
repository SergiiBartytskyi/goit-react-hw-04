import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    "Accept-Version": "v1",
    Authorization: "Client-ID ShVR3i6LdoWAo4L9g8AWxgR8TYEwTxSDCpkOos3heI0",
  },
});

export const fetchPicturesWithTopic = async (topic) => {
  const response = (await instance.get(`/search/photos?query=${topic}`)).data;
  return response;
};
// export const fetchPicturesWithTopic = async (topic) => {
//   const response = await axios.get(`/search/photos?query=${topic}`, {
//     headers: {
//       "Accept-Version": "v1",
//       Authorization: "Client-ID ShVR3i6LdoWAo4L9g8AWxgR8TYEwTxSDCpkOos3heI0",
//     },
//   });
//   return response.data.hits;
// };
