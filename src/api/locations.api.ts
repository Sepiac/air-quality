import getOpenAQResponse from './openAQ.api';
export interface LocationsResponse {
  meta: Meta;
  results: Result[];
}

interface Result {
  id: number;
  city: string;
  name?: string;
  entity: string;
  country: string;
  sources: Source[];
  isMobile: boolean;
  isAnalysis: boolean;
  parameters: Parameter[];
  sensorType: string;
  coordinates?: Coordinates;
  lastUpdated: string;
  firstUpdated: string;
  measurements: number;
  bounds?: number[];
  manufacturers?: Manufacturer[];
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface Parameter {
  id: number;
  unit: string;
  count: number;
  average: number;
  lastValue: number;
  parameter: string;
  displayName: string;
  lastUpdated: string;
  parameterId: number;
  firstUpdated: string;
  manufacturers?: Manufacturer[];
}

interface Manufacturer {
  modelName: string;
  manufacturerName: string;
}

interface Source {
  id: string;
  url?: string;
  name: string;
  readme?: string;
  data_avg_dur?: string;
  organization?: string;
  lifecycle_stage?: string;
}

interface Meta {
  name: string;
  license: string;
  website: string;
  page: number;
  limit: number;
  found: number;
}


const getLocations = async (options?: object):Promise<LocationsResponse> => {
  const response = await getOpenAQResponse<LocationsResponse>('/locations', options)
  return response
};

export default getLocations;
