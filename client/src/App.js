import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NAV from "./components/navbar";
import SignIn from "./components/signin";
import RecipeCard from "./components/recipe";
import SignUp from "./components/signup";
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import Home from "./components/Home";
import ToDo from "./components/posts";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <NAV />
          </Route>
          <Route exact path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/card">
            <RecipeCard />
          </Route>
          <Route exact path="/dash">
            <ToDo/>
          </Route>
          
          <Route path="/profile" exact component={Join} />
          <Route path="/chat" component={Chat} />
          
        </Switch>
      </Router>
    </div>
  );
}
export default App;
