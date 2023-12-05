import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Container = styled("div")`
  box-sizing: border-box,
  postion: relative;
  grid-column: 2 / 12;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 576px) {
    grid-column: 3 / 11;
  }

  @media (min-width: 768px) {
    grid-column: 4 / 10;
  }

  @media (min-width: 900px) {
    grid-column: 5 / 9;
  }

  @media (min-width: 1200px) {
    grid-column: 5 / 9;
  }
`;

export default function GridControls() {
  return (
    <Container>
      <Button label="Up" />
      <Button label="Down" />
      <Button label="Left" />
      <Button label="Right" />
    </Container>
  );
}
