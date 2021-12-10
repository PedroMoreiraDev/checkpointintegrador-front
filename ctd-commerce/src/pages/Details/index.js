import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './style.scss';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import api from '../../service/Api';

const Details = () => {
    const { produc } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function loadProductData() {
            try {
                const response = await api.get(`/products/${produc}`);
                setProducts(response.data);
            } catch (err) {
                console.error("Não foi possivel carregar os dados" + err);
            }
        }
        loadProductData();
    }, [produc]);

    return (

        <>
            <Helmet>
                <title>RocketShop | {`${products.title}`}</title>
            </Helmet>
            {(products !== 0 &&
                <Container key={products.id} fluid className="d-flex justify-content-center align-items-center mb-5">
                    <Row className="d-flex justify-content-center align-items-center">
                        <Col md={3} className="d-flex justify-content-center align-items-center pt-5">
                            <div className="d-flex justify-content-center align-items-start flex-wrap flex-column">
                                <img src={products.image} style={{ width: '20rem' }} alt="" />
                            </div>
                        </Col >
                        <Col md={6} className="d-flex justify-content-center align-items-start flex-column pt-5">
                            <h2>{products.title}</h2>
                            <p className="mb-3">{products.description}</p>
                            <div className="d-flex justify-content-center align-items-start flex-wrap flex-column">

                                <h5 className="mb-4">Preço: R$ {products.price}</h5>

                                <div className="d-flex justify-content-center align-items-start flex-wrap flex-column">
                                    <Button variant="primary" style={{ width: '11rem' }}>Comprar</Button>

                                    <a className="mt-3" href="Carrinho"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 20 20">
                                        <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z" />
                                        <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                    </svg>Adicionar ao carrinho</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            )}
        </>
    )
}
export default Details;
