import { useNavigate } from 'react-router-dom';
import React from 'react';
import imgRocket from './banner-rocket.png'
const NotFound = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/');
  }, 50000);

  return (
    <>
      <img src={imgRocket} alt="Erro 404 Not Found" width="100%" centered />
    </>
  )
}
export default NotFound;