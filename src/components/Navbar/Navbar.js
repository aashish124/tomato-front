import React, { useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { connect } from "react-redux";

const Navbar = (props) => {
    const pathname = window.location.pathname;
    const path = pathname === '/' ? 'home' : pathname.substr(1);

    return (
        <div style={{'marginBottom': '10px'}}>
            <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto pr-5 d-flex justify-content-between align-items-center">
                        <li 
                        className={`nav-item mx-4`}
                        name='home'
                        >
                            <NavLink exact activeClassName="custom-nav-active" className="nav-link" to="/">TOMATO</NavLink>
                        </li>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <li 
                            className={`nav-item mx-4`}
                            name='home'
                            >
                                <NavLink exact activeClassName="custom-nav-active" className="nav-link" to="/profile"><i className='fas fa-user-alt'></i></NavLink>
                        </li>
                        <li 
                            className={`nav-item mx-4`}
                            name='home'
                            >
                                <NavLink exact activeClassName="custom-nav-active" className="nav-link" to="/cart"><i className='fa fa-shopping-cart'></i>
                        {props.totalItems}</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
      totalItems: state.cart.numberCart,
      ...ownProps,
    };
  };
  
  // const mapDispatchToProps = {
  //   getAllGroupsList,
  // };
  
export default connect(mapStateToProps)(Navbar);
