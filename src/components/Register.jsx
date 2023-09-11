import React, { useState } from 'react'
// import { useRegisterUserMutation } from '../redux-container/productsApi'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"
import { useDispatch,useSelector } from 'react-redux';
import LoginSlice from '../redux-container/LoginSlice';
const Register = () => {
    // const [registerUser ] = useRegisterUserMutation();
    const disptach = useDispatch()
    const auth = useSelector(state => state.auth)
    console.log(auth);
    const navigate = useNavigate()
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: ""
    })

    const collectData = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
    const handleSignUp = async () => {
        console.log(values);
        disptach(LoginSlice(values))
        // const user = await registerUser(values);
        // console.log(user.error);
        // switch (user.error.originalStatus) {
        //     case 420:
        //         toast.error(user.error.data, { position: 'top-center' })
        //         break;
        //     case 422:
        //         toast.error(user.error.data, { position: 'top-center' })
        //         break;
        //     case 200:
        //         toast.success(user.error.data, { position: 'top-center' })
        //         navigate('/login')
        //         break;
        //     default:
        //         break;
        // }
    }

    return (
        <>
            <div className="main">
                <div className="parent">
                    <div className="login">
                        <h2>Register details</h2>
                        <label htmlFor="email">name :
                            <input type="email" value={values.name} name="name" onChange={collectData} placeholder='name' />
                        </label>
                        <span>name should contain min 3 to max 30 characters</span>
                        <label htmlFor="email">email :
                            <input type="email" value={values.email} name="email" onChange={collectData} placeholder='email' />
                        </label>
                        <span>Enter valid email id</span>
                        <label htmlFor="password">password :
                            <input type="password" value={values.password} name="password" onChange={collectData} placeholder='upper lower number' />
                        </label>
                        <span>must contain atleast 1 uppercase,
                            1 lowercase, 1 number, 1 special character
                            and  min 8 characters length.</span>
                        <button onClick={handleSignUp}>Sign up</button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Register