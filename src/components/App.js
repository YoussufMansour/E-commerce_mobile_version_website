import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Search from "./Search";
import Footer from "./Footer";
import Categories from "./Categories";
import Children from "./Children";
import Favorite from "./Favorite";
import Stock from "./Stock";
import Cart from "./Cart";
import Account from "./Account";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div>
            <Search />
            <Categories />
            <Children />
            <div className="brands-box">
              <img
                className="brands"
                src="https://kartonah.com/uploads/images/f8b08b86488b372d.png?w=384&h=undefined&q=75"
                alt=""
              />
              <img
                className="brands"
                src="https://kartonah.com/uploads/images/2c1c8a4c1bf3f728.png?w=384&h=undefined&q=75"
                alt=""
              />
              <img
                className="brands"
                src="https://kartonah.com/uploads/images/49afbc1b67c458a0.png?w=384&h=undefined&q=75"
                alt=""
              />
              <img
                className="brands"
                src="https://kartonah.com/uploads/images/8585b166a876eafe.png?w=384&h=undefined&q=75"
                alt=""
              />
              <img
                className="brands"
                src="https://kartonah.com/uploads/images/80d890ff3034271e.jpg?w=384&h=undefined&q=75"
                alt=""
              />
            </div>
          </div>
        </Route>
        <Route exact path="/favorite">
          <Favorite />
        </Route>
        <Route path="/stock">
          <Stock />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
