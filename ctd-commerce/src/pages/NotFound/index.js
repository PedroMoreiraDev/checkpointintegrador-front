import { useNavigate } from 'react-router-dom';
import React from 'react';

const NotFound = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/');
  }, 5000);

  return (
    <>
      <h2>404 nada por aqui</h2>
    </>
  )
}
export default NotFound;