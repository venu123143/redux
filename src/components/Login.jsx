import React, { useState } from 'react' 
// import { useLoginUserMutation } from '../redux-container/productsApi'
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    // const [loginUser] = useLoginUserMutation();
    const navigate = useNavigate()
    const [state, setState] = useState({
        email: "",
        password: "" 
    })
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }
    const handleLogin = async () => {
        
    }
    return (
        <>
            <div className="main">
                <div className="parent">
                    <div className="login">
                        <h2>Login details</h2>
                        <label htmlFor="email">email :
                            <input type="email" placeholder='Enter the Email' value={state.email} name="email" onChange={handleChange} />
                        </label>
                        <label htmlFor="password">password :
                            <input type="password" placeholder='Enter the Password' value={state.password} name='password' onChange={handleChange} />
                        </label>
                        <button onClick={handleLogin}>login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login