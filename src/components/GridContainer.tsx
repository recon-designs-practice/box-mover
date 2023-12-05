import React from "react";
import styled from "styled-components";

type GridContainerProps = {
  children: React.ReactElement | React.ReactElement[];
  className?: string;
};

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
  children,
  className,
  ...otherProps
}: GridContainerProps) {
  return (
    <Container className={className} {...otherProps}>
      {children}
    </Container>
  );
}
