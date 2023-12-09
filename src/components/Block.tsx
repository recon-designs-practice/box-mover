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
  box-shadow: ${(props) =>
    props.isSelected
      ? "0px 7px 8px 0px rgba(88, 97, 101, 0.2), 0px 5px 15px 0px rgba(88, 97, 101, 0.12), 0px 10px 17px 0px rgba(88, 97, 101, 0.14)"
      : "none"};
`;

export default function Block({ isSelected }: BlockProps) {
  return <StyledBlock isSelected={isSelected} />;
}
