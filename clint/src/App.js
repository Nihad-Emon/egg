import './App.css';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import home from "./Pages";
import createaccount from "./Pages/Create-account";
import signin from "./Pages/signin";
import home from "./Pages/index";


function App() {
  return (
    // <h1>Hello</h1>
    <home>
    <Router>
      {/* <Navbar /> */}
      <Switch>
        <Route path="/" exact component={home} />
        <Route path ="/create-account" component={createaccount} />
        <Route path ="/signin" component={signin} />
      </Switch>
    </Router>
    </home>

    
  );
}

export default App;
