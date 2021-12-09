import React, { useState, useEffect } from 'react'
import { Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import api from '../../service/Api';
import CardProd from '../Home/Components/Card/index'

export default function Category() {
    const { cat } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function loadProductData() {
            try {
                const response = await api.get(`/products/category/${cat}`);
                setProducts(response.data);
                console.log(response.data);
            } catch (err) {
                console.error("Não foi possivel carregar os dados" + err);
            }
        }
        loadProductData();
    },[cat]);

    return (
        <Container fluid className="d-flex justfy-content-center align-items-center" >
            <Row md={12} className="d-flex justfy-content-center align-items-center" >
            {products.map(({ id, nome, description, image, price }) => {
                return (
                    <CardProd key={id} prodcImg={image} prodcDesc={description} producTitle={nome} producPrice={price} />
                )
            })}
            </Row> 
        </Container>
        
    )

};
