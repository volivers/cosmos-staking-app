import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 60%;
  background-color: ${({ theme }) => theme.palette.dark};
  padding: 1.5rem;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Date = styled.span`color: ${({ theme }) => theme.palette.white};`;
const Amount = styled.span`color: ${({ theme }) => theme.palette.primary};`;

const Transaction = ({
  transaction,
  name,
}) => {
  const {
    date,
    amount
  } = transaction;

  return (
    <Wrapper id={name}>
      <Date>{date}</Date>
      <Amount>{parseFloat(amount).toFixed(5)} ATOM</Amount>
    </Wrapper>
  );
};

export default Transaction;