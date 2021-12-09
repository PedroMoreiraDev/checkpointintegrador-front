import Carousel from './Components/Carousel';
import Body from './Components/Body';
import React from 'react';
import { Container} from 'react-bootstrap';
import './style.scss';


function Home() {
  return (
    <>
    <Container fluid className="m-0 p-0" id="container-home">
      <Carousel />
      <Body /> 
    </Container>
    
    </>
  );
}

export default Home;