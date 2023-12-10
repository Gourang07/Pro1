import React from "react";
import { styled } from "styled-components";
import logo from "../assets/CarTrade.svg";

const Footer = () => {
  return (
    <DIV>
      <footer>
        <div className="image">
          <img src={logo} alt="logo" />
        </div>

        <p>
          Award-winning, family owned dealership of new and pre-owned vehicles
          with several locations across the city. Lowest prices and the best
          customer service guaranteed.
        </p>
      </footer>
    </DIV>
  );
};

export default Footer;

const DIV = styled.div`
  width: 100%;
  background-color: #222732;
  height: 400px;
  margin-top: 50px;

  footer {
    padding-top: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    .image {
      img {
        width: 100px;
      }
    }

    p {
      width: 400px;
    }

    
`;
