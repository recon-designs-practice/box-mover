import React from "react";
import styled from "styled-components";

type BlockProps = {
  isSelected?: Boolean;
};

const StyledBlock = styled("div")<BlockProps>`
  postion: relative;
  box-sizing: border-box;
  padding-top: 100%;
  background: ${(props) => (props.isSelected ? "lightgreen" : "lightgray")};
  height: 100px;
  border-radius: 8px;
`;

export default function Block({ isSelected }: BlockProps) {

  return <StyledBlock isSelected={isSelected} />;
}
