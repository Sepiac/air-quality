import { useQuery } from 'react-query'
import { getCities } from '../api'

const useCityByName = (cityName: string) => {
  return useQuery(cityName, () => getCities({
    params: {
      city: cityName
    }
  }), {
    staleTime: (1000 * 60) * 60
  })
}

export default useCityByName