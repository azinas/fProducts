import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import NavItem from './NavItem';


class Navbar extends Component {
    render() { 
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
  <Link className="navbar-brand" to="/">Navbar</Link>

  <div className="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul className="navbar-nav mr-auto">
        <NavItem activeOnlyWhenExact={true} activeClassName="selected" to="/">Home</NavItem>
        <NavItem to="/contact">Contact</NavItem>
        <NavItem to="/about">About</NavItem>     
            
    </ul>
     <div className={["my-2", "my-lg-0"].join(' ')}>
        <Link className={["btn", "btn-success"].join(' ')} to="/login">Login</Link> 
    </div>
    
  </div>
 </nav>
                
            </div>
        )
    }
}

export default Navbar
