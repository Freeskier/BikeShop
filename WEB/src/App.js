import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/Home/Home';
import AuthService from './services/AuthService';
import NavBar from './components/NavBar/Navbar'
import ShopMap from './components/Map/ShopMap';
import Bikes from './components/Bikes/Bikes';
import Book from './components/Book/Book';

function App() {

  const[loggedUser, setLoggedUser] = useState(null);

  useEffect(()=> {
    if(AuthService.getLocal() !== null)
    {
      setLoggedUser(AuthService.getLocal());
    }
  }, []);
  
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/map' component={ShopMap} />
        <Route exact path='/bikes' component={Bikes} />
        <Route exact path='/book' component={Book} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
