import React from 'react';
import styled from 'styled-components';
import Header from '../components/header/Header';
import Form from '../components/form/Form';

const Main = styled.main`
  width: 100%;
  height: 100vh;
`;

const Section = styled.section`
  min-height: calc(100vh - 5rem);
  background-image: linear-gradient(-90deg, #151e24 0%, #11181d 99%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 4.5rem;
  margin: 3.5rem 0;
`;

const BaseLayout = () => {
  return (
    <Main>
      <Header />
      <Section>
        <Logo src="/svg/cosmos-logo.svg" alt="Cosmos Logo" />
        <h1>Earn Cosmos ATOM</h1>
        <p>
          Staking allows you to earn ATOM like a savings account.<br />
          Earnings are calculated based on your staked amount.
        </p>
        <Form />
      </Section>
    </Main>
  );
};

export default BaseLayout;