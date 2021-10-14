import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "Components/Navbar/Navbar";
import Announcement from "Components/Announcement/Announcement";
import Products from "Components/Products/Products";
import NewsLetter from "Components/NewsLetter/NewsLetter";
import Footer from "Components/Footer/Footer";
import { mobile } from "responsive";
import { useLocation } from "react-router-dom";

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filter = styled.div`
  margin: 20px;
  ${mobile({ margin: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  outline: none;
  ${mobile({ margin: "10px 0px" })}
`;

const Option = styled.option``;

const ProductList = () => {
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const location = useLocation();
  const categoryName = location.pathname.split("/")[2];
  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name.toLowerCase()]: value.toLowerCase(),
    });
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>{categoryName}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter products: </FilterText>
          <Select name="color" onChange={handleFilters}>
            <Option selected>Color</Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select name="size" onChange={handleFilters}>
            <Option selected>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort products: </FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value="Newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products categoryName={categoryName} filters={filters} sort={sort} />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductList;
