import React from "react";
import { ButtonWrapper } from './button.style';

const Button = ({text, onClick}) => {
  return (
    <ButtonWrapper
    onClick={onClick}
    >
      <span>{text}</span>
    </ButtonWrapper>
  );
};

export default Button;