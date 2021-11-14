import React from 'react'
import { CitiesResult } from '../api'
import { Grid } from 'semantic-ui-react'
import { CityViewer } from '.'

export interface Props {
  left: CitiesResult | undefined
  right: CitiesResult | undefined
}

const CitySideBySide = (props: Props) => {
  const { left, right } = props
  return (
    <Grid columns={2} >
      <Grid.Row>
        <Grid.Column floated='left' width={5}>
          <CityViewer city={left} />
        </Grid.Column>
        <Grid.Column floated='right' width={5}>
          <CityViewer city={right} />
        </Grid.Column>
      </Grid.Row>
    </Grid >
  )
}

export default CitySideBySide
