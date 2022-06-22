import React from 'react';
import styled from 'styled-components';

import Feed from '../components/Feed';
import Header from '../components/Header';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
`;

function Main() {
  return(
    <>
      <Header />
      <MainContainer>
        <Feed />
      </MainContainer>
    </>
  )
}

export default Main;