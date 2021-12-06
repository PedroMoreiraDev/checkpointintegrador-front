import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from '../pages/Home/index';
import NotFound from '../pages/NotFound/index';
import React from 'react';

const RouteList = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default RouteList;