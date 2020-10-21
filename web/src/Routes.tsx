import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import EmailDetail from "./components/EmailDetail/EmailDetail";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";
import NavBar from "./components/NavBar/NavBar";

function Routes() {
  return (
    <BrowserRouter>
      <NavBar />
      <Route path="/" exact component={Landing} />
      <Route path="/email/:id" exact component={EmailDetail} />
      <Footer />
    </BrowserRouter>
  );
}

export default Routes;
