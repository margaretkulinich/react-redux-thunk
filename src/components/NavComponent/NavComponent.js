import React from 'react';
import { NavLink } from "react-router-dom";
import "./styles.css";
  


export default function NavComponent() {
    return (
        <nav className="nav-component">
            
            <NavLink to='/users' className="nav-link">Users</NavLink>
            <NavLink to='/addUser' className="nav-link">Add User</NavLink>
            <NavLink to='/tweets' className="nav-link">Tweets</NavLink>
            <NavLink to='/addTweet' className="nav-link">Add Tweet</NavLink>
        </nav>
    )
}