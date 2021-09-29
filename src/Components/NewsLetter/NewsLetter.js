import { Send } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import {mobile} from 'responsive';

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;
const Description = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: 'center' })}
`;

const InputContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border: 1px solid lightgray;
  ${mobile({ width: '80%' })}
`;
const Input = styled.input`
  flex: 8;
  border: none;
  height: 100%;
  outline: none;
  padding-left: 10px;
`;
const Button = styled.button`
  flex: 1;
  background-color: teal;
  color: #fff;
  border: none;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely update from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;
