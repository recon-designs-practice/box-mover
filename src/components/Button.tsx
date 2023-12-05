import React from "react";
import styled from "styled-components";

type Props = {
  label: String;
  onclick?: () => void;
};

const StyledButton = styled("button")`
  padding: 8px 16px;
  font-size: 20px;
  line-height: 24px;
  font-weight: bold;
  color: hotpink;
  background: none;
  border: 2px solid hotpink;
  border-radius: 8px;

  &:hover {
    background: rgba(255, 105, 180, 0.1);
  }

  &:active {
    background: rgba(255, 105, 180, 0.2);
  }
`;

export default function Button({ label, onclick }: Props) {
  return (
    <StyledButton onClick={onclick}>{label ? label : "Click me"}</StyledButton>
  );
}
