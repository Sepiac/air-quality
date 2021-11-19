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
      <Header as="h3">{location?.name}</Header>
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Pollutant</Table.HeaderCell>
            <Table.HeaderCell>Measurement</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {location?.parameters.map((param, index) => (
            <Table.Row key={index}>
              <Table.Cell>{param?.displayName}</Table.Cell>
              <Table.Cell>{param?.lastValue} {param?.unit}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  )
}

export default CityViewer
