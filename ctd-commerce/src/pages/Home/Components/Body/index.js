import './style.scss';
import React from 'react';
import CardProd from '../Card';


const Body =()=> {
return (
    <>
        <div class="container-fluid d-flex justify-content-center align-itens-center" id="container-body">
            <div class="d-flex justify-content-center" id="teste-1">Teste1</div> 

            <div class="d-flex justify-content-center" id="teste-2">
                <div class="d-flex justify-content-center" id="products"><h2>Os melhores produtos da galaxia</h2></div>
                <CardProd />
                <CardProd />
                <CardProd />
                <CardProd />
                <CardProd />
                <CardProd />
                <CardProd />
                <CardProd />
                <CardProd />
                <CardProd />               
            </div>
        
           
        </div>
</> 
)

}

export default Body;