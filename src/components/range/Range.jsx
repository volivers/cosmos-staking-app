import React, { useState } from 'react';
import styled from 'styled-components';
import { calculateYearlyBalance } from '../../utils/calculations';
import {
  STAKES,
  INTEREST_RATE,
  CURRENT_BALANCE
} from '../../constants/staking';

const Wrapper = styled.div`
  width: 35%;
  background-color: ${({ theme }) => theme.palette.bg};
  margin: 0.5rem 0 2.5rem 0;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const RangeItem = styled.span`
  color: ${({ theme }) => theme.palette.body};
  font-size: 14px;
  font-weight: normal;
  text-align: center;
  padding: 1rem 2rem;
  border-radius: 1.5rem;
  background-color: ${({ theme, active }) =>
    active ? theme.palette.white : 'transparent'
  };
  cursor: pointer;
  transition: all 0.3s ease-in;
  &:hover { opacity: 0.7; }
`;

const Range = ({
  setAmount,
  setBalance
}) => {
  const [active, setActive] = useState('');
  return (
    <Wrapper>
      {STAKES.map((stake, ind) => (
        <RangeItem
          key={ind}
          active={active === stake.label}
          onClick={() => {
            setActive(stake.label);
            setAmount(CURRENT_BALANCE * (stake.value / 100));
            setBalance(
              calculateYearlyBalance((CURRENT_BALANCE * (stake.value / 100)), INTEREST_RATE)
            );
          }}
        >
          {stake.label}
        </RangeItem>
      ))}
    </Wrapper>
  );
};

export default Range;