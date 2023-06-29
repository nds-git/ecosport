import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/pages/Layout';
import MapPage from './components/pages/MapPage';
import AuthPage from './components/pages/AuthPage';

function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MapPage />} />
        <Route path="/auth/:type" element={<AuthPage />} />
      </Route>
    </Routes>
  );
}

export default App;
