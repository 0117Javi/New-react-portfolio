// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Works from "./components/Works/Works";
import Contacts from "./components/Contacts/Contacts";

const App = () => {
  return (
    // <Router>
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Works />
      <Contacts />
    </div>
    // </Router>
  );
};

export default App;
