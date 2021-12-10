import React, { createContext, useReducer, useEffect } from 'react';
import { cartReduce } from '../reduces/cartReduce';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartProd, dispatch] = useReducer(cartReduce, [], () => {
    const localData = localStorage.getItem('cartProd');
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartProd', JSON.stringify(cartProd));
  }, [cartProd]);

  const addProd = (prod) => dispatch({ type: 'ADD_PROD', payload: prod });

  return (
    <CartContext.Provider value={{ cartProd, addProd }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;