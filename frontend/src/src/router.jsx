import { Route, Routes } from 'react-router-dom';
import React from 'react';
// import Home from './pages/Home';


function Router() {
  return (
    <Routes>

      <Route path="/" element={<h1>fofo</h1>} />
    </Routes>
  );
}

export default Router;