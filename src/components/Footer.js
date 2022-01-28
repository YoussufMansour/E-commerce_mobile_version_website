import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Footer() {
  const history = useHistory();
  const updateRoute = (route) => history.push("/" + route);

  const [color1, setColor1] = useState("#0d1435");
  const [color2, setColor2] = useState("#0d1435");
  const [color3, setColor3] = useState("#0d1435");
  const [color4, setColor4] = useState("#0d1435");
  // States for changing the colors of the buttons

  const updateHome = () => {
    setColor1("#0d1435");
    setColor2("#0d1435");
    setColor3("#0d1435");
    setColor4("#0d1435");
  };
  const update1 = () => {
    setColor1("#fabb27");
    setColor2("#0d1435");
    setColor3("#0d1435");
    setColor4("#0d1435");
  };
  const update2 = () => {
    setColor1("#0d1435");
    setColor2("#fabb27");
    setColor3("#0d1435");
    setColor4("#0d1435");
  };
  const update3 = () => {
    setColor1("#0d1435");
    setColor2("#0d1435");
    setColor3("#fabb27");
    setColor4("#0d1435");
  };
  const update4 = () => {
    setColor1("#0d1435");
    setColor2("#0d1435");
    setColor3("#0d1435");
    setColor4("#fabb27");
  };
  //a Function for every button to update all the colors of the buttons after every click

  return (
    <footer>
      <button
        style={{ color: color1 }}
        className="allbuttons"
        onClick={() =>{
          update1();
          updateRoute("favorite");
        }}
      >
        <i className="far fa-heart footer-button"></i>
        <p>Favorite</p>
      </button>
      <button
        style={{ color: color2 }}
        className="allbuttons"
        onClick={() => {
          
            update2();
          
            updateRoute("stock");
          
        }}
      >
        <i className="fas fa-tag footer-button"></i>
        <p>Stock</p>
      </button>
      <button
        className="home-button"
        onClick={() => {
          
            updateHome();
          
          
            updateRoute("");
          
        }}
      >
        <i className="fas fa-home footer-button"></i>
      </button>
      <button
        style={{ color: color3 }}
        className="allbuttons"
        onClick={() => {
          
            update3();
          
            updateRoute("cart");
          
        }}
      >
        <i className="fas fa-shopping-cart footer-button"></i>
        <p> My cart</p>
      </button>
      <button
        style={{ color: color4 }}
        className="allbuttons"
        onClick={() => {
         
            update4();
          
            updateRoute("account");
          
        }}
      >
        <i className="fas fa-user-circle footer-button"></i>
        <p>Account</p>
      </button>
    </footer>
  );
}

export default Footer;
