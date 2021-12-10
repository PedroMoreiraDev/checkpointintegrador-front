import { useNavigate } from 'react-router-dom';
import React from 'react';
import imgRocket from './banner-rocket.png'
import { Helmet }from 'react-helmet-async';

const NotFound = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/');
  }, 5000);

  return (
    <>
    <Helmet>
        <title>RocketShop | 404 Not Found</title>
    </Helmet>
    <div className="container-fluid">
      <img src={imgRocket} alt="Erro 404 Not Found" width="100%" centered />
    </div>
    </>
  )
}
export default NotFound;