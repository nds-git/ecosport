import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/pages/Layout';
import PostsPage from './components/pages/PostsPage';
import { useAppDispatch } from './features/redux/reduxHooks';
import { userCheckThunk } from './features/thunkActions';
import AccountPage from './components/pages/AccountPage';

function App(): JSX.Element {
  return (
      <Routes>
        <Route path="/account" element={<AccountPage />} />
        {/* <Route element={<Layout />}> */}
          {/* <Route path="/" element={<PostsPage />} /> */}
          {/* <Route path="/auth/:type" element={<AuthPage />} /> */}
        {/* </Route> */}
      </Routes>
  );
}

export default App;
