import styled from "styled-components";
import { mobile } from "responsive";

const Container = styled.div`
  height: 60px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 25px;
  ${mobile({ marginLeft: "5px" })}
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  cursor: pointer;
  font-weight: bold;
  ${mobile({ fontSize: "20px" })}
`;
const ImageLogo = styled.img`
  width: 70px;
  height: 40px;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ justifyContent: "center", flex: 2 })}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  /* margin-left: 25px; */
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

export {
  Container,
  Wrapper,
  Left,
  Language,
  SearchContainer,
  Input,
  Center,
  Logo,
  Right,
  MenuItem,
  ImageLogo
};
