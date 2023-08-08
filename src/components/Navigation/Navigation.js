import React from 'react';
import { Route, Router, Link } from 'react-router-dom';
import { ListGroup } from 'reactstrap';

function Navigation() {
  return (
    <ul className='topnav'>
      {/*  <Link className="list-group-item list-group-item-action" tag="a" to="/"  action> 
        Home</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/about"  action>
        About</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/browse-bonds"  action>
        BrowseBonds</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/market-news"  action>
        MarketNews</Link>
      <Link className="list-group-item list-group-item-action" tag="a" to="/wishlist"  action>
        wishlist</Link>*/}
      <Link className=" right" tag="a" to="/log-out"  action>
        LogOut</Link>
    </ul>  
  );
}

export default Navigation;