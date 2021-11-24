import React from 'react'
import { CityRealTimeForm } from '.'
import { Grid } from 'semantic-ui-react'

export interface Props {
}

const CitySideBySide = (props: Props) => {


  return (
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column floated='left' width={7}>
          <CityRealTimeForm />
        </Grid.Column>
        <Grid.Column floated='right' width={7}>
          <CityRealTimeForm />
        </Grid.Column>
      </Grid.Row>
    </Grid >
  )
}

export default CitySideBySide
