import React, { useState, useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import { Helmet } from 'react-helmet-async';
import './style.scss';

export default function Cart() {
    return(
        <>
            <Helmet>
                <title>RocketShop | Carrinho</title>
            </Helmet>
            <Container fluid className="d-flex justify-content-center align-items-center" id="container-cat" >
                <Row md={12} className="d-flex justify-content-center align-items-center" >
                    <div>
                        <ul>
                            <li>

                            </li>
                            <li>
         
                            </li>
                            <li>
                                
                            </li>
                        </ul>
                    </div>
                    <Col>

                    </Col>
                </Row>
            </Container>
        </>
    )

};
