import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import './style.scss';
import { CartContext } from '../../contexts/CartContext';

export default function Cart() {

    const {cartProd} = useContext(CartContext);
    
    
    return (
        <>
            <Helmet>
                <title>RocketShop | Carrinho</title>
            </Helmet>
            <Container fluid className="d-flex justify-content-center align-items-center" id="container-cat" >
                <Row md={12} className="d-flex justify-content-center align-items-center" >
                    <Col>
                        <div class="bg-danger" >
                            <ul>
                                <li>
                                </li>
                                <li>

                                </li>
                                <li>

                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <div class="bg-danger" >

                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
