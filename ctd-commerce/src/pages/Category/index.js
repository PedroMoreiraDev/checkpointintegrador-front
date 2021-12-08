import React, { useState, useEffect } from 'react'
import api from '../../service/Api';
import CardProdCat from './components/CardProdCat'

export default function Category({cat}) {
 let nome = `${cat}`;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function loadCategoryData() {
            try {
                const response = await api.get('/products/category/eletronic');
                setProducts(response.data);
            } catch (err) {
                console.error("Não foi possivel carregar os dados" + err);
            }
        }
        loadCategoryData();
    },[nome]);


    return (
        <div>
            {products.map(({ id, nome, description, image, price }) => {
                return (
                    <CardProdCat key={id*3.1415} prodcImg={image} prodcDesc={description} producTitle={nome} producPrice={price} />
                )
            })}
        </div>
    )

};
