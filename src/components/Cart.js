import React from "react";

function Cart() {
  return (
    <div>
      <h1 className="account-heading">Cart</h1>
      <div className="favorites-cart">
        <i className="fas fa-box-open favorites-cart-img"></i>
        <h1>Cart</h1>
        <p>Its Empty... For Now. </p>
        <p>Need to have a Look around?</p>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default Cart;
