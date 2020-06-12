import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ItemDetails from "./components/items/ItemDetails";
import SignIn from "./components/auth/SignIn";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route path="/item/:id" component={ItemDetails}></Route>
            <Route path="/sigin" component={SignIn}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
