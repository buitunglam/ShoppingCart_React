import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  font-size: 14px;
  font-weight: bold;
`
const Announcement = () => {
  return (
    <Container>
      Supper Deal! Free Shipping Over $50
    </Container>
  )
}

export default Announcement
