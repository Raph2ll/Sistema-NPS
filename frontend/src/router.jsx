import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Survey from './pages/Survey';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Survey />} />
    </Routes>
  );
}

export default Router;
