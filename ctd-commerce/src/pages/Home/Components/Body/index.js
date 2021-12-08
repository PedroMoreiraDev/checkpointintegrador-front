import './style.scss';
import React,{useEffect,useState} from 'react';
import CardProdCat from '../../../Category/components/CardProdCat';
import api from '../../../../service/Api';


const Body = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function loadProductData() {
            try {
                const response = await api.get(`/products`);
                setProducts(response.data);
                console.log(response.data);
            } catch (err) {
                console.error("Não foi possivel carregar os dados" + err);
            }
        }
        loadProductData();
    },[]);

    return (
        
        <div className=" d-flex justify-content-center align-items-center">
            {products.map(({ id, nome, description, image, price }) => {
                return (
                    <CardProdCat className=" d-lg" key={id} prodcImg={image} prodcDesc={description} producTitle={nome} producPrice={price} />
                )
            })}
        </div>
    )

}

export default Body;