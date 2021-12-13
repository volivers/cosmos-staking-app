import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
  background-image: linear-gradient(281deg, #420be6, #a16bb3);
  color: ${({ theme }) => theme.palette.white};
  padding: 1rem 5rem;
  margin: 1rem 0;
  border-radius: 2rem;
  border: none;
  font-size: 12px;
  font-weight: 550;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease-in;
  ${({ isSticky }) =>
    isSticky &&
    css`
      position: sticky;
      bottom: 2.5rem;
    `};
  
  &:hover { opacity: 1; }
`;

const Button = ({
  name,
  onClick,
  isSticky = false,
  children
}) => {
  return (
    <StyledButton isSticky={isSticky} onClick={onClick} id={name}>
      {children}
    </StyledButton>
  );
};

export default Button;