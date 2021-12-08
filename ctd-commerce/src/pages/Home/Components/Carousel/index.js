import './style.scss';
import { Carousel, Row, Col }  from 'react-bootstrap'
import React from 'react';
import CardProd from '../Card';


const CarouselHome=()=>{
    return (
        <Carousel id="carousel-container">            
            <Carousel.Item>
                <Row>
                    <div className="d-flex justify-content-center align-items-center">
                    <Col md={3} sm={6}>
                        <CardProd />
                    </Col>
                    <Col md={3} sm={6} className="d-none d-sm-block">
                        <CardProd />
                    </Col>
                    <Col md={3} sm={6} className="d-none d-md-block">
                        <CardProd />
                    </Col>
                    </div>
                </Row>                  
            </Carousel.Item>                   
        </Carousel>
    )
}

export default CarouselHome;