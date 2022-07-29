import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import Searchbar from "./Searchbar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = (props) => {
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ marginBottom: "10px" }}>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto pr-5 d-flex justify-content-between align-items-center">
            <li className={`nav-item mx-4`} name="home">
              <NavLink
                exact
                activeClassName="custom-nav-active"
                className="nav-link"
                to="/"
              >
                <span className="navbar-title">TOMATO</span>
              </NavLink>
            </li>

            <li className={`nav-item mx-4`} name="home">
              <Button
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                Hi {props.userName}
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <br />
                <MenuItem onClick={handleClose} style={{ padding: "10px" }}>
                  <Link to={`/orders`}>
                    My Orders</Link>
                </MenuItem>
                <br />
                <MenuItem onClick={handleClose} style={{ padding: "10px" }}>
                  Logout
                </MenuItem>
              </Menu>

              {/* <NavLink exact activeClassName="custom-nav-active" className="nav-link" to="/profile"><i className='fas fa-user-alt' style={{marginRight: "5px"}}></i>{props.userName}</NavLink> */}
            </li>
            <li className={`nav-item mx-4`} name="home">
              <NavLink
                exact
                activeClassName="custom-nav-active"
                className="nav-link"
                to="/cart"
              >
                <i
                  className="fa fa-shopping-cart"
                  style={{ marginRight: "5px" }}
                ></i>
                {props.totalItems}
              </NavLink>
            </li>
            <Searchbar />
          </ul>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    userName: state.auth.name,
    // userName: 'abc',
    totalItems: state.cart.numberCart,
    ...ownProps,
  };
};

// const mapDispatchToProps = {
//   getAllGroupsList,
// };

export default connect(mapStateToProps)(Navbar);
