import React from 'react'
import { LocationsParameter } from '../api'
import { Segment } from 'semantic-ui-react'

export interface Props {
  parameter: LocationsParameter | undefined
}

const CityViewer = (props: Props) => {
  const { parameter } = props
  return (
    <Segment>
      {parameter?.displayName}: {parameter?.lastValue} {parameter?.unit}
    </Segment>
  )
}

export default CityViewer
