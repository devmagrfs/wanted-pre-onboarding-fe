import React, { useCallback, useRef, useState, useEffect } from 'react';
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
  border: 1px solid;
  color: black;
  font-weight: bold;
  margin-bottom: 5px;
  padding: 0.7rem 0.5rem;
  width: 100%;
  border-radius: 3px;

  ${(props) => props.valid
      ? `
          border-color: black;
        `
      : `
          border-color: red;
        `
  }
`;

const Button = styled.button`
  margin-top: 5px;
  padding: 0.5rem;
  border-radius: 3px;
  width: 100%;

  ${(props) => props.valid
      ? `
          background: skyblue;
          cursor: pointer;
        `
      : `
          background: gray;
        `
  }
`;

function LoginForm() {
  const idRef = useRef();
  const pwdRef = useRef();
  const btnRef = useRef();

  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [idValid, setIdValid] = useState(false);
  const [pwdValid, setPwdValid] = useState(false);
  const [validComplete, setValidComplete] = useState(false);

  const localStorage = window.localStorage;

  const onChangeId = (e) => {
    setId(e.target.value);
    const result = validation(idRef.current.name, e.target.value);
    console.log(result);

    if(result === true) {
      setIdValid(true);
    } else {
      setIdValid(false);
      setId(e.target.value);
    }
  };

  const onChangePwd = (e) => {
    setPassword(e.target.value);
    const result = validation(pwdRef.current.name, e.target.value);

    if(result === true) {
      setPwdValid(true);
    } else {
      setPwdValid(false);
      setPassword(e.target.value);
    }
  };

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    localStorage.clear();
    localStorage.setItem('loginId', id);
    localStorage.setItem('loginPwd', password);
    navigate('/');
  }, [id, password]);

  useEffect(() => {
    if(idValid && pwdValid) {
      console.log(validComplete);
      setValidComplete(true);
      btnRef.current.disabled = false;
    } else {
      setValidComplete(false);
      btnRef.current.disabled = true;
    }
  }, [id, password]);

  return(
    <LoginFormStyled onSubmit={onSubmitForm}>
      <Input
        type="text"
        placeholder="전화번호, 사용자 이름 또는 전화번호"
        onChange={onChangeId}
        ref={idRef}
        valid={idValid}
        required
        name="userId"
      />
      <Input
        type="password"
        placeholder="비밀번호"
        onChange={onChangePwd}
        ref={pwdRef}
        valid={pwdValid}
        required
        name="password"
      />
      <Button
        htmltype="submit"
        ref={btnRef}
        disabled
        valid={validComplete}
      >
        로그인
      </Button>
    </LoginFormStyled>
  )
}

export default LoginForm;