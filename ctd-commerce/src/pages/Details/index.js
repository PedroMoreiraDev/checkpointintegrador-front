import React, { useEffect, useState, useContext } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import './style.scss';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import api from '../../service/Api';
import { CartContext } from '../../contexts/CartContext';

const Details = () => {

    const {addProd} = useContext(CartContext);
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
    
    let prodcId = products.id;
    let prodcImg = products.image;
    let prodcDesc = products.description;
    let prodBrPrice = products.price;
    let prodcTitle = products.title;

    return (
        

        <>
            <Helmet>
                <title>RocketShop | {`${products.title}`}</title>
            </Helmet>
            {(products !== 0 &&
                <Container key={products.id} fluid className="d-flex justify-content-center align-items-center flex-row mb-5">
                    <Row className="d-flex justify-content-center align-items-center mt-5">
                        <Col md={3} className="d-flex justify-content-center align-items-center pt-4">
                            <div className="d-flex justify-content-start align-items-start m-3">
                                <img src={products.image} style={{ width: '15rem' }} alt="" />
                            </div>
                        </Col >
                        <Col md={6} className="d-flex justify-content-center align-items-start flex-column ms-5 pt-5">
                            <h2>{products.title}</h2>
                            <p className="mb-3">{products.description}</p>
                            <div className="d-flex justify-content-center align-items-start flex-wrap flex-column">
                                <h5 className="mb-4">Preço: R$ {products.price}</h5>
                                <div className="d-flex justify-content-center align-items-start flex-wrap flex-column">
                                <Button onClick={()=>addProd({prodcId, prodcImg, prodcTitle, prodcDesc,prodBrPrice})} id="button" variant="primary">Comprar</Button>
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
