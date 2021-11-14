import React from 'react'
import { LocationsResult } from '../api'
import { LocationParameterViewer } from '.'
import { Segment, Header, Table } from 'semantic-ui-react'

export interface Props {
  location: LocationsResult | undefined
}

const CityViewer = (props: Props) => {
  const { location } = props
  return (
    <>
      <Header as="h2">{location?.name}</Header>
      <Table striped>
        <Table.Header>
          <Table.HeaderCell>Pollutant</Table.HeaderCell>
          <Table.HeaderCell>Measurement</Table.HeaderCell>
        </Table.Header>
        {location?.parameters.map(param => (
          <Table.Row>
            <Table.Cell>{param?.displayName}</Table.Cell>
            <Table.Cell>{param?.lastValue} {param?.unit}</Table.Cell>
          </Table.Row>
        ))}
      </Table>
    </>
  )
}

export default CityViewer
