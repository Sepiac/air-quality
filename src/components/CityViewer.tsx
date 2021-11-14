import React from 'react'
import { CitiesResult } from '../api'
import { Header, Flag, FlagNameValues } from 'semantic-ui-react'

export interface Props {
  city: CitiesResult | undefined
}

const CityViewer = (props: Props) => {
  const { city } = props
  return (
    city ? (
      <Header as="h2">
        <Flag name={city?.country?.toLowerCase() as FlagNameValues} /> {city?.city}
      </Header>
    ) :( 
      <Header as="h2">&nbsp;</Header>
    )
  )
}

export default CityViewer
