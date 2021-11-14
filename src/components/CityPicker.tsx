import React, { useState, useEffect } from 'react'
import { Input } from 'semantic-ui-react'
import { useQuery } from 'react-query'
import { getCities } from '../api'

interface Props {
  onDatachange: Function
}

const CityPicker = (props: Props) => {
  const { onDatachange } = props
  const [citySearchName, setCitySearchName] = useState('')
  const {data} = useQuery(citySearchName, () => getCities({
    params: {
      city: citySearchName
    }
  }), {
    staleTime: (1000 * 60) * 60
  })

  useEffect(() => {
    onDatachange(data?.results[0])
  }, [data, onDatachange])

  return (
    <Input placeholder="Type the name of a city" onChange={e => setCitySearchName(e.target.value)}/>
  )
}

export default CityPicker
