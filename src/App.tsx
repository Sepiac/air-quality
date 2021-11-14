import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import { CitySideBySide } from './components'
import { Container, Header } from 'semantic-ui-react'
import {QueryClient, QueryClientProvider} from 'react-query'

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={new QueryClient()}>
        <Header as='h1'>City Air Quality Comparer</Header>
        <Container>
          <CitySideBySide />
        </Container>
        </ QueryClientProvider>
    </div>
  );
}

export default App;
