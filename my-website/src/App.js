import React from "react";
import Parentcomponenttitlepage from "./Title page/Parent_component_title_page";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./sign_in";
import SignUp from "./sign_up";
import Parentcomponentmainpage from "./parent_component";
import Addform from "./main page/addform";


function App() {
  return (
    <div>    
      <Router>
        <Switch>
          <Route exact path="/">
          <Parentcomponenttitlepage/>
          </Route>
          <Route exact path="/signin">
          <SignIn/>
          </Route>
          <Route exact path="/signup">
          <SignUp/>
          </Route>
          <Route exact path="/main">
          <Parentcomponentmainpage/>
          </Route>
          <Route exact path="/add">
          <Addform/>
          </Route>
        </Switch>
      </Router>
    
    </div>

    
  
  );
}

export default App;
