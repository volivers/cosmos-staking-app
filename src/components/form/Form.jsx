import React, { useState } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { NETWORK_FEE, INTEREST_RATE } from '../../constants/staking';
import { calculateYearlyBalance, calculateAmount } from '../../utils/calculations';
import Button from '../button/Button';
import Input from '../input/Input';
import Divider from '../divider/Divider';
import Transaction from '../transaction/Transaction';
import Range from '../range/Range';

const Wrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputGroup = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

const initialAmount = parseFloat(0.00).toFixed(2);

const Form = () => {
  const [amount, setAmount] = useState(initialAmount);
  const [balance, setBalance] = useState(null);
  const [transactions, setTransactions] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (amount === initialAmount) return;

    const newTransactions = [
      ...transactions,
      {
        date: moment().format("MMM D, YYYY hh:mm:ss"),
        amount: amount
      }
    ];
    setTransactions(newTransactions);
    setAmount(initialAmount);
    setBalance(initialAmount);
  };

  return (
    <Wrapper>
      <InputGroup>
        <Input
          label="Enter the amount"
          value={amount}
          onChange={(e) => {
            setAmount(parseFloat(e.target.value));
            setBalance(
              calculateYearlyBalance(parseFloat(e.target.value), INTEREST_RATE)
            );
          }}
          align="right"
        />
        <Divider />
        <Input
          label="Balance in 1 year"
          value={balance}
          onChange={(e) => {
            setBalance(parseFloat(e.target.value));
            setAmount(
              calculateAmount(parseFloat(e.target.value), INTEREST_RATE)
            );
          }}
        />
      </InputGroup>
      <Range setAmount={setAmount} setBalance={setBalance} />
      {!!transactions && (
        transactions.map((transaction, ind) => (
          <Transaction transaction={transaction} key={ind} />
        ))
      )}
      <Button isSticky={transactions.length > 1} onClick={handleSubmit}>
        Stake ATOM
      </Button>
      <p>Network Fee {NETWORK_FEE.toString()} ATOM</p>
    </Wrapper>
  );
};

export default Form;