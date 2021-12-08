import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from '../pages/Home/index';
import NotFound from '../pages/NotFound/index';
import React from 'react';
import Header from '../pages/Home/Components/Header';
import Footer from '../pages/Home/Components/Footer/index'
import Category from '../pages/Category';

const RouteList = () => (
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:item" element={<Category cat={":item"}/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer/> 

  </BrowserRouter>
);

export default RouteList;