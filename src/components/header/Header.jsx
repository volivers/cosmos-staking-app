import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  padding: 2rem 0;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.palette.white};
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.3s ease-in;

  &:before {
    content: "";
    width: 2.5rem;
    height: 2px;
    background-color: ${({ theme }) => theme.palette.accent};
    position: absolute;
    bottom: 0;
    right: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &:hover { opacity: 0.7; }
`;

const Header = () => {
  return (
    <Wrapper>
      <Link>Earn ATOM</Link>
    </Wrapper>
  );
};

export default Header;