import axios from 'axios';

interface AxiosResponse<T> {
  data: T,
}

const getOpenAQResponse = async <T>(path: string, version: string='/v2'):Promise<T> => {
  const response:AxiosResponse<T> = await axios.get(`https://docs.openaq.org${version}${path}`)
  return response?.data
};

export default getOpenAQResponse;
