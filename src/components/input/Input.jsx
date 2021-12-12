import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const InputLabel = styled.p`
  text-align: left;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
`;

const StyledInput = styled.input`
  background-color: transparent;
  color: ${({ theme }) => theme.palette.primary};
  border: none;
  font-size: 56px;
  text-align: ${({ align }) => align};

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus { outline: none; }
`;

const Input = ({
  label,
  value,
  onChange,
  align = 'left',
}) => {
  return (
    <Wrapper>
      <InputLabel>{label}</InputLabel>
      <StyledInput
        type="number"
        step="0.000001"
        min="0"
        value={value}
        onChange={onChange}
        align={align}
      />
    </Wrapper>

  );
};

export default Input;