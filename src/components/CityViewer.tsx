import React from 'react'
import { CitiesResult } from '../api'
import { Card, Flag, FlagNameValues } from 'semantic-ui-react'

export interface Props {
  city: CitiesResult | undefined
}

const CityViewer = (props: Props) => {
  const { city } = props
  return (
    city ? <Card>
      <Card.Content>
        <Card.Header>
        <Flag name={city.country.toLowerCase() as FlagNameValues}/> {city?.city}
        </Card.Header>
      </Card.Content>
    </Card> : null
  )
}

export default CityViewer
