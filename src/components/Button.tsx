import React from "react";
import styled from "styled-components";

type Props = {
  label?: String;
  onclick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled("button")<Props>`
  padding: 8px 8px;
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

export default function Button({ label, onclick, ...otherProps }: Props) {
  return (
    <StyledButton onClick={onclick} {...otherProps}>{label ? label : "Click me"}</StyledButton>
  );
}
