import React from "react";

function Account() {
  return (
    <div>
      <h1 className="account-heading">My Account</h1>
      <div className="account-container">
        <img
          src="https://secure.gravatar.com/avatar/944af56345c60f40c38927d191a9146d?s=256&d=mm&r=g"
          alt=""
        />
        <p>
          <b>Guest</b>
        </p>
        <p>Guest</p>
      </div>
      <div className="account-buttons-container">
        <button className="account-buttons upper-border">
          <i className="fas fa-hands-helping"></i>
          <span></span>
          Customer Support
          <i className="fas fa-chevron-right  arrow-spacing "></i>
        </button>
        <button className="account-buttons">
          <i className="fas fa-language"></i>
          <span></span>
          App Language
          <i className="fas fa-chevron-right arrow-spacing"></i>
        </button>
        <button className="account-buttons">
          <i className="fas fa-cog"></i>
          <span></span>
          Setting
          <i className="fas fa-chevron-right arrow-spacing"></i>
        </button>
        <button className="account-buttons">
          <i className="far fa-star"></i>
          <span></span>
          Rate our app
          <i className="fas fa-chevron-right arrow-spacing"></i>
        </button>
        <button className="account-buttons lower-border">
          <i className="fas fa-share-alt"></i>
          <span></span>
          Share our app
          <i className="fas fa-chevron-right arrow-spacing"></i>
        </button>
      </div>
      <button className="account-buttons login">
        <i className="fas fa-sign-in-alt"></i>
        <span></span>
        Login
        <i className="fas fa-chevron-right arrow-spacing"></i>
      </button>
    </div>
  );
}

export default Account;
