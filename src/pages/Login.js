import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import "./css/login.css"

const Login = (props) => {

    const { user, setUser, updateUser } = props

    const [emailData, setEmail] = useState('');
    const [passwordData, setPassword] = useState('');

    const emailOnChange = (event) => {
        setEmail(event.target.value)
    }

    const passwordOnChange = (event) => {
        setPassword(event.target.value)
    }
    let history = useHistory()

    const handleLogin = (event) => {
        axios.get('/login/?controller=User&action=login&email=' + emailData + '&password=' + passwordData)
            .then(response => {
                setUser(updateUser(response.data.user.user_id, response.data.user.email, response.data.user.role))
                history.push('/')
            }).catch(error => {
                console.log("Error when login:")
                console.log(error)
            })
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <form className="box">
                            <h1>Login</h1>
                            <p className="text-muted"> Please enter your login and password!</p>
                            <input type="email" value={emailData} onChange={emailOnChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <input type="password" value={passwordData} onChange={passwordOnChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                            <Link to="/register" className="forgot text-muted">Have a account?</Link>
                            <button className="btn-login" type="button" onClick={handleLogin}>Login</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Login;
