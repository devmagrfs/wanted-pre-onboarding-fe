import React from 'react';
import styled from 'styled-components';

import LoginForm from '../components/LoginForm';
import InstagramLogo from '../assets/text_logo.png'

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  min-width: 300px;
  min-height: 400px;
  margin: 50px auto;
`;

const LogoImg = styled.img`
  width: 200px;
  height: 100px;
`;

function Login() {
  return (
    <LoginContainer>
      <LogoImg src={InstagramLogo} />
      <LoginForm />
    </LoginContainer>
  )
}

export default Login;