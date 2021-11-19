import React, { useState } from 'react'
import { CitiesResult, LocationsResult } from '../api'
import { Grid, Divider, Loader } from 'semantic-ui-react'
import { CityViewer, CityPicker, LocationViewer } from '.'

export interface Props {
}

const CitySideBySide = (props: Props) => {

  const [leftCity, setLeftCity] = useState<CitiesResult>()
  const [rightCity, setRightCity] = useState<CitiesResult>()

  const [leftCityIsLoading, setLeftCityIsLoading] = useState(false)
  const [rightCityIsLoading, setRightCityIsLoading] = useState(false)

  const [leftLocations, setLeftLocations] = useState<LocationsResult[]>()
  const [rightLocations, setRightLocations] = useState<LocationsResult[]>()



  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column floated='left' width={7}>
          <CityPicker
            setCity={setLeftCity}
            setLocations={setLeftLocations}
            setIsLoading={setLeftCityIsLoading}
          />
          <CityViewer city={leftCity} />
          <Divider />
          {leftLocations?.map((location, index) => (
            <LocationViewer key={index} location={location} />
          ))}
          <Loader active={leftCityIsLoading} />

        </Grid.Column>
        <Grid.Column floated='right' width={7}>
          <CityPicker
            setCity={setRightCity}
            setLocations={setRightLocations}
            setIsLoading={setRightCityIsLoading}
          />
          <CityViewer city={rightCity} />
          <Divider />
          {rightLocations?.map((location, index) => (
            <LocationViewer key={index} location={location} />
          ))}
          <Loader active={rightCityIsLoading} />
        </Grid.Column>
      </Grid.Row>
    </Grid >
  )
}

export default CitySideBySide
