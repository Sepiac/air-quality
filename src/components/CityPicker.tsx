import React, { useState, useEffect } from 'react'
import { Input } from 'semantic-ui-react'
import { useCityByName } from '../hooks'

interface Props {
  onDatachange: Function
}

const CityPicker = (props: Props) => {
  const { onDatachange } = props
  const [citySearchName, setCitySearchName] = useState('')
  const {data} = useCityByName(citySearchName)

  useEffect(() => {
    onDatachange(data?.results[0])
  }, [data, onDatachange])

  return (
    <Input placeholder="Type the name of a city" onChange={e => setCitySearchName(e.target.value)}/>
  )
}

export default CityPicker
