import React, { useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { validation } from '../lib/validation';


const LoginFormStyled = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 1rem;
  width: 350px;
`;

const Input = styled.input`
  color: black;
  font-weight: bold;
  margin-bottom: 5px;
  padding: 0.7rem 0.5rem;
  width: 100%;
  border-radius: 3px;
  border: 1px solid ${({ valid, theme }) => (valid ? theme.color.primary : theme.color.border)};
`;

const Button = styled.button`
  margin-top: 5px;
  padding: 0.5rem;
  border-radius: 3px;
  width: 100%;
  
  background: ${({ disabled, theme }) => disabled ? theme.color.disabled : theme.color.abled};
  cursor: ${({ disabled, theme }) => disabled ? theme.cursor.default : theme.cursor.pointer};
`;

// 이미 존재하는 아이디 테스트 케이스
const admin = {
  id: 'test@test.com',
  password: 'Qwer1234!'
};

function LoginForm() {
  const navigate = useNavigate();
  const idRef = useRef(null);
  const pwdRef = useRef(null);

  const [validStatus, setValidStatus] = useState({
    email: null,
    password: null,
  });
  const localStorage = window.localStorage;

  const handleInput = (event, ref) => {
    ref.current.value = event.target.value;
    const {value, name} = ref.current;
    const validResult = validation(name, value);

    if(validStatus[name] === validResult) return;
    setValidStatus((prev) => ({
      ...prev,
      [name]: validResult,
    }));
  };

  const clearValidStatus = (event, ref) => {
    if(ref.current.value === '') {
      setValidStatus((prev) => ({
        ...prev,
        [event.target.name]: null,
      }));
    };
  };

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    if(admin.id === idRef.current.value) {
      alert('동일한 아이디가 존재합니다.');
      return;
    }
    localStorage.setItem('loginId', idRef.current.value);
    navigate('/');
  }, []);

  return(
    <LoginFormStyled onSubmit={onSubmitForm}>
      <Input
        type='text'
        placeholder='전화번호, 사용자 이름 또는 전화번호'
        onChange={(event) => handleInput(event, idRef)}
        onBlur={(event) => clearValidStatus(event, idRef)}
        ref={idRef}
        valid={validStatus.email === null ? true : validStatus.email}
        required
        name='email'
      />
      <Input
        type='password'
        placeholder='비밀번호'
        onChange={(event) => handleInput(event, pwdRef)}
        onBlur={(event) => clearValidStatus(event, pwdRef)}
        ref={pwdRef}
        valid={validStatus.password === null ? true : validStatus.password}
        required
        name='password'
        autoComplete='off'
      />
      <Button
        htmltype='submit'
        disabled={!(validStatus.email && validStatus.password)}
      >
        로그인
      </Button>
    </LoginFormStyled>
  )
}

export default LoginForm;