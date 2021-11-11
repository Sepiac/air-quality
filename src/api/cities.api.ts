import getOpenAQResponse from './openAQ.api';
export interface CitiesResponse {
  meta: Meta;
  results: Result[];
}

interface Result {
  country: string;
  city: string;
  count: number;
  locations: number;
  firstUpdated: string;
  lastUpdated: string;
  parameters: string[];
}

interface Meta {
  name: string;
  license: string;
  website: string;
  page: number;
  limit: number;
  found: number;
}


const getCities = async ():Promise<CitiesResponse> => {
  const response = await getOpenAQResponse<CitiesResponse>('/cities')
  return response
};

export default getCities;
