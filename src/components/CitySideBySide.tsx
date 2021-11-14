import React, { useState } from 'react'
import { CitiesResult, LocationsResult } from '../api'
import { Grid } from 'semantic-ui-react'
import { CityViewer, CityPicker, LocationViewer } from '.'

export interface Props {
}

const CitySideBySide = (props: Props) => {

  const [leftCity, setLeftCity] = useState<CitiesResult>()
  const [rightCity, setRightCity] = useState<CitiesResult>()

  const [leftLocations, setLeftLocations] = useState<LocationsResult[]>()
  const [rightLocations, setRightLocations] = useState<LocationsResult[]>()



  return (
    <Grid columns={2} >
      <Grid.Row>
        <Grid.Column floated='left' width={7}>
          <CityPicker setCity={setLeftCity} setLocations={setLeftLocations} />
          <CityViewer city={leftCity} />
          {leftLocations?.map(location => (
            <LocationViewer location={location} />
          ))}
        </Grid.Column>
        <Grid.Column floated='right' width={7}>
          <CityPicker setCity={setRightCity} setLocations={setRightLocations} />
          <CityViewer city={rightCity} />
          {rightLocations?.map(location => (
            <LocationViewer location={location} />
          ))}
        </Grid.Column>
      </Grid.Row>
    </Grid >
  )
}

export default CitySideBySide
