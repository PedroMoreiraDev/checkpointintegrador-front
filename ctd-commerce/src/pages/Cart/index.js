import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap';
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
            <Container fluid md={12} className="d-flex justify-content-center flex-wrap flex-column m-5 align-items-start" >
                <h1>Carrinho:</h1>
                <div id="container-titulo" className="d-flex justify-content-around align-items-center flex-wrap flex-row">
                <p className="me-5">Foto</p>
                <p className="me-5">Produto</p>
                <p className="me-5">Descrição</p>
                <p className="me-5">Preço</p>
                </div> 
                {(cartProd !== 0 && cartProd.map(({ prodcId, prodcImg, prodcTitle, prodcDesc,prodcPrice
 }) => {
                                return (

                                <Row key={prodcId} md={6} className="d-flex justify-content-center align-items-center flex-wrap flex-column" >
                                    <div id="container-produto" className="d-flex justify-content-around align-items-center flex-wrap flex-row">
                                        <img src={prodcImg} alt=""  className="m-2"/>
                                        <p className="m-2"> {prodcTitle}</p>
                                        <p className="m-2"> {prodcDesc}</p>
                                        <p className="m-2"> R$ {prodcPrice}</p>
                                   </div>               
                                </Row> 
                                
                                
                                 
                                )
                            }))}



               
            </Container>
        </>
    )
}
