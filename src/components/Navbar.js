import React from "react";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { useStateValue } from "../StateProvider";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const signOut = () => {
    dispatch({
      type: "SET_USER",
      user: null,
    });

    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <Container>
      <Inner>
        <Logo onClick={() => navigate("/")}>
          <img src="./amazon-logo-1.webp" alt="logo"></img>
        </Logo>
        <Searchbar>
          <input type="text" placeholder="Search"></input>
          <Searchicon onClick={() => navigate("/addproduct")}>
            <SearchOutlinedIcon />
          </Searchicon>
        </Searchbar>
        <Rightcontainer>
          <Navbuttons
            onClick={user ? () => signOut() : () => navigate("/login")}
          >
            <p>Hello,</p>
            <p>{user ? user?.fullName : "Guest"}</p>
          </Navbuttons>
          <Navbuttons onClick={() => navigate("/Orders")}>
            <p>Returns</p>
            <p>& 0rders</p>
          </Navbuttons>
          <Basketbutton onClick={() => navigate("/checkout")}>
            <ShoppingBasketOutlinedIcon className="icon" />
            <p>{basket?.length}</p>
          </Basketbutton>
        </Rightcontainer>
      </Inner>
      <MobileSearchbar>
        <input type="text" placeholder="Search"></input>
        <Searchicon onClick={() => navigate("/addproduct")}>
          <SearchOutlinedIcon />
        </Searchicon>
      </MobileSearchbar>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #131921;
  display: flex;
  align-items: center;
  position: relative;
  @media only screen and (max-width: 767px) {
    height: 120px;
    flex-direction: column;
  }
`;
const Inner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 767px) {
    justify-content: space-between;
  }
`;
const Logo = styled.div`
  margin-left: 20px;
  cursor: pointer;
  img {
    width: 100px;
    margin-top: 10px;
  }
`;
const Searchbar = styled.div`
  height: 35px;
  flex: 1;
  margin: 0px 15px;
  display: flex;
  align-items: center;

  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;

    &::placeholder {
      padding-left: 5px;
    }
  }
  @media only screen and (max-width: 767px) {
    display: none;
  }
`;
const MobileSearchbar = styled.div`
  height: 35px;
  width: 90%;
  display: flex;
  align-items: center;
  padding: 10px;

  input {
    flex: 1;
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 5px 0px 0px 5px;
    &::placeholder {
      padding-left: 10px;
    }
  }
  @media only screen and (min-width: 767px) {
    display: none;
  }
`;
const Searchicon = styled.div`
  background-color: #febd69;
  height: 38px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0px 5px 5px 0px;
  SearchOutlinedIcon {
    width: 22px;
  }
`;
const Rightcontainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-around;
  height: 100%;
  padding: 5px 15px;
`;
const Navbuttons = styled.div`
  color: #fff;
  padding: 5px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin-right: 15px;

  p {
    &:nth-child(1) {
      font-size: 12px;
      margin-top: 0%;
      margin-bottom: 0%;
    }
    &:nth-child(2) {
      font-size: 14px;
      font-weight: 600;
      margin-top: 0%;
      margin-bottom: 0%;
    }
  }
`;
const Basketbutton = styled.div`
  display: flex;
  align-items: center;
  height: 90%;
  cursor: pointer;

  .icon {
    color: #fff;
    width: 30px;
    margin-right: 10px;
  }

  p {
    color: #fff;
    font-weight: 500;
  }
`;
export default Navbar;
