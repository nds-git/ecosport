import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import useFormHook from '../../hooks/useFormHook';

export default function AuthPage(): JSX.Element {
  const { type } = useParams();

  const { signInHandler, signUpHandler } = useFormHook();

  return (
    <Row className="mt-3">
      <Col>
        <Form  onSubmit={type === 'signup' ? signUpHandler : signInHandler}>
          {type === 'signup' && (
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="name@example.com" />
            </Form.Group>
          )}
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="name@example.com" />
          </Form.Group>
          <Button type="submit">ok</Button>
        </Form>
      </Col>
    </Row>
  );
}
