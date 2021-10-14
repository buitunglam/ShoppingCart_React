import React, {useState} from "react";
// import styled from "styled-components";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@mui/icons-material";
import { sliderItems } from "Ultils/data";
import {
  Container,
  Arrow,
  Wrapper,
  Slide,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Button,
} from "./styles";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleOnclick = (direction) => {
    if(direction === 'left'){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleOnclick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((slide, index) => (
          <Slide bg={slide.bg} key={index}>
            <ImgContainer>
              <Image src={slide.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{slide.title}</Title>
              <Desc>{slide.desc}</Desc>
              <Button>SHOP NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleOnclick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
