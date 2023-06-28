import React from 'react';
import Container from 'react-bootstrap/Container';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './components/pages/AuthPage';
import Layout from './components/pages/Layout';
import PostsPage from './components/pages/PostsPage';
import { useAppDispatch } from './features/redux/reduxHooks';
import { userCheckThunk } from './features/thunkActions';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    void dispatch(userCheckThunk());
  }, []);
  return (
    <Container>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path="/" element={<PostsPage />} /> */}
          <Route path="/auth/:type" element={<AuthPage />} />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
