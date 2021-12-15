import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { NETWORK_FEE, INTEREST_RATE } from '../../constants/staking';
import { calculateYearlyBalance, calculateAmount } from '../../utils/calculations';
import { initialSteps, newStep } from '../../constants/tutorial';
import { Steps } from 'intro.js-react';
import Input from '../input/Input';
import Divider from '../divider/Divider';
import Range from '../range/Range';
import Transaction from '../transaction/Transaction';
import Button from '../button/Button';

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
  const [stepsEnabled, setStepsEnabled] = useState(true);
  const [steps, setSteps] = useState(initialSteps);

  useEffect(() => {
    setTimeout(() => {
      if (steps.length < [...initialSteps, newStep].length) {
        setStepsEnabled(false);
        setSteps(prevState => ([...prevState, newStep]));
        setStepsEnabled(true);
      }
    }, 3000);
  }, [steps]);

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
      <Steps
        enabled={stepsEnabled}
        steps={steps}
        initialStep={steps.length - 1}
        onExit={() => setStepsEnabled(false)}
        options={{ showButtons: false, highlightClass: 'highlight' }}
      />
      <InputGroup>
        <Input
          name="stake-amount-input"
          label="Enter the amount"
          value={amount}
          onChange={(e) => {
            setAmount(parseFloat(e.target.value));
            setBalance(
              calculateYearlyBalance(parseFloat(e.target.value), INTEREST_RATE)
            );
          }}
        />
        <Divider />
        <Input
          name="stake-balance-input"
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
      <Range
        name="stake-percentage-switch"
        setAmount={setAmount}
        setBalance={setBalance}
      />
      {!!transactions && (
        transactions.map((transaction, ind) => (
          <Transaction
            name={`stake-transaction-${ind + 1}`}
            transaction={transaction}
            key={ind}
          />
        ))
      )}
      <Button
        name="stake-button"
        isSticky={transactions.length > 1}
        onClick={handleSubmit}
      >
        Stake ATOM
      </Button>
      <p>Network Fee {NETWORK_FEE.toString()} ATOM</p>
    </Wrapper>
  );
};

export default Form;