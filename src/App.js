import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
  // NavLink,
} from "react-router-dom";

// Sass
import "./assets/sass/app.scss";
// Views
import Home from "./views/home";
import Register from "./views/register";
import Contacto from "./views/contacto";
import Carrito from './views/carrito'

// Partials
import NavBar from "./components/Home/NavBar";
import Nav from "./components/Home/Nav";
import Footer from "./components/Home/Footer";

function App() {
  return (
    <React.Fragment>
      <Router>
      <div className='App'>
        <NavBar />
        <Nav />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/contact" component={Contacto} />
          <Route path='/carrito' component={Carrito}/>
        </Switch>

        <Footer />
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
