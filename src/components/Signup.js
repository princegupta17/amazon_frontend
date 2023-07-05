import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();
    axios
      .post("/auth/signup", { email, password, fullName })
      .then((res) => alert(res.data.message))
      .catch((err) => console.warn(err));

    navigate("/login");
  };

  return (
    <Container>
      <Logo onClick={() => navigate("/")}>
        <img src="./amazon.png" alt="logo"></img>
      </Logo>
      <FormContainer>
        <h3>Sign-Up</h3>
        <InputContainer>
          <p>FullName</p>
          <input
            type="text"
            placeholder="John Smith"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          ></input>
        </InputContainer>
        <InputContainer>
          <p>Email</p>
          <input
            type="email"
            placeholder="exampke@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          ></input>
        </InputContainer>
        <InputContainer>
          <p>Password</p>
          <input
            type="password"
            placeholder="**********"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          ></input>
        </InputContainer>
        <Signupbutton onClick={signup}>Create Account in Amazon</Signupbutton>
        <Infotags>
          By continuing, you agree to Amazon's
          <span> Conditions of Use</span> and
          <span> Privacy Notice.</span>
        </Infotags>
      </FormContainer>
      <LoginButton onClick={() => navigate("/login")}>
        Back to Login
      </LoginButton>
    </Container>
  );
}

const Container = styled.div`
  width: 40%;
  min-width: 450px;
  height: fit-content;
  padding: 15px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Logo = styled.div`
  width: 120px;
  margin-bottom: 20px;
  img {
    width: 100%;
  }
`;
const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 55%;
  height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;

  h3 {
    font-size: 28px;
    font-weight: 400;
    line-height: 33px;
    align-self: flex-start;
    margin-bottom: 5px;
  }
`;
const InputContainer = styled.div`
  width: 100%;
  padding: 5px;

  p {
    font-size: 14px;
    font-weight: 600;
  }

  input {
    width: 95%;
    height: 33px;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px solid lightgray;
    margin-top: 1px;
    &:hover {
      border: 1px solid orange;
    }
  }
`;

const Infotags = styled.p`
  font-size: 12px;
  width: 100%;
  word-wrap: normal;
  word-break: normal;
  margin-top: 20px;

  span {
    color: #426bc0;
  }
`;

const Signupbutton = styled.button`
  width: 100%;
  height: 35px;
  font-size: 12px;
  margin-top: 20px;

  &:hover {
    background-color: #dfdfdf;
    border: 1px solid gray;
  }
`;
const LoginButton = styled.button`
  width: 55%;
  height: 35px;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;
export default Login;
