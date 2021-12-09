import './style.scss';
import React, { useState, useEffect } from 'react';
import CardProd from '../Card';
import { Container, Row, Col } from 'react-bootstrap';
import cupom from '../Assets/cupom.png'
import api from '../../../../service/Api';


const Body = () => {

    const title = "ROCKETSHOP"
    const subtitle = "OS MENORES PREÇOS DA GALÁXIA ESTÃO AQUI"
    const products = "---------------------- PRODUTOS ----------------------"


    const [productsAll, setProductsAll] = useState([]);
    useEffect(() => {
        async function loadProductData() {
            try {
                const response = await api.get(`/products`);
                setProductsAll(response.data);
            } catch (err) {
                console.error("Não foi possivel carregar os dados" + err);
            }
        }
        loadProductData();
    }, []);

    return (
        <>
            <Container fluid id="container-body" className="mt-5">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <Row id="sub-body">
                    <Col md={3}>
                        <div className="d-flex justify-content-center align-items-center flex-wrap flex-column  mt-3 p-3" id="cat" style={{ color: 'white' }}>
                            <h4 style={{ color: 'smokewhite' }}>Categorias</h4>
                            <div>Categoria 1</div>
                            <div>Categoria 2</div>
                            <div>Categoria 3</div>
                            <div>Categoria 4</div>
                            <div>Categoria 4</div>
                        </div>

                        <div className=" container-fluid d-flex justify-content-center align-items-center flex-wrap flex-column" id="side-bar">
                            <img className="mt-3" style={{ width: '100%' }} src="https://images.milledcdn.com/2017-11-27/WTgBz3Qe_RoCC5M5/DPCmin9ZTGi3.gif" alt="cyber-monday" />
                            <img className="mt-3" style={{ width: '100%' }} src={cupom} alt="cyber-monday" />
                        </div>

                    </Col>
                    <Col md={9} className="d-flex justify-content-center align-items-center flex-wrap flex-column" id="cards-area" >
                        <h3>{products}</h3>

                        <div className="d-flex justify-content-center align-items-center flex-wrap flex-row" id="cards">
                            {productsAll.map(({ id, nome, description, image, price }) => {
                                return (
                                    <CardProd key={id} prodcImg={image} prodcDesc={description} producTitle={nome} producPrice={price} />
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>

            {/* <div className="container-fluid d-flex flex-wrap flex-column justify-content-flex-start align-items-center m-0 p-0" id="left-side">
            <div className="container-fluid d-flex justify-content-start align-items-center flex-column flex-wrap m-0 p-0" id="cat">  
                <h4>Categorias:</h4>
                <buton className=" btn btn-primary">Categoria 1</buton>
                <buton className=" btn btn-primary">Categoria 2</buton>
                <buton className=" btn btn-primary">Categoria 3</buton>
                <buton className=" btn btn-primary">Categoria 4</buton>                   
            </div>
            <div>
                <img style={{ width: '100%' }} src="https://c.tenor.com/Co7dqWySU_MAAAAC/sales-sale.gif" alt="" /></div>
        </div>


        <div className="container-fluid d-flex flex-wrap flex-row justify-content-center align-items-center m-0 p-0" id="right-side">
            <CardProd />
            <CardProd />
            <CardProd />
            <CardProd />
            
            
        </div> */}



        </>
    )

}

export default Body;