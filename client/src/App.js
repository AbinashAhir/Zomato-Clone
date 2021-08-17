import "./styles.css";




import { Route, Switch } from "react-router";
import LandingPage from "./components/LandingPage";
import Error from "./components/Error"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Filter from "./components/Filter";
import {FooterContainer} from './container/footer'


export default function App() {
  return (
    <main className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/filter" component={Filter} />
        <Route component={Error}/>
        
        <FooterContainer />  
        
      </Switch>
    </main>
  );
}
