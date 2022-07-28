import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import { Redirect , Link} from "react-router-dom";
import "./Login.css";

const Login = (props) => {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    // console.log('sdad');


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
        props.dispatch(login(form));
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
                                placeholder="Email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                            />
                            <input
                                className="fadeIn third"
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                            />
                            <input
                                type="submit"
                                className="fadeIn fourth"
                                value="Log In"
                            ></input>
                            
                        </form>
                    </div>
                        <Link to={`/signup`}>Create a new Account</Link>
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

export default connect(mapStateToProps)(Login);