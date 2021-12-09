import React, { useState, useEffect } from 'react'
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
        <div className="container-fluid d-flex">
            {products.map(({ id, nome, description, image, price }) => {
                return (
                    <CardProd key={id} prodcImg={image} prodcDesc={description} producTitle={nome} producPrice={price} />
                )
            })}
        </div>
    )

};
