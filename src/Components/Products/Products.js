import React from 'react'
import styled from 'styled-components';
import {popularProducts} from 'Ultils/data';
import Product from './Product';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;


const Products = () => {
  return (
    <Container>
      {popularProducts.map((item, index) => (
        <Product item={item} key={index}/>
      ))}
    </Container>
  )
}

export default Products
