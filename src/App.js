import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Checkout from "./components/Checkout";
import Address from "./components/Address";
import Payment from "./components/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Addproduct from "./components/Addproduct";
import Orders from "./components/Orders";

const promise = loadStripe(
  "pk_test_51NMVxfSFEHjZPF4Y3qpIRExvy5tUV5GhPcrLQSRbzyo0HNJkX73UvvOZALZMKHbyRp644nRWjes93Uj6AJMtQSNa00hUSy4Ow3"
);
function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/address" element={<Address />} />
          <Route
            path="/payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />
          <Route path="/addproduct" element={<Addproduct />} />
          <Route path="/Orders" element={<Orders />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default App;
