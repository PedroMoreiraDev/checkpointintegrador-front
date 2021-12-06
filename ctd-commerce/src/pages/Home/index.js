import '../Home/style.scss';
import React from 'react';
import Header from './Components/Header';
import Carousel from './Components/Carousel/index';


function Home() {
  return (
    <>
    <Header />
    <Carousel />  
    </>
  );
}

export default Home;