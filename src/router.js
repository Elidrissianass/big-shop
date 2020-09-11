import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/homepage/Home";
import Basket from "./containers/basketpage/Basket";
import NotFound from "./containers/404";
import Login from "./containers/loginpage/Login";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/basket" component={Basket} />
      <Route path="/login" component={Login} />
      <Route component={NotFound} />
    </Switch>
  );
};
export default Router;
