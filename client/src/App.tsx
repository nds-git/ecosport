import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/pages/Layout';
import MapPage from './components/pages/MapPage';
import AuthPage from './components/pages/AuthPage';
import AccountPage from './components/pages/AccountPage';
import { useAppDispatch, useAppSelector } from './features/redux/reduxHooks';
import { userCheckThunk } from './features/thunkActions';
import AppNavBar from './components/ui/AppNavBar';
import OneEventPage from './components/pages/OneEventPage';
import MainPage from './components/pages/MainPage';
import ArchivePage from './components/pages/ArchivePage';
import './style.css';
import Footer from './components/ui/Footer';
import AuthModal from './components/ui/Auth/AuthModal';
import OneArchEventPage from './components/pages/OneArchEventPage';
 
import LayoutSpinner from './components/pages/LayoutSpinner';
import PrivateRoute from './components/Hoks/PrivateRoute';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(userCheckThunk());
  }, []);
  return (
    <>
      <AuthModal />
      <AppNavBar />
      <Routes>
        <Route element={<LayoutSpinner />}>
        {/* <Route element={<Layout />}> */}
          <Route path="/" element={<MainPage />} />

          <Route
            path="/account"
            element={
              <PrivateRoute isAllowed={!(user?.status === 'guest')} redirectTo="/">
                <AccountPage />
              </PrivateRoute>
            }
          />
 

          <Route element={<PrivateRoute isAllowed={!(user && user.status)} redirectTo="/" />}>
            <Route path="/auth/:type" element={<AuthPage />} />
          </Route>
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/events/:id" element={<OneEventPage />} />
          <Route path="/events/archive/:id" element={<OneArchEventPage />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
