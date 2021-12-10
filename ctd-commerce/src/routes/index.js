import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from '../pages/Home/index';
import NotFound from '../pages/NotFound/index';
import React from 'react';
import Header from '../pages/Home/Components/Header';
import Footer from '../pages/Home/Components/Footer/index'
import Category from '../pages/Category';
import Details from '../pages/Details';
import About from '../pages/About';
import { HelmetProvider } from 'react-helmet-async';
import Cart from '../pages/Cart';

const RouteList = () => (
  <BrowserRouter>
    <HelmetProvider>
  <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:cat" element={<Category />} />
      <Route path="/product/details/:produc" element={<Details/>} />
      <Route path="/product/cart" element={<Cart />} />
      <Route path="/about" element={<About/>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>
    </HelmetProvider>
  </BrowserRouter>
);

export default RouteList;