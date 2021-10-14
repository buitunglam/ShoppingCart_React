import React, { useEffect, useState } from "react";
import { Add, Remove } from "@mui/icons-material";
import Announcement from "Components/Announcement/Announcement";
import Footer from "Components/Footer/Footer";
import Navbar from "Components/Navbar/Navbar";
import NewsLetter from "Components/NewsLetter/NewsLetter";
import { useLocation } from "react-router-dom";
import { publicRequest } from "service/callApi";
import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from "./style";
import { useDispatch } from "react-redux";
import {addProduct} from 'redux/cartRedux';

const ProductDetail = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        console.log("res...", res);
        setProduct(res.data);
      } catch (error) {
        console.log("error get product detail..", error);
      }
    };
    getProduct();
  }, [id]);

  const handleClickQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(addProduct({
      ...product,
      quantity,
      color,
      size
    }));
  }

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src={product?.img} />
        </ImgContainer>
        <InfoContainer>
          <Title>{product?.title}</Title>
          <Desc>{product?.desc}</Desc>
          <Price>{product?.price}$</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product?.color
                ? product.color.map((c, index) => (
                    <FilterColor
                      key={index}
                      color={c}
                      onClick={() => setColor(c)}
                    />
                  ))
                : null}
            </Filter>

            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                {product?.size
                  ? product.size.map((s, index) => (
                      <FilterSizeOption key={index} onChange={() => setSize(s)}>
                        {s}
                      </FilterSizeOption>
                    ))
                  : null}
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleClickQuantity("dec")} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleClickQuantity("inc")} />
            </AmountContainer>
            <Button onClick={() => handleAddToCart()}>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductDetail;
