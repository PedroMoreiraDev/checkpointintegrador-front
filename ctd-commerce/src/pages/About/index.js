import React, { Component } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';
import './style.scss';
import Duyllyan from "./Assets/duy.png"
import Pedro from "./Assets/pedro.png"
import Fernando from "./Assets/fernando.png"
import Leonardo from "./Assets/leonardo.png"
import Peter from "./Assets/peter.png"
import Mariana from "./Assets/magalu.png"


export default class About extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>RocketShop | Sobre</title>
                </Helmet>
                <Container fluid className="d-flex justify-content-center align-items-center flex-column flex-wrap mb-5" id="container">
                    <Col md={10} className="d-flex justify-content-center align-items-center m-5">
                        <h1 style={{ color: 'white' }}>Desenvolvedores:</h1>

                    </Col>

                    <Col md={12} className="d-flex justify-content-center align-items-center flex-row flex-wrap mb-5">
                        <div className="d-flex justify-content-center align-items-center flex-column m-2">
                            <img src={Duyllyan} style={{ width: '13rem' }} alt="" />
                            <h4 className="m-3" style={{ color: 'white' }}>Duyllyan Carvalho</h4>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column m-2">
                            <img src={Fernando} style={{ width: '13rem' }} alt="" />
                            <h4 className="m-3" style={{ color: 'white' }}>Fernando Carvalho</h4>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column m-2">
                            <img src={Leonardo} style={{ width: '13rem' }} alt="" />
                            <h4 className="m-3" style={{ color: 'white' }}>Leonardo Martins</h4>
                        </div>

                    </Col>

                    <Col md={12} className="d-flex justify-content-center align-items-center flex-row flex-wrap mb-5">
                        <div className="d-flex justify-content-center align-items-center flex-column m-2">
                            <img src={Pedro} style={{ width: '13rem' }} alt="" />
                            <h4 className="m-3" style={{ color: 'white' }}>Pedro Moreira</h4>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column m-2">
                            <img src={Peter} style={{ width: '13rem' }} alt="" />
                            <h4 className="m-3" style={{ color: 'white' }}>Peter Leite</h4>
                        </div>
                        <div className="d-flex justify-content-center align-items-center flex-column m-2">
                            <img src={Mariana} style={{ width: '13rem' }} alt="" />
                            <h4 className="m-3" style={{ color: 'white' }}>Mariana Lima</h4>
                        </div>

                    </Col>







                    {/* <div className="d-flex justify-content-center align-items-center flex-column m-2">
                        <img src={Pedro} style={{width: '13rem'}} alt="" />
                        <h4 className="m-3"style={{color: 'white'}}>Pedro Moreira</h4>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column m-2">
                        <img src={Peter} style={{width: '13rem'}} alt="" />
                        <h4 className="m-3"style={{color: 'white'}}>Peter Leite</h4>
                    </div>
                    <div className="d-flex justify-content-center align-items-center flex-column m-2">
                        <img src={Mariana} style={{width: '13rem'}} alt="" />
                        <h4 className="m-3"style={{color: 'white'}}>Mariana Lima</h4>
                    </div> */}

                </Container>
            </>
        )
    }
}
