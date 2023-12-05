import React from "react";
import styled from "styled-components";
import Block from "./Block";

type GridContainerProps = {
  selectedBlock: {
    x: Number;
    y: Number;
  };
  className?: string;
};

const BlockWrapper = styled("div")`
  grid-column: span 4;
`;

const Container = styled("div")`
  box-sizing: border-box,
  postion: relative;
  grid-column: 2 / 12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 8px;

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

export default function GridContainer({
  className,
  selectedBlock,
  ...otherProps
}: GridContainerProps) {
  const { x, y } = selectedBlock;
  // console.log('From GridContainer:', x, y)
  return (
    <Container className={className} {...otherProps}>
      <BlockWrapper>
        <Block isSelected={x === 0 && y === 2} />
      </BlockWrapper>
      <BlockWrapper>
        <Block isSelected={x === 1 && y === 2} />
      </BlockWrapper>
      <BlockWrapper>
        <Block isSelected={x === 2 && y === 2} />
      </BlockWrapper>
      <BlockWrapper>
        <Block isSelected={x === 0 && y === 1} />
      </BlockWrapper>
      <BlockWrapper>
        <Block isSelected={x === 1 && y === 1} />
      </BlockWrapper>
      <BlockWrapper>
        <Block isSelected={x === 2 && y === 1} />
      </BlockWrapper>
      <BlockWrapper>
        <Block isSelected={x === 0 && y === 0} />
      </BlockWrapper>
      <BlockWrapper>
        <Block isSelected={x === 1 && y === 0} />
      </BlockWrapper>
      <BlockWrapper>
        <Block isSelected={x === 2 && y === 0} />
      </BlockWrapper>
    </Container>
  );
}
