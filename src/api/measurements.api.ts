import getOpenAQResponse from './openAQ.api';
export interface MeasurementsResponse {
  meta: Meta;
  results: Result[];
}

interface Result {
  locationId: number;
  location?: any;
  parameter: string;
  value: number;
  date: Date;
  unit: string;
  coordinates: Coordinates;
  country: string;
  city: string;
  isMobile: boolean;
  isAnalysis: boolean;
  entity: string;
  sensorType: string;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface Date {
  utc: string;
  local: string;
}

interface Meta {
  name: string;
  license: string;
  website: string;
  page: number;
  limit: number;
  found: number;
}


const getMeasurements = async (options?: object):Promise<MeasurementsResponse> => {
  const response = await getOpenAQResponse<MeasurementsResponse>('/measurements', options)
  return response
};

export default getMeasurements;
