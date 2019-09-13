import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-v4-rtl/dist/css/bootstrap-rtl.min.css'
import Navbar from './components/section/Navbar';
import { Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Product from './components/pages/Product';
import NoMatch from './components/pages/NoMatch';
import Login from './components/pages/Login';

function App() {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <div style={{ padding: '60px' }}>
          <Switch>
            <Route exact={true} path='/' component={Home} />
            <Route path='/product/:id' component={Product} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
            <Route path='/login' component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
     
      
    </div>
  );
}

export default App;
