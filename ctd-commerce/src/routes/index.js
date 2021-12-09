import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from '../pages/Home/index';
import NotFound from '../pages/NotFound/index';
import React from 'react';
import Header from '../pages/Home/Components/Header';
import Footer from '../pages/Home/Components/Footer/index'
import Category from '../pages/Category';
import Details from '../pages/Details';
import About from '../pages/About';

const RouteList = () => (
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:cat" element={<Category />} />
      <Route path="/product/details" element={<Details/>} />
      <Route path="/about" element={<About/>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/>

  </BrowserRouter>
);

export default RouteList;