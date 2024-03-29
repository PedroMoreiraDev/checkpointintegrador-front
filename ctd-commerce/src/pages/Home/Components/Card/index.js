/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';
import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../../contexts/CartContext';

const CardProd = ({ prodcId, prodcImg, prodcTitle, prodcDesc, prodcPrice }) => {

    var prodBrPrice = prodcPrice.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 3
    })

    const { addProd } = useContext(CartContext);
    return (
        <Card className="m-5 p-3" style={{ width: '18rem', height: '30rem' }} id="card">
            <div className="d-flex justify-content-center align-items-center">
                <Link to={`/product/details/${prodcId}`}>
                    <img src={prodcImg} alt="" height="200rem" />
                </Link>
            </div>
            <Card.Body>
                <Card.Title>{prodcTitle}</Card.Title>
                <Card.Text>{prodcDesc}</Card.Text>
                <Card.Text id="preco">
                    Preço: R$ {prodBrPrice}
                </Card.Text>
                <div className="d-flex justify-content-center align-items-center flex-wrap flex-column" id="button">
                    <Button onClick={() => addProd({ prodcId, prodcImg, prodcTitle, prodcDesc, prodBrPrice })} id="button" variant="primary">Comprar</Button>
                </div>
            </Card.Body>
        </Card>
    )
}


export default CardProd;

