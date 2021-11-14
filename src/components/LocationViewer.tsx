import React from 'react'
import { LocationsResult } from '../api'
import { LocationParameterViewer } from '.'
import { Segment, Header } from 'semantic-ui-react'

export interface Props {
  location: LocationsResult | undefined
}

const CityViewer = (props: Props) => {
  const { location } = props
  return (
    <Segment>
      <Header as="h2">{location?.name}</Header>
      {location?.parameters.map(param => (
        <LocationParameterViewer parameter={param} />
      ))}
    </Segment>
  )
}

export default CityViewer
