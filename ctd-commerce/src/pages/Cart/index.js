import React, { useContext } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import './style.scss';
import { CartContext } from '../../contexts/CartContext';

export default function Cart() {

    const { cartProd } = useContext(CartContext);

    return (
        <>
            <Helmet>
                <title>RocketShop | Carrinho</title>
            </Helmet>
            <Container fluid md={12} className="d-flex justify-content-center flex-wrap flex-column m-5 align-items-start" >
                <h1>Carrinho:</h1>
                <div id="container-titulo" className="d-flex justify-content-around align-items-center flex-wrap flex-row">
                    <Col>
                        <p>Foto</p>
                    </Col>
                    <Col>
                        <p>Produto</p>
                    </Col>
                    <Col>
                        <p>Descrição</p>
                    </Col>
                    <Col>
                        <p >Preço</p>
                    </Col>
                </div>
                {(cartProd !== 0 && cartProd.map(({ prodcId, prodcImg, prodcTitle, prodcDesc, prodBrPrice
                }) => {
                    return (
                        <Row key={prodcId} md={6} className="d-flex justify-content-center align-items-center flex-wrap flex-column" >
                            <div id="container-produto" className="d-flex justify-content-around align-items-center flex-wrap flex-row">
                                <Col>
                                    <img src={prodcImg} alt="" className="m-2 justify-content-start" />
                                </Col>
                                <Col>
                                    <p className="m-1"> {prodcTitle}</p>
                                </Col>
                                <Col>
                                    <p className="m-2"> {prodcDesc}</p>
                                </Col>
                                <Col>
                                    <p className="m-1"> R$ {prodBrPrice}</p>
                                </Col>
                            </div>
                        </Row>
                    )
                }))}
            </Container>
        </>
    )
}
