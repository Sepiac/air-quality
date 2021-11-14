import React, { useState } from 'react'
import { CitiesResult } from '../api'
import { Grid } from 'semantic-ui-react'
import { CityViewer, CityPicker } from '.'

export interface Props {
}

const CitySideBySide = (props: Props) => {

  const [leftCity, setLeftCity] = useState<CitiesResult>()
  const [rightCity, setRightCity] = useState<CitiesResult>()

  return (
    <Grid columns={2} >
      <Grid.Row>
        <Grid.Column floated='left' width={5}>
          <CityPicker onDatachange={setLeftCity} />
          <CityViewer city={leftCity} />
        </Grid.Column>
        <Grid.Column floated='right' width={5}>
          <CityPicker onDatachange={setRightCity} />
          <CityViewer city={rightCity} />
        </Grid.Column>
      </Grid.Row>
    </Grid >
  )
}

export default CitySideBySide
