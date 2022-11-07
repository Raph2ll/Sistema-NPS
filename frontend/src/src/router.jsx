import { Route, Routes } from 'react-router-dom';
import React from 'react';
// import Home from './pages/Home';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<h1>Teste</h1>} />
    </Routes>
  );
}

export default Router;
