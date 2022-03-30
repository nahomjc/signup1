import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Verfication from './pages/Verfication';
import Forgotten from './pages/Forgotten';
import Email from './pages/Email';
import Term from './pages/Term';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/services' component={Services} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/email' component={Email} />
        <Route path='/Forg' component={Forgotten} />
        <Route path='/term' component={Term} />
        <Route path='/ver' component={Verfication} />
      </Switch>
    </Router>
  );
}

export default App;
