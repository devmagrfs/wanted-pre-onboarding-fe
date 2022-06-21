import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  position: sticky;
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
  padding : 0.3rem 0.7rem;
  
  .header-search {
    display: none;
  
    @media only screen and (min-width: 769px) {
      display: inline;
      border: 1px solid pink;
      border-radius: 2px;
    }
  }
`;

const Logo = styled.div`
  border: 1px solid blue;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid purple;
`;

function Header() {
  return(
    <HeaderContainer>
      <Logo>
        인스타그램
      </Logo>
      <input type="text" className="header-search" placeholder="검색" />
      <ButtonWrapper>버튼들 위치</ButtonWrapper>
    </HeaderContainer>
  )
}

export default Header;