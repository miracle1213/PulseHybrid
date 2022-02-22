/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// creates a beautiful scrollbar
// @material-ui/core components
import Box from "@material-ui/core/Box";
import { constColors } from "../../style/color";

// core components
import Footer from "../Footer";
import Header from "../Header/Header";

const switchRoutes = (
  <div>
    <Switch>
      {/* <Route exact path="/login" component={Login} /> */}
    </Switch>
  </div>
);

const Dashboard = () => {
  return (
    <Router>
      <div
        style={{
          minHeight: "100vh",
          overflow: "hidden",
          position: "relative",
          backgroundColor: constColors.white,
        }}
      >
        <div
          style={{
            position: "sticky",
            boxShadow: "rgb(4 17 29 / 25%) 0px 0px 8px 0px",
            top: 0,
            zIndex: 110,
          }}
        >
          <Header />
        </div>
        <Box>{switchRoutes}</Box>
      </div>
      <Footer />
    </Router>
  );
};

export default Dashboard;
