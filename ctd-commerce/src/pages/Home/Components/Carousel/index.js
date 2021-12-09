import './style.scss';
import { Carousel, Row, Col } from 'react-bootstrap'
import React, { useEffect, useState } from 'react';
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
    }, []);

    const isEletronic = products => products.category === 'eletronic';
    const isFood = products => products.category === 'food';
    const isToys = products => products.category === 'toys';
    const isCloathing = products => products.category === 'cloathing';
    const isDrink = products => products.category === 'drink';
    const isJewelery = products => products.category === 'jewelery';

    const prodct1 = products.filter(isEletronic).pop();
    const prodct2 = products.filter(isFood).pop();
    const prodct3 = products.filter(isToys).pop();
    const Carroseul1 = [prodct1,prodct2,prodct3];
    const prodct4 = products.filter(isCloathing).pop();
    const prodct5 = products.filter(isDrink).pop();
    const prodct6 = products.filter(isJewelery).pop();
    const Carrousel2 = [prodct4,prodct5,prodct6];



    console.log(Carroseul1);
    // console.log(prodct2);
    // console.log(prodct3);
    // console.log(prodct4);
    // console.log(prodct5);
    // console.log(prodct6);


    return (
        <Carousel id="carousel-container">
            <Carousel.Item>
                <Row>
                    <div className="d-flex justify-content-center align-items-center">
                        <Col md={3} sm={6}>
                            {(Carroseul1 !== 0 && Carroseul1.map(({ id, nome, description, image, price })) )}
                            <CardProd key={id} prodcImg={image} producTitle={title} prodcDesc={description} producPrice={price}/>
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