import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/auth";
import { Redirect , Link } from "react-router-dom";
import "./Login.css";
import Switch from '@mui/material/Switch';

const Signup = (props) => {
    const [form, setForm] = useState({
        email: "",
        password: "",
        name:"",
        userType: 0,
        phoneNumber: null,
    });

    const [checked, setChecked] = React.useState(false);

    const handleChangeSwitch = (event) => {

        // console.log(event.target.checked)
        let tempValue = 0;
        if(event.target.checked == true) {
            tempValue = 1;
        }

        setChecked(event.target.checked);

        setForm((prevState) => {
            return {
                ...prevState,
                userType: tempValue,
            };
        });
        // console.log(tempValue)
        // console.log(form)
    };


    const handleChange = (e) => {
        e.preventDefault();

        setForm((prevState) => {
            return {
                ...prevState,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(form)
        props.dispatch(signup(form));
    };

    return (
        <div>
            {props.auth.isLoggedIn ? (
                <Redirect
                    to={{
                        pathname: "/",
                    }}
                />
            ) : (
                <div className="wrapper fadeInDown" style={{ minHeight: "70vh" }}>
                    <div id="formContent">
                        <div className="fadeIn first" style={{ margin: '10px 0px' }}>WELCOME TO TOMATO</div>

                        <form className="signin-form" onSubmit={handleSubmit}>
                            <input
                                className="fadeIn second"
                                type="text"
                                placeholder="Name"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                            />
                            <input
                                className="fadeIn second"
                                type="text"
                                placeholder="Email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                            />
                            <input
                                className="fadeIn third"
                                type="text"
                                placeholder="Password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                            />
                            <input
                                className="fadeIn third"
                                type="text"
                                placeholder="Phone Number"
                                name="phoneNumber"
                                value={form.phoneNumber}
                                onChange={handleChange}
                            />
                            <div className="fadeIn third">Sign up as Manager <Switch
                                checked={checked}
                                onChange={handleChangeSwitch}
                                inputProps={{ 'aria-label': 'controlled' }}
                            /></div>
                            <input
                                type="submit"
                                className="fadeIn fourth"
                                value="Sign up"
                            ></input>
                        </form>
                    </div>
                        <Link to={`/login`}>Already have an account? Login Here</Link>
                </div>
            )}
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth,
        ...ownProps,
    };
};

export default connect(mapStateToProps)(Signup);