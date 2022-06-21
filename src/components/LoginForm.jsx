import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import useInput from '../hooks/useInput';

const LoginFormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 5px;
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
      <button htmltype="submit">
        로그인
      </button>
    </LoginFormStyled>
  )
}

export default LoginForm;