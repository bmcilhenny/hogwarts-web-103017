import React from 'react';
import { Link }  from 'react-router-dom'

export const Navbar = () => {
  return (
      <div className="ui menu">
        <Link to="/" className="item">
          <h2 className="home">Pig World</h2>
        </Link>
        <div className=" right menu">
          <Link to="/login" className="item">
            <p className="nav">Login</p>
          </Link>
          <Link to="/hogs" className="item">
            <p className="nav">Hogs</p>
          </Link>
          <Link to="/hogs/new" className="item">
            <p className="nav">New Hog</p>
          </Link>
        </div>
      </div>
  )
}
