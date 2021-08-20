import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BubblePage from "./components/BubblePage";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from './components/PrivateRoute';
import axiosWithAuth from "./helpers/axiosWithAuth";

function App() {
  
const logoutHandler = () =>{
    axiosWithAuth().post('/logout')
    .then(res=>{
      localStorage.removeItem("token");
      window.location.assign('/login')
    })
}

  return (
    <Router>
      <div className="App">
        <header>
          Color Picker Sprint Challenge
          <a data-testid="logoutButton" href="/logout" onClick={logoutHandler}>logout</a>
        </header>
      </div>
      <Switch>
        <PrivateRoute exact path="/bubblespage" component={BubblePage} />

        <Route exact path="/">
          <Login/>
        </Route>
        <Route exact path="/login">
           <Login/> 
        </Route>
        <Route exact path="/bubblespage">
          <BubblePage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

//Task List:
//1. Add in two routes that link to the Login Component, one for the default path '/' and one for the '/login'.
//2. Render BubblePage as a PrivateRoute
//2. Build the logout button to call the logout endpoint, remove the localStorage Item and redirect to the login page.