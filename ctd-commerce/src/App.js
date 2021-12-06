import './App.scss';
import React from 'react';
import Header from './Components/Header';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer';
import Body from './Components/Body';
import { Container, Col, Row } from 'react-bootstrap';




function App() {
  return (
    <>
    <Header />
    <Carousel />  
    <Body />
    <Footer />
    </>
  );
}

export default App;
