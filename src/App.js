import React, { Component } from "react";
import * as firebase from "firebase";
import User from "./User";
import UserForm from "./UserForm";
import NotFound from "./NotFound";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    console.log(firebase);
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/add" component={UserForm} />
              <Route exact path="/" component={User} />
              <Route path="/*" component={NotFound} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
