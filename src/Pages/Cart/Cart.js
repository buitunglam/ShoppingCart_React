import React, { useState, useEffect } from "react";
import Footer from "Components/Footer/Footer";
import Navbar from "Components/Navbar/Navbar";
import Announcement from "Components/Announcement/Announcement";
import { Add, Remove } from "@mui/icons-material";
import {
  Container,
  Wrapper,
  Title,
  Top,
  TopButton,
  TopTexts,
  TopText,
  Bottom,
  Info,
  Product,
  ProductDetail,
  Hr,
  Image,
  Details,
  ProductName,
  ProductID,
  ProductColor,
  ProductSize,
  PriceDetail,
  ProductAmountContainer,
  ProductAmount,
  ProductPrice,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,
  NoProducts,
} from "./style";
import { useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "service/baseRequest";
import { useHistory } from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE;

const Cart = () => {
  const [tokenStripe, setTokenStripe] = useState("");
  const cart = useSelector((state) => state.cart);
  const productInCart = cart.products;
  const history = useHistory();
  const onToken = (token) => {
    setTokenStripe(token);
  };

  useEffect(() => {
    console.log('tokenStripe...', tokenStripe);
    const requestCheckout = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId: tokenStripe.id,
          amount: cart.total * 100
        });
        history.push('/success',{data: res.data});
      } catch (error) {
        console.log('err..', error);
      }
    }
    tokenStripe && requestCheckout();
  }, [tokenStripe, cart.total, history])

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping bags({productInCart.length})</TopText>
            <TopText>Your wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>

        <Bottom>
          <Info>
            {productInCart.length > 0 ? (
              productInCart.map((product) => (
                <>
                  <Product>
                    <ProductDetail>
                      <Image src={product.img} />
                      <Details>
                        <ProductName>
                          {" "}
                          <b>Product:</b> {product.title}{" "}
                        </ProductName>
                        <ProductID>
                          {" "}
                          <b>ID: </b>
                          {product._id}{" "}
                        </ProductID>
                        <ProductColor color={product.color} />
                        <ProductSize>
                          {" "}
                          <b>Size: </b>
                          {product.size}
                        </ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountContainer>
                        <Add />
                        <ProductAmount>{product.quantity}</ProductAmount>
                        <Remove />
                      </ProductAmountContainer>
                      <ProductPrice>
                        ${product.price * product.quantity}
                      </ProductPrice>
                    </PriceDetail>
                  </Product>
                </>
              ))
            ) : (
              <NoProducts>No products in your cart</NoProducts>
            )}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Estimate shipping</SummaryItemText>
              <SummaryItemPrice>$5.9</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>- $5.9</SummaryItemPrice>
            </SummaryItem>

            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>${cart.total}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout
              name="Fire monkey"
              image="https://assets.pokemon.com/assets/cms2/img/pokedex/full/392.png"
              token={onToken}
              stripeKey={KEY}
              amount={cart.total * 100}
              description={`Your total is ${cart.total}`}
              billingAddress
              shippingAddress
            >
              <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
