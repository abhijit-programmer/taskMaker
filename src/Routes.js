import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Form from "./components/Form";
import UpdateForm from "./components/UpdateForm";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/create" exact component={Form} />
        <Route path="/update/:taskId" exact component={UpdateForm} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
