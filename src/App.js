import React from "react";
import smoothscroll from 'smoothscroll-polyfill';

// Set up all routes in App
import { Route } from "react-router-dom";

// Using custom styled components from Global folder in components
import { AppWrapper } from "./components/Global/styled";

// Importing all routes
import HomePage from "./components/HomePage";

smoothscroll.polyfill();

const App = () => {
  return (
    <AppWrapper>
      <Route path="/" exact render={props => <HomePage {...props} />} />
    </AppWrapper>
  );
};

export default App;
