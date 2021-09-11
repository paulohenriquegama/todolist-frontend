import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'


const Header = () => {
  return (
    <header className="header">
      <div className="hearderTitle">
        <h1>Todo List</h1>
      </div>
      <div className="buttos">
        <Link to="/" className="btn">
          <span>Home</span>
        </Link>
        <Link to="/create" className="btn">
          <span>Add</span>
        </Link>
      </div>
    </header>
  )
}

export default Header
