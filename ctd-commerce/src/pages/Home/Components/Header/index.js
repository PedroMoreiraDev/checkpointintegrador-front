/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.scss';
import logo from '../Assets/startup.png'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../../../service/Api';


const Header = () => {
    const [categories, setCategoryes] = useState([]);
    useEffect(() => {
        async function loadCategoriesData() {
            try {
                const response = await api.get('/categories');
                setCategoryes(response.data);
            } catch (err) {
                console.error("Não foi possivel carregar os dados" + err);
            }
        }
        loadCategoriesData();
    }, []);
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-xl navbar-light bg-light" aria-label="Sixth navbar examplen">

                    <div className="container-fluid d-flex justify-content-center align-items-center">

                        <div id="logo" className="d-flex justify-content-center align-items-center">
                            <a className="navbar-brand " >
                                <Link to={"/"}>
                                <img src={logo} class="m-2" alt="logo-rocket" width="50" height="50" />
                                RocketShop
                                </Link>
                            </a>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample06" aria-controls="navbarsExample06" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarsExample06">
                            <ul className="navbar-nav me-auto mb-2 mb-xl-0">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="dropdown06" data-bs-toggle="dropdown" aria-expanded="false">Produtos</a>
                                    <ul className="dropdown-menu" aria-labelledby="dropdown06">
                                        {categories.map((item) => {
                                            return (
                                                <li>
                                                    <Link to={`/category/:${item}`}>
                                                        <a class="dropdown-item"  >{item}</a>
                                                    </Link></li>
                                            )
                                        })}
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Sobre</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4" viewBox="0 0 20 20">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                    </svg></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )


}

export default Header;