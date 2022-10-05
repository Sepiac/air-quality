import axios from 'axios';

interface AxiosResponse<T> {
  data: T,
}

const getOpenAQResponse = async <T>(path: string, options: object={}, version: string='/v2'):Promise<T> => {
  const response:AxiosResponse<T> = await axios.get(`https://api.openaq.org${version}${path}`, options)
  return response?.data
};

export default getOpenAQResponse;
