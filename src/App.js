import "./styles.css";
import { Route, Switch } from "react-router";
import LandingPage from "./components/LandingPage";
import Error from "./components/Error"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <main className="App">
    <BrowserRouter>
      <Switch>
        <Route path="/" component={LandingPage}/>
        <Route path="/" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route component={Error}/>
      </Switch>
    </BrowserRouter>
    </main>
  );
}
