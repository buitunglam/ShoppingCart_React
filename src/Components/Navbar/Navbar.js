import React from "react";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Input,
  Center,
  ImageLogo,
  Right,
  MenuItem,
} from "./style";

const Navbar = () => {
  const quantityInCart = useSelector((state) => state.cart.quantityInCart);
  console.log("quantity..", quantityInCart);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link
            to="/"
            style={{
              listStyle: "none",
              textDecoration: "none",
              color: "black",
            }}
          >
            <ImageLogo src="https://bizweb.dktcdn.net/100/339/085/themes/699262/assets/logo.png?1624497451198" />
          </Link>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <Link to="/cart">
            <MenuItem>
              <Badge badgeContent={quantityInCart} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
