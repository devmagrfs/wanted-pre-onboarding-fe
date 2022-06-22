import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import SmallLogo from '../assets/text_logo.png';
import { useEffect } from 'react';

const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid gray;
  border-bottom: 2px solid gray;
  padding : 0.3rem 2rem;
  z-index: 1;
  
  .header-search {
    display: none;
  
    @media only screen and (min-width: 576px) {
      display: inline;
      width: 200px;
      padding: 0.5rem;
      border: 1px solid pink;
      background-color: #edeaea;
      border-radius: 4px;
    }
  }
`;

const Logo = styled.img`
  width: auto;
  height: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid purple;
  padding: 0;
  min-width: 10rem;

  @media only screen and (min-width: 576px){
    min-width: 10rem;
  }
`;

const IconBtn = styled.button`
  width: 50px;
  height: 30px;
  background: gray;
  cursor: pointer;
`;

function Header() {
  const navigate = useNavigate();
  const isLogin = !!localStorage.getItem('loginId');

  useEffect(() => {
    if(isLogin === false) {
      navigate('/login');
    }
  }, [isLogin]);

  const logout = useCallback(() => {
    localStorage.clear();
    navigate('/login');
  }, []);

  return(
    <HeaderContainer>
      <Logo src={SmallLogo} />
      <input type="text" className="header-search" placeholder="검색" />
      <ButtonWrapper>
        <IconBtn />
        <IconBtn />
        <IconBtn />
          <IconBtn onClick={logout}>Logout</IconBtn>
      </ButtonWrapper>
    </HeaderContainer>
  )
}

export default Header;