import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

class Navigation extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Logo</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink exact activeClassName="active-link" className="nav-link" to="/" >Home </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active-link" className="nav-link" to="/about" >About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact activeClassName="active-link" className="nav-link" to="/contact" >Contact</NavLink>
                            </li>
                           
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
export default Navigation