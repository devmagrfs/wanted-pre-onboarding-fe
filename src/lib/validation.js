const emailCheck = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const passwordCheck = /^.*(?=^.{8,}$)(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&+=]).*$/;

export const validation = (name, value) => {
  if(name === 'userId') {
    return emailCheck.test(value);
  }
  if(name === 'password') {
    return passwordCheck.test(value);
  }
};