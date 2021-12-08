/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const CardProdCat=({prodcImg, producTitle, prodcDesc,producPrice})=>{
    return(
        <Card className="m-5 p-3"style={{ width: '18rem' }} id="card">
            <Card.Img variant="top" src={prodcImg} />
            <Card.Body>
                <Card.Title>{producTitle}</Card.Title>
                <Card.Text>{prodcDesc}</Card.Text>
                <Card.Text id="preco">
                    Preço: R$ {producPrice}
                </Card.Text>
                <div className="d-flex justify-content-center align-items-center" id="button">  
                    <Button id="button" variant="primary">Comprar</Button>
                    <a className="mt-3" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 20 20">
                                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                </svg>Adicionar ao carrinho</a>
                </div>
            </Card.Body>
        </Card>

    )
}

export default CardProdCat;