import React from 'react';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { useAppSelector } from '../../features/redux/reduxHooks';

export default function AppNavBar(): JSX.Element {
  const user = useAppSelector((state) => state.user);
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink className="navbar-brand" to="/">
          Tigers App
        </NavLink>
        <Nav className="me-auto flex-grow-1">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </Nav>
        <Nav className="me-auto">
          {user.status !== 'success' && (
            <>
              <NavLink className="nav-link" to="/auth/signup">
                signUp
              </NavLink>
              <NavLink className="nav-link" to="/auth/signin">
                signIn
              </NavLink>
            </>
          )}
          {user.status === 'success' && (
            <>
              <span className="nav-link">Привет, {user.data.name}</span>
              <Button className="nav-link" variant="warning">
                Logout
              </Button>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
