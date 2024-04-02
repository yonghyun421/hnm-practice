import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticateAction } from "../redux/actions/authenticateAction";

const Login = ({ setAuthentication }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginUser = (e) => {
    e.preventDefault();
    setAuthentication(true);
    dispatch(authenticateAction.login(id, password));
    navigate("/");
  };

  return (
    <Container className="login-container">
      <Form onSubmit={(e) => loginUser(e)}>
        <h3 className="login-title">LOGIN</h3>
        <Row className="mb-3">
          <Col xs={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="id"
                placeholder="Enter ID"
                onChange={(e) => setId(e)}
              />
            </Form.Group>
          </Col>
          <Col xs={12}>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e)}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button className="login-button" variant="danger" type="submit">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
