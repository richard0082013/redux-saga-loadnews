import axios from "axios";

const URL = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c39a26d9c12f48dba2a5c00e35684ecc';

export const getNewsRequest = () => {
  return axios.get(URL)
}