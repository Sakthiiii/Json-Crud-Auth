import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Home from "./component/Home";
import Details from "./component/Details";
import { BrowserRouter, BrowserRouter as Routes, Route } from "react-router-dom";
import Login from "./component/Login";



const App = () => {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/detail" component={Details} />
        

      </BrowserRouter>
    </>
  );
};

export default App;
