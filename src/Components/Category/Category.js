import React from "react";
import styled from "styled-components";
import { categories } from "Ultils/data";
import CategoryItems from "./CategoryItems";
import {mobile} from 'responsive';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100wh;
  ${mobile({ flexDirection: "column", padding: "0px" })}
`;

const Category = () => {
  return (
    <Container>
      {categories.map((item, index) => (
        <CategoryItems key={index} item={item} />
      ))}
    </Container>
  );
};

export default Category;
