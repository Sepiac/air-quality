import React, { useState } from 'react'
import { CitiesResult, LocationsResult } from '../api'
import { Divider, Loader } from 'semantic-ui-react'
import { CityViewer, CityPicker, LocationViewer } from '.'

export interface Props { }

const CityRealTimeForm = () => {

  const [city, setCity] = useState<CitiesResult>()
  const [cityIsLoading, setCityIsLoading] = useState(false)
  const [locations, setLocations] = useState<LocationsResult[]>()

  return (
    <>
      <CityPicker
        setCity={setCity}
        setLocations={setLocations}
        setIsLoading={setCityIsLoading}
      />
      <CityViewer city={city} />
      <Loader active={cityIsLoading} inline />
      <Divider />
      {locations?.map((location, index) => (
        <LocationViewer key={index} location={location} />
      ))}
    </>

  )
}

export default CityRealTimeForm
