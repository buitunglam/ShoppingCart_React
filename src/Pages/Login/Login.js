import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loginCallApi } from "service/apiCalls";
import styled from "styled-components";
import { Container, Wrapper, Title, Form, Input, Button, Link } from './style';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleCLick = (e) => {
    e.preventDefault();
    loginCallApi(dispatch, { username, password });
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" onChange={e => setUsername(e.target.value)} />
          <Input placeholder="Password" type="password" onChange={e => setPassword(e.target.value)} />
          <Button onClick={handleCLick}>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
