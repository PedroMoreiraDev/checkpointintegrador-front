import { useNavigate } from 'react-router-dom';
import React from 'react';
import imgRocket from './banner-rocket.png'
const NotFound = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/');
  }, 50000);

  return (
    <div className="container-fluid">
      <img src={imgRocket} alt="Erro 404 Not Found" width="100%" centered />
    </div>
  )
}
export default NotFound;