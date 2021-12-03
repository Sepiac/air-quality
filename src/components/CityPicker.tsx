import React, { useState, useEffect } from 'react'
import { Input } from 'semantic-ui-react'
import { useCityByName, useLocationsByCity } from '../hooks'
import { debounce, each, join } from 'lodash'

interface Props {
  setCity: Function,
  setIsLoading: Function,
  setLocations: Function
}

const capitalizeCityName = (cityName: string) => {
  const cityNameArray:string[] = []
  each(cityName.split(' '), word => {
    cityNameArray.push(word.charAt(0).toUpperCase() + word.slice(1))
  })
  return join(cityNameArray, ' ');
}

const CityPicker = (props: Props) => {
  const { setCity, setLocations, setIsLoading} = props
  const [citySearchName, setCitySearchName] = useState('')
  const {data: citiesData, isLoading} = useCityByName(citySearchName)
  const {data: locationsData} = useLocationsByCity(citySearchName)

  useEffect(() => {
    setIsLoading(isLoading)
  }, [isLoading, setIsLoading])

  useEffect(() => {
    setCity(citiesData?.results[0])
  }, [citiesData, setCity])

  useEffect(() => {
    setLocations(locationsData?.results)
  }, [locationsData?.results, setLocations])

  return (
    <Input placeholder="Type the name of a city" onChange={debounce(e => setCitySearchName(capitalizeCityName(e.target.value)), 300)}/>
  )
}

export default CityPicker
