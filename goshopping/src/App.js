import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ItemDetails from "./components/items/ItemDetails"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard}></Route>
            <Route path="/item/:id" component={ItemDetails}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
