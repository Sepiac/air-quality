import React, { useState, useEffect } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { getCities, CitiesResult} from './api'
import { CitySideBySide, CityPicker } from './components'
import { Container, Header } from 'semantic-ui-react'
import {QueryClient, QueryClientProvider} from 'react-query'

function App() {
  const [leftCity, setLeftCity] = useState<CitiesResult>()
  const [rightCity, setRightCity] = useState<CitiesResult>()

  useEffect(() => {
    getCities({
        params: {
          city: 'Jacksonville'
        }
      }).then(response => {
        setLeftCity(response.results[0])
      })
      getCities({
        params: {
          city: 'Miami'
        }
      }).then(response => {
        setRightCity(response.results[0])
      })
  }, [])
  
  return (
    <div className="App">
      <QueryClientProvider client={new QueryClient()}>
        <Header as='h1'>City Air Quality Comparer</Header>
        <Container>
          <CityPicker onDatachange={setLeftCity}/>
          <CityPicker onDatachange={setRightCity}/>
          <CitySideBySide left={leftCity} right={rightCity}/>
        </Container>
        </ QueryClientProvider>
    </div>
  );
}

export default App;
