import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/homepage/Home";
import NotFound from "./containers/404";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
};
export default Router;
