import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import useInput from '../hooks/useInput';

const LoginFormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  width: 350px;
`;

const Input = styled.input`
  border: 1px solid;
  color: black;
  font-weight: bold;
  margin-bottom: 5px;
  padding: 0.7rem 0.5rem;
  width: 100%;
  border-radius: 3px;
`;

const Button = styled.button`
  margin-top: 5px;
  padding: 0.5rem;
  border-radius: 3px;
  width: 100%;
`;

function LoginForm() {
  const navigate = useNavigate();
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const localStorage = window.localStorage;

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    localStorage.clear();
    localStorage.setItem('loginId', id);
    localStorage.setItem('loginPwd', password);
    navigate('/main');
  }, [id, password])

  return(
    <LoginFormStyled onSubmit={onSubmitForm}>
      <Input
        type="text"
        placeholder="전화번호, 사용자 이름 또는 전화번호"
        onChange={onChangeId}
        required
      />
      <Input
        type="password"
        placeholder="비밀번호"
        onChange={onChangePassword}
        required
      />
      <Button htmltype="submit">
        로그인
      </Button>
    </LoginFormStyled>
  )
}

export default LoginForm;