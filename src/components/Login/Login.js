import React, { useState } from 'react'
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
// import {useNavigate} from 'react-router'
// import NavigationBar from '../LoginNavBar';
export const itemContext = React.createContext();

function Login() {
    // const Navigate=useNavigate();
    const [userLogin, setUserLogin] = useState({ email: "", password: "" })
    const [redirect, setRedirect] = useState(false);

    const checkCred = (e) => {
        e.preventDefault();
        //api call to fetch users
        console.log(userLogin);
        axios.post("https://reqres.in/api/login", userLogin)
            .then(response => {
                console.log(response);
                alert("User Successfully Logged In")
                setRedirect(true);
                // Navigate("/home")

            })
            .catch((e) => {
                alert("Please enter valid credentials")
            })

    }
    const loginMe = (e) => {
        const { name, value } = e.target;
        setUserLogin({
            ...userLogin, [name]: value
        })
    }
    return (
        <>

            { redirect ? <Redirect
                to={{
                pathname: "/",
            }}
                /> :

            <form className="form1" onSubmit={checkCred}>
                <h2>Login</h2><br />
                <div className="form-group d-flex flex-column g-2">

                    <label htmlFor="email" className="form-label m-2 h5">Email</label>
                    <input type="email" name="email" className="form-control-lg" value={userLogin.email} onChange={loginMe} placeholder="Email" required /></div>
                <div className="form-group d-flex flex-column g-2">
                    <label htmlFor="password" className="form-label m-2 h5">Password</label>
                    <input type="password" name="password" className="form-control-lg" value={userLogin.password} onChange={loginMe} placeholder="Password" required />
                </div>
                <button className="btn btn-primary btn-lg m-3 ms-0">Sign in</button>
                {/* {msg  && <span style={{color:'red',padding:'5px'}}>{msg}</span> } */}
                <hr />
                <br></br>
                <br></br>
                <h3><span>Don't have an account?  |   <Link to="/register">Register Here</Link></span> </h3>
            </form>
}
        </>
    )
}

export default React.memo(Login)