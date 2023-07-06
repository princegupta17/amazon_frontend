import axios from "../axios";
import React, { useState } from "react";
import styled from "styled-components";
function Addproduct() {
  const [title, settitle] = useState();
  const [imageurl, setimageurl] = useState();
  const [price, setprice] = useState();
  const [rating, setrating] = useState();

  const addproductdetails = (e) => {
    e.preventDefault();
    axios
      .post("https://amazon-kk16.onrender.com/products/add", { title, imageurl, price, rating })
      .then(() => {
        settitle("");
        setimageurl("");
        setprice(0);
        setrating(0);
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Container>
      <Logo>
        <img src="./amazon.png" alt="logo"></img>
      </Logo>
      <FormContainer>
        <h3>Add Products</h3>
        <InputContainer>
          <p>Title</p>
          <input
            type="text"
            onChange={(e) => settitle(e.target.value)}
            value={title}
          ></input>
        </InputContainer>
        <InputContainer>
          <p>ImageUrl</p>
          <input
            type="text"
            onChange={(e) => setimageurl(e.target.value)}
            value={imageurl}
          ></input>
        </InputContainer>
        <InputContainer>
          <p>Price</p>
          <input
            type="number"
            placeholder="0"
            onChange={(e) => setprice(e.target.value)}
            value={price}
          ></input>
        </InputContainer>
        <InputContainer>
          <p>Rating</p>
          <input
            type="number"
            placeholder="0"
            onChange={(e) => setrating(e.target.value)}
            value={rating}
          ></input>
        </InputContainer>
        <Button onClick={addproductdetails}>Add Product</Button>
      </FormContainer>
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
  height: fit-content;
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
    margin-bottom: 10px;
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

const Button = styled.button`
  width: 70%;
  height: 35px;
  background-color: #f3b414;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-top: 30px;
`;

export default Addproduct;
