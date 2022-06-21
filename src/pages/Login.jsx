import React from 'react';
import styled from 'styled-components';

import LoginForm from '../components/LoginForm';
import Logo from '../assets/text_logo.png'

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 2px solid black;
  padding: 10px;
  width: 20rem;
  min-height: 200px;
  margin: 50px auto;
`;

const LogoImg = styled.img`
  width: 200px;
  height: 100px;
`;

function Login() {
  return (
    <LoginContainer>
      <LogoImg src={Logo} />
      <LoginForm />
    </LoginContainer>
  )
}

export default Login;