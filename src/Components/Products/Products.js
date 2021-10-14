import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { popularProducts } from "Ultils/data";
import Product from "./Product";
import axios from "axios";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ categoryName, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const products = await axios.get(
          categoryName
            ? `http://localhost:5000/api/products?category=${categoryName}`
            : `http://localhost:5000/api/products`
        );
        setProducts(products.data);
        console.log("products....", products);
      } catch (error) {}
    };

    getProducts();
  }, [categoryName]);

  useEffect(() => {
    categoryName &&
      setFilteredProduct(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) => {
            if (key === "size") {
              return item[key].includes(value.toUpperCase());
            }
            return item[key].includes(value.toLowerCase());
          })
        )
      );
  }, [products, categoryName, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProduct((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProduct((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProduct((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {categoryName
        ? filteredProduct.map((item, index) => (
            <Product item={item} key={index} />
          ))
        : products
            .slice(0, 8)
            .map((item, index) => <Product item={item} key={index} />)}
    </Container>
  );
};

export default Products;
