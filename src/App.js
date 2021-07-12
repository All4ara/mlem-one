import React from "react";
import './App.css';
import Header from "./components/Header"
import MlemCards from "./components/MlemCards"
import SwipeButtons from "./components/SwipeButtons"
import { BrowserRouter  as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    // BEM class naming convention
    <div className="app">

    {/* Header */}
      <Header />

      <Router>
        <Switch>

          <Route path="/chat">

            {/* Chats Screen */}

            {/* Individual Chats Screen */}

          </Route>

          <Route path="/">

            {/* MlemCards */}
            <MlemCards /> 

            {/* SwipeButtons */}
            <SwipeButtons />

          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;


        {/* Header */}
        <Header />

        {/* MlemCards */}
        <MlemCards /> 

        {/* SwipeButtons */}
        <SwipeButtons />

        {/* Chats Screen */}

        {/* Individual Chats Screen */}
        
