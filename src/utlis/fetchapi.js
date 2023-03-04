import axios from 'axios';
export const URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
        maxResults: 50,
      },
    headers: {
      'X-RapidAPI-Key': '303af8678cmshbb64f4b171665bfp176511jsn19c2ee28ef82',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  export const fetchAPI = async (query) => {

    const {data} = await axios.get(`${URL}/${query}`, options)
    return data;
  }