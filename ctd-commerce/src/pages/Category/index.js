import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import api from '../../service/Api';
import CardProd from '../Home/Components/Card/index'
import './style.scss';

export default function Category() {
    const { cat } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function loadProductData() {
            try {
                const response = await api.get(`/products/category/${cat}`);
                setProducts(response.data);
            } catch (err) {
                console.error("Não foi possivel carregar os dados" + err);
            }
        }
        loadProductData();
    },[cat]);

    return (
        <Container fluid className="d-flex justfy-content-center align-items-center" id="container-cat" >
            <Row md={12} className="d-flex justfy-content-center align-items-center" >
            {(products !== 0 && products.map(({ id, title, description, image, price }) => {
                return (
                    <CardProd key={id} prodcId={id} prodcImg={image} prodcDesc={description} producTitle={title} producPrice={price} />
                )
            }))}
            </Row> 
        </Container>
        
    )

};
