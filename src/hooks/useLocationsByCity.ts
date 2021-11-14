import { useQuery } from 'react-query'
import { getLocations } from '../api'

const useCityByName = (cityName: string) => {
  return useQuery([cityName, 'locations'], () => getLocations({
    params: {
      city: cityName
    }
  }), {
    staleTime: (1000 * 60) * 60,
  })
}

export default useCityByName