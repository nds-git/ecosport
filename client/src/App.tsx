import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/pages/Layout';
import MapPage from './components/pages/MapPage';
import AuthPage from './components/pages/AuthPage';
import AccountPage from './components/pages/AccountPage';
import AppNavBar from './components/ui/AppNavBar';
import OneEventPage from './components/pages/OneEventPage';
import MainPage from './components/pages/MainPage';

function App(): JSX.Element {
  return (
    <>
      <AppNavBar />
      <Routes>
        <Route element={<Layout />}>
           <Route path="/" element={<MainPage />} />
          <Route path="/auth/:type" element={<AuthPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path='/events/:id' element={<OneEventPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
