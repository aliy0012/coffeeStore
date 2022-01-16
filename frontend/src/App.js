import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './comonents/Header';
import Footer from './comonents/Footer';
import Home from './screens/Home';

function App() {
  return (
   
      <>
      <Header />

      <main className='py-3'>
        <Container>
          <Home />
        </Container>
      
      </main>
      <Footer />
      </>
      
  );
}

export default App;
