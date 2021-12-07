import './style.scss';
import Carousel from 'react-bootstrap/Carousel'
import React from 'react';
import CardProd from '../Card';

const CarouselHome=()=>{
    return (
        <Carousel id="carousel-container">            
            <Carousel.Item>
                <div className="d-flex justify-content-center">
                    <CardProd />
                    <CardProd />
                    <CardProd />
                </div>                   
            </Carousel.Item>

            <Carousel.Item>
                <div className="d-flex justify-content-center">
                    <CardProd />
                    <CardProd />
                    <CardProd />
                </div>          
            </Carousel.Item>

            <Carousel.Item>
                <div className="d-flex justify-content-center">
                    <CardProd />
                    <CardProd />
                    <CardProd />
                </div>                
            </Carousel.Item>            
      </Carousel>
    )
}

export default CarouselHome;