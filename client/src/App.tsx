import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/pages/Layout';
import MapPage from './components/pages/MapPage';
import AuthPage from './components/pages/AuthPage';
import AccountPage from './components/pages/AccountPage';
import { useAppDispatch } from './features/redux/reduxHooks';
import { userCheckThunk } from './features/thunkActions';
import AppNavBar from './components/ui/AppNavBar';
import OneEventPage from './components/pages/OneEventPage';
import MainPage from './components/pages/MainPage';
import ArchivePage from './components/pages/ArchivePage';
import './style.css';
import Footer from './components/ui/Footer';


function App(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(userCheckThunk())
  }, [])
  return (
    <>
      <AppNavBar />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/auth/:type" element={<AuthPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path='/events/:id' element={<OneEventPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
