import "./App.css";
import Navbar from "../src/Component/Navbar";
import Slide from "./Component/Slide";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import News from './Component/News';
import Contact from "./Component/Contact";
import About from "./Component/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/slide" exact component={Slide} />
          <Route path="/news" exact component={News} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
