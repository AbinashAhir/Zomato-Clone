import "./styles.css";
import { Route, Switch } from "react-router";
import LandingPage from "./components/LandingPage";
import Error from "./components/Error"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter as Router} from "react-router-dom";

export default function App() {
  return (
    <main className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route component={Error}/>
      </Switch>
    </main>
  );
}
