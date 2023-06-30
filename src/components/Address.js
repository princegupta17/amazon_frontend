import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";
import Navbar from "./Navbar";

function Address() {
  const navigate = useNavigate();
  const [fullname, setfullname] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [flat, setflat] = useState("");
  const [area, setarea] = useState("");
  const [landmark, setlandmark] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [{}, dispatch] = useStateValue();
  const deliver = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_ADDRESS",
      item: {
        fullname,
        phonenumber,
        flat,
        area,
        landmark,
        city,
        state,
      },
    });
    navigate("/payment");
  };
  return (
    <Container>
      <Navbar />
      <Main>
        <FormContainer>
          <InputContainer>
            <p>Full Name</p>
            <input
              type="text"
              onChange={(e) => setfullname(e.target.value)}
              value={fullname}
              placeholder="John Smith"
            ></input>
          </InputContainer>
          <InputContainer>
            <p>Phone Number</p>
            <input
              type="text"
              onChange={(e) => setphonenumber(e.target.value)}
              value={phonenumber}
            ></input>
          </InputContainer>
          <InputContainer>
            <p>Flat, House no., Building, Company, Apartment</p>
            <input
              type="text"
              onChange={(e) => setflat(e.target.value)}
              value={flat}
            ></input>
          </InputContainer>
          <InputContainer>
            <p>Area, Colony, Street, Sector, Village</p>
            <input
              type="text"
              onChange={(e) => setarea(e.target.value)}
              value={area}
            ></input>
          </InputContainer>
          <InputContainer>
            <p>Landmark</p>
            <input
              type="text"
              onChange={(e) => setlandmark(e.target.value)}
              value={landmark}
            ></input>
          </InputContainer>
          <InputContainer>
            <p>Town/City</p>
            <input
              type="text"
              onChange={(e) => setcity(e.target.value)}
              value={city}
            ></input>
          </InputContainer>
          <InputContainer>
            <p>State</p>
            <input
              type="text"
              onChange={(e) => setstate(e.target.value)}
              value={state}
            ></input>
          </InputContainer>
          <button onClick={deliver}>Deliver to this Address</button>
        </FormContainer>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1400px;
  margin: auto;
  background-color: rgb(234, 237, 237);
  position: relative;
`;
const Main = styled.div`
  padding: 15px;
`;
const FormContainer = styled.form`
  border: 1px solid lightgray;
  width: 55%;
  min-width: 400px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background-color: #fff;
  margin: auto;

  button {
    align-self: flex-start;
    height: 33px;
    width: 250px;
    margin-top: 20px;
    background-color: #ffa32a;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
  }
`;
const InputContainer = styled.div`
  width: 100%;
  padding: 10px;

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
    margin-top: 5px;
    &:hover {
      border: 1px solid orange;
    }
  }
`;
export default Address;
