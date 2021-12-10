import './style.scss';
import React, { useState, useEffect } from 'react';
import CardProd from '../Card';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import cupom from '../Assets/cupom.png'
import { Link } from 'react-router-dom';
import api from '../../../../service/Api';


const Body = () => {

    const [categories, setCategoryes] = useState([]);
    useEffect(() => {
        async function loadCategoriesData() {
            try {
                const response = await api.get('/categories');
                setCategoryes(response.data);
            } catch (err) {
                console.error("Não foi possivel carregar os dados" + err);
            }
        }
        loadCategoriesData();
    }, []);

    const title = "ROCKETSHOP"
    const subtitle = "OS MENORES PREÇOS DA GALÁXIA ESTÃO AQUI!"
   


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

                    <Col md={12}>

                        <Carousel>
                            <Carousel.Item>  
                                <div className=" container-fluid d-flex justify-content-center align-items-center flex-wrap flex-row" id="side-bar">
                                    <img className="mt-3" style={{ width: '32%' }} src="https://images.milledcdn.com/2017-11-27/WTgBz3Qe_RoCC5M5/DPCmin9ZTGi3.gif" alt="cyber-monday" />
                                    {/* <img className="mt-3" style={{ width: '20%' }} src={cupom} alt="cyber-monday" /> */}
                                </div>
                            </Carousel.Item>
                            
                            <Carousel.Item>  
                                <div className=" container-fluid d-flex justify-content-center align-items-center flex-wrap flex-row" id="side-bar">
                                    {/* <img className="mt-3" style={{ width: '22%' }} src="https://images.milledcdn.com/2017-11-27/WTgBz3Qe_RoCC5M5/DPCmin9ZTGi3.gif" alt="cyber-monday" /> */}
                                    <img className="mt-3" style={{ width: '30%' }} src={cupom} alt="cyber-monday" />
                                </div>
                            </Carousel.Item>
                        </Carousel>


                        <div className="d-flex justify-content-center align-items-center flex-wrap flex-row  mt-3 p-3"  style={{ color: 'white' }}>
                           
                            {(categories !== 0 && categories.map((item) => {
                                return (
                                    <Link to={`/category/${item}`}>
                                    <div key={item} id="cat" className="m-1 mt-5"><a className="m-3 p-2"  href="Item">{item}</a></div>
                                    </Link>
                                    
                                )
                            }))}
                        </div>

                     
                    </Col>
                    <Col md={12} className="d-flex justify-content-center align-items-center flex-wrap flex-column mt-5" id="cards-area" >
                        

                        <div className="d-flex justify-content-center align-items-center flex-wrap flex-row" id="cards">
                            {productsAll.map(({ id, title, description, image, price }) => {
                                return (
                                    <CardProd key={id} prodcId={id} prodcImg={image} prodcDesc={description} prodcTitle={title} prodcPrice={price} />
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>      
        </>
    )

}

export default Body;