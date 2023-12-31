import React from "react";
import styled from "styled-components";
import useBlockStore from "../store";
import Button from "./Button";

const Container = styled("div")`
  box-sizing: border-box,
  postion: relative;
  grid-column: 2 / 12;
  // gap: 12px;

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

const Wrapper = styled("div")`
  box-sizing: border-box,
  postion: relative;
  grid-column: 2 / 12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 8px;
`;

export default function GridControls() {
  const selectedBlock = useBlockStore((state) => state.selectedBlock);
  const updateBlock = useBlockStore((state) => state.updateBlock);

  const handleUpClick = () => {
    const newBlock = {
      x: selectedBlock.x,
      y: selectedBlock.y >= 2 ? 0 : selectedBlock.y + 1,
    };

    updateBlock(newBlock);
  };

  const handleDownClick = () => {
    const newBlock = {
      x: selectedBlock.x,
      y: selectedBlock.y === 0 ? 2 : selectedBlock.y - 1,
    };

    updateBlock(newBlock);
  };

  const handleLeftClick = () => {
    const newBlock = {
      x: selectedBlock.x === 0 ? 2 : selectedBlock.x - 1,
      y: selectedBlock.y,
    };

    updateBlock(newBlock);
  };

  const handleRightClick = () => {
    const newBlock = {
      x: selectedBlock.x >= 2 ? 0 : selectedBlock.x + 1,
      y: selectedBlock.y,
    };

    updateBlock(newBlock);
  };

  return (
    <Container>
      <Wrapper>
        <Button
          style={{ gridColumn: "6 / 8" }}
          label="Up"
          onclick={handleUpClick}
        />
        <Button
          style={{ gridColumn: "4 / 6" }}
          label="Down"
          onclick={handleDownClick}
        />
        <Button
          style={{ gridColumn: "8 / 10" }}
          label="Left"
          onclick={handleLeftClick}
        />
        <Button
          style={{ gridColumn: "6 / 8" }}
          label="Right"
          onclick={handleRightClick}
        />
      </Wrapper>
    </Container>
  );
}
