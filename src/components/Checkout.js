import React from "react";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getbaskettotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import Navbar from "./Navbar";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const removefrombasket = (e, id) => {
    e.preventDefault();
    dispatch({
      type: "Remove_Product",
      id: id,
    });
  };
  return (
    <Container>
      <Navbar />
      <Main>
        <Shoppingcart>
          <h2>Shoping Cart</h2>
          {basket?.map((product) => (
            <Product>
              <Image>
                <img src={product.image} alt=""></img>
              </Image>
              <Descritpion>
                <h4>{product.title}</h4>
                <p>₹ {product.price}</p>
                <button onClick={(e) => removefrombasket(e, product.id)}>
                  Remove
                </button>
              </Descritpion>
            </Product>
          ))}
        </Shoppingcart>
        <Subtotal>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  Subtotal({basket.length} items) :<strong>{value}</strong>
                </p>
                <small>
                  <input type="checkbox" />
                  <span>This order contains a gift.</span>
                </small>
              </>
            )}
            decimalScale={2}
            value={getbaskettotal(basket)}
            displayType="text"
            thousandSeparator={true}
            prefix={" ₹ "}
          />
          <button onClick={() => navigate("/address")}>
            Proceed to checkout
          </button>
        </Subtotal>
      </Main>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  height: fit-content;
  margin: auto;
  background-color: rgb(234, 237, 237);
  position: relative;
`;
const Main = styled.div`
  display: flex;
  padding: 15px;

  @media only screen and (max-width: 1200px) {
    flex-direction: column;
  }
`;
const Shoppingcart = styled.div`
  padding: 15px;
  background-color: #fff;
  flex: 0.7;

  @media only screen and (max-width: 1200px) {
    flex: none;
  }
  h2 {
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;
  }
`;
const Subtotal = styled.div`
  flex: 0.3;
  background-color: #fff;
  margin-left: 15px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px) {
    flex: none;
    margin-top: 20px;
  }

  p {
    font-size: 20px;
  }

  small {
    display: flex;
    align-items: center;
    margin-top: 10px;

    span {
      margin-left: 10px;
    }
  }

  button {
    width: 65%;
    height: 33px;
    margin-top: 20px;
    background-color: #ffd814;
    border: none;
    outline: none;
    border-radius: 8px;
  }
`;
const Product = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.div`
  flex: 0.3;

  img {
    width: 100%;
  }
`;
const Descritpion = styled.div`
  flex: 0.7;

  h4 {
    font-weight: 600;
    font-size: 18px;
  }
  p {
    font-weight: 600;
    margin-top: 10px;
  }
  button {
    background-color: transparent;
    color: #1384b4;
    border: none;
    outline: none;
    margin-top: 10px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
export default Checkout;
