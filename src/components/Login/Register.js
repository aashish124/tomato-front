import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link  , Redirect } from 'react-router-dom';
import { openSnackbar } from '../../actions/snackbar';
// import { useNavigate } from 'react-router-dom'

function Register() {


    const [redirect, setRedirect] = useState(false);


    const [user, setUser] = useState({ name: "", mail: "", psd: "", addr: "" })
    const [msg, setMsg] = useState('');
    // const history = useNavigate();
    // useEffect(() => {
    //     //console.log("register rendered");
    //     if (msg.includes("Success")) {
    //         setTimeout(() => { history.push('/login'); setMsg(''); }, 1000);
    //     }
    // }, [msg, history])

    const changeMe = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user, [name]: value
        })
    }
    const success = { padding: "10px 15px", border: "1px solid green", color: "green" }
    const fail = { padding: "10px 15px", border: "1px solid red", color: "red" }
    const registerMe = (e) => {

        e.preventDefault();
        //api post to server
        axios.post('https://my-json-yumito-server.herokuapp.com/users', user)
            .then(res => {
                console.log(user);
                setRedirect(true);
                //redirect to login page
            })
            .catch((e) => {
                setMsg("Something went wrong. Please try again later");
            })
    }
    return (
        <>

            {redirect ? <Redirect
                to={{
                    pathname: "/",
                }}
                /> : 



                <form className="form1" onSubmit={registerMe}>
                    <h2>Register Form</h2><br />
                    <div className="d-flex flex-column">
                        <div className="form-group">
                            <div className="form-group">
                                <label htmlFor="name" className="form-label m-2 h5">Name</label>
                                <input type="name" name="name" placeholder="Name" className="form-control" value={user.name} onChange={changeMe} required /></div>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label m-2 h5">Email</label>
                                <input type="email" name="mail" placeholder="Email" className="form-control" value={user.mail} onChange={changeMe} required /></div>
                            <div className="form-group">
                                <label htmlFor="password" className="form-label m-2 h5">Password</label>
                                <input type="password" name="psd" placeholder="Password" className="form-control" value={user.psd} onChange={changeMe} required /></div>
                            <label htmlFor="address" className="form-label m-2 h5">Address</label>
                            <textarea type="text" name="addr" placeholder="Address" className="form-control" value={user.addr} onChange={changeMe} required /></div>
                            <div>
                                <input type="checkbox"/>
                                <span style={{fontWeight:"bold"}}>  Register as Restaurant Manager</span>
                            </div>
                        <button className="btn btn-primary my-3 h4">Sign Up</button>
                        <div className="h5 text-center" style={msg === '' ? {} : (msg.includes("Success") ? success : fail)}>{msg}</div>
                        <hr />
                        <h3><span>Already have an account?  |  <Link to="/login">Sign in</Link></span> </h3>
                    </div>

                </form>
            }
        </>
    )
}

export default React.memo(Register)