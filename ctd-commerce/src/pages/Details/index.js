import React, { Component } from 'react'
import { Container, Row, Col, Button} from 'react-bootstrap'
import './style.scss';

export default class Details extends Component {
    render() {
        return (
            <>
            <Container fluid className="d-flex justify-content-center align-items-center mb-5">
                <Row className="d-flex justify-content-center align-items-center">
                    <Col md={3} className="d-flex justify-content-center align-items-center pt-5">
                        <img src="https://www.extra-imagens.com.br/Control/ArquivoExibir.aspx?IdArquivo=1925067283" style={{width: '20rem'}}alt="" />
                    </Col >
                        
                    <Col md={6} className="d-flex justify-content-center align-items-start flex-column pt-5">
                        <h2>Nome do produto</h2>

                        <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae placeat sapiente laudantium, possimus, assumenda quod aperiam non nihil necessitatibus, sequi corporis dolores adipisci quas nobis ipsa fugit harum! Voluptatibus, atque?</p>

                        

                        <div className="d-flex justify-content-center align-items-start flex-wrap flex-column">  

                            <h5 className="mb-4">Preço: R$ 5.000,00</h5>

                            <div className="d-flex justify-content-center align-items-start flex-wrap flex-column">
                                <Button variant="primary" style={{width: '11rem'}}>Comprar</Button>

                                <a className="mt-3" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 20 20">
                                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                                    </svg>Adicionar ao carrinho</a>
                            </div>

                            
                </div>
                    </Col>


                </Row>
            </Container>
            </>
        )
    }
}
