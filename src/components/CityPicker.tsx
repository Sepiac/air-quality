import React, { useState, useEffect } from 'react'
import { Input } from 'semantic-ui-react'
import { useCityByName, useLocationsByCity } from '../hooks'

interface Props {
  setCity: Function,
  setLocations: Function
}

const CityPicker = (props: Props) => {
  const { setCity, setLocations } = props
  const [citySearchName, setCitySearchName] = useState('')
  const {data: citiesData} = useCityByName(citySearchName)
  const {data: locationsData} = useLocationsByCity(citySearchName)

  useEffect(() => {
    setCity(citiesData?.results[0])
  }, [citiesData, setCity])

  useEffect(() => {
    setLocations(locationsData?.results)
  }, [locationsData?.results, setLocations])

  return (
    <Input placeholder="Type the name of a city" onChange={e => setCitySearchName(e.target.value)}/>
  )
}

export default CityPicker
