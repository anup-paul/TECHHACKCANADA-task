import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Movies from './Components/Content/Movies/Movies';
import Series from './Components/Content/Series/Series';
import Home from './Components/Home/Home';

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route path="/home" >
            <Home></Home>
          </Route>
          <Route path="/movies" >
            <Movies></Movies>
          </Route>
          <Route path="/series" >
            <Series></Series>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      
    </div>
  );
}

export default App;
