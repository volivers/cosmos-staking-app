import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 2.5rem;
`;

const StyledDivider = styled.span`
  height: 5vh;
  width: 1px;
  background-color: ${({ theme }) => theme.palette.secondary};
  opacity: 0.7;
`;

const Icon = styled.img`
  opacity: 0.3;
  margin: 0.5rem 0;
`;

const Divider = () => {
  return (
    <Wrapper>
      <StyledDivider />
      <Icon src="/svg/icon-social-link.svg" alt="Link icon" />
      <StyledDivider />
    </Wrapper>
  );
};

export default Divider;