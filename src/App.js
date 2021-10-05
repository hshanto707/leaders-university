import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Courses from "./components/Courses/Courses";
import Trainers from "./components/Trainers/Trainers";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/about-us">
            <AboutUs></AboutUs>
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route exact path="/trainers">
            <Trainers></Trainers>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
