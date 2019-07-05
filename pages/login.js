import styled, { createGlobalStyle } from "styled-components"
import { UsernameIcon, PasswordIcon } from "../components/main/Icons"
import Link from "next/link"

const Login = () => (
  <div>
    <LoginBody />
    <LoginBox>
      <LoginLogo />
      <LoginForm>
        <LogItemContainer>
          <UsernameIcon />
          <input placeholder="Username" name="username" />
        </LogItemContainer>
        <LogItemContainer>
          <PasswordIcon />
          <input placeholder="Password" name="username" />
        </LogItemContainer>
        <LoginBTN>Log in</LoginBTN>
      </LoginForm>
      <ForgetPass>
        <Link href="#">
          <a>Forgot Password?</a>
        </Link>
      </ForgetPass>
    </LoginBox>
  </div>
)

export default Login

const LoginBody = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url("static/images/login-bg2.jpg");
    background-size: cover;
    font-family: Montserrat;
  }
`

const LoginBox = styled.div`
  width: 300px;
  height: 450px;
  background-color: #21d4fd;
  background-image: linear-gradient(19deg, #21d4fd 0%, #b721ff 100%);
  margin: 100px auto;
  overflow: hidden;
  border-radius: 5px;
`
const LoginLogo = styled.div`
  width: 100px;
  height: 100px;
  margin: 20px auto;
  border-radius: 50px;
  border: 2px solid white;
`
const LoginForm = styled.form`
  width: 100%;
  height: auto;
  overflow: hidden;
  span {
    display: block;
    width: 100%;
    height: 30px;
  }
`
const LogItemContainer = styled.div`
  width: 90%;
  height: 40px;
  border-bottom: 2px solid white;
  margin: 20px auto;
  svg {
    width: 20px;
    height: 20px;
    margin-left: 5px;
    margin-top: 10px;
  }
  input {
    width: 87%;
    padding-left: 5px;
    margin-top: 5px;
    height: 30px;
    float: right;
    background: none;
    border: medium none;
    font-size: 15px;
  }
  input::placeholder {
    color: white;
    opacity: 1;
    font-size: 12px;
  }
`
const LoginBTN = styled.div`
  width: 100px;
  height: 46px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 30px;
  text-align: center;
  line-height: 46px;
  color: #333;
  margin: 40px auto;
`
const ForgetPass = styled.div`
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  margin: 0px auto;
  a {
    font-size: 15px;
    text-decoration: none;
    color: white;
  }
`
