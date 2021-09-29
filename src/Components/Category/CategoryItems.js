import React from "react";
import styled from "styled-components";
import { mobile } from "responsive";

const Container = styled.div`
  position: relative;
  flex: 1;
  height: 70vh;
  margin: 3px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "30vh" })}
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  color: #fff;
  margin-bottom: 20px;
`;
const Button = styled.button`
  padding: 10px;
  border: none;
  cursor: pointer;
  background-color: #fff;
  color: gray;
`;

const CategoryItems = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItems;
