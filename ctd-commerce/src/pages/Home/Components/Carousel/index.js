import './style.scss';
import { Carousel, Row, Col } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import api from '../../../../service/Api';
import CardProd from '../Card';


const CarouselHome = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function loadProductData() {
            try {
                const response = await api.get(`/products`);
                setProducts(response.data);
            } catch (err) {
                console.error("Não foi possivel carregar os dados" + err);
            }
        }
        loadProductData();
    }, [setProducts]);

    const isEletronic = products => products.category === 'Eletronico';
    const isFood = products => products.category === 'Comida';
    const isToys = products => products.category === 'Brinquedos';
    const isCloathing = products => products.category === 'Vestuario';
    const isDrink = products => products.category === 'Bebida';
    const isJewelery = products => products.category === 'Joias e Relogios';

    const prodct1 = products.filter(isEletronic).pop();
    const prodct2 = products.filter(isFood).pop();
    const prodct3 = products.filter(isToys).pop();
    const Carrousel1 = [prodct1, prodct2, prodct3];
    const prodct4 = products.filter(isCloathing).pop();
    const prodct5 = products.filter(isDrink).pop();
    const prodct6 = products.filter(isJewelery).pop();
    const Carrousel2 = [prodct4, prodct5, prodct6];

    return (
        <Carousel id="carousel-container">
            <Carousel.Item>
                <Row>
                    <div className="d-flex justify-content-center align-items-center">
                        {(Carrousel1[0] !== undefined && Carrousel1.map(({ id, image, description, title, price }) => {
                            return (
                                <Col id="setClassName" key={id} md={3} sm={6} className="d-none d-md-block">
                                    <CardProd key={id} prodcId={id} prodcImg={image} prodcDesc={description} prodcTitle={title} prodcPrice={price} />
                                </Col>
                            )
                        }
                        ))};
                    </div>
                </Row>
            </Carousel.Item>
        
            <Carousel.Item>
                <Row>
                    <div className="d-flex justify-content-center align-items-center">
                        {(Carrousel2[0] !== undefined && Carrousel2.map(({ id, image, description, title, price }) => {
                            return (
                                <Col key={id} md={3} sm={6} className="d-none d-md-block">
                                    <CardProd key={id} prodcId={id} prodcImg={image} prodcDesc={description} prodcTitle={title} prodcPrice={price} />
                                </Col>
                            )
                        }
                        ))};
                    </div>
                </Row>
            </Carousel.Item>
           
        </Carousel>
    )
}

export default CarouselHome;