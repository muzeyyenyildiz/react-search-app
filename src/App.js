import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/search/:id" component={Detail}/>
      </Switch>
    </Router>
  );
}

export default App;
