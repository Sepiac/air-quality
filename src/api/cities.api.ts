import getOpenAQResponse from './openAQ.api';

export interface CitiesResponse {
  meta: Meta;
  results: Result[];
}

export interface Result {
  country: string;
  city: string;
  count: number;
  locations: number;
  firstUpdated: string;
  lastUpdated: string;
  parameters: string[];
}

export interface Meta {
  name: string;
  license: string;
  website: string;
  page: number;
  limit: number;
  found: number;
}


const getCities = async (options?: object):Promise<CitiesResponse> => {
  const response = await getOpenAQResponse<CitiesResponse>('/cities', options)
  return response
};

export default getCities;
