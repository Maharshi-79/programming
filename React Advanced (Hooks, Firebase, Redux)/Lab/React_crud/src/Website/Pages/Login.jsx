import React, { useEffect, useState } from 'react'
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {


    const redirect = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('s_id')) {
            redirect('/dashboard');
        }
    })

    const [formvalue, setFormvalue] = useState({
        email: "",
        password: "",
    });

    const changeHandel = (e) => {
        setFormvalue({ ...formvalue, [e.target.name]: e.target.value })
        console.log(formvalue);
    }

    const validation = () => {
        var result = true;
        if (formvalue.email == "" || formvalue.email) {
            result = false;
            alert('Email Field is required');
            return false;
        }
        if (formvalue.password == "" || formvalue.password) {
            result = false;
            alert('Password Field is required');
            return false;
        }
        return result;
    }

    const submitHandel = async (e) => {
        e.preventDefault();
        if (validation) {
            const res = await axios.get(`http://localhost:3001/admin?email=${formvalue.email}`)
            if (res.data.length > 0) {
                if (res.data[0].password == formvalue.password) {
                    if (res.data[0].status == "Unblock") {
                        localStorage.setItem('s_id', res.data[0].id);
                        localStorage.setItem('s_name', res.data[0].name);

                        redirect('/dashboard');
                        alert('Login Success');
                        return false;

                    }
                    else {
                        alert('Login Failed Due to Blocked Account !');
                        return false;
                    }
                }
                else {
                    alert('Login Failed Due to Wrong Password !');
                    return false;
                }
            }
            else {
                alert('Login Failed Due to Email Does not Exits !');
                return false;
            }
        }
    }


    return (
        <div>
            <div>
                <div className="p-5 bg-primary text-white text-center">
                    <h1>Admin Login</h1>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-12">
                            <h2>Login Form</h2>
                            <form action="" method="post" onSubmit={submitHandel}>

                                <div className="mb-3 mt-3">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" onChange={changeHandel} value={formvalue.email} className="form-control" placeholder="Enter email" name="email" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="pwd">Password:</label>
                                    <input type="password" onChange={changeHandel} value={formvalue.password} className="form-control" placeholder="Enter password" name="password" />
                                </div>

                                <button type="submit" className="btn btn-primary">Login</button>
                            </form>

                        </div>

                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Login