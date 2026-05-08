import React, { useEffect, useState } from "react";
import Footer from "../Component/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const redirect = useNavigate();

  // CHECK LOGIN

  useEffect(() => {

    if (localStorage.getItem("s_id")) {

      redirect("/dashboard");

    }

  }, []);

  // FORM STATE

  const [formvalue, setFormvalue] = useState({
    email: "",
    password: "",
  });

  // INPUT CHANGE

  const changeHandle = (e) => {

    setFormvalue({
      ...formvalue,
      [e.target.name]: e.target.value,
    });

  };

  // VALIDATION

  const validation = () => {

    if (formvalue.email === "") {

      alert("Email Field is Required");

      return false;
    }

    if (formvalue.password === "") {

      alert("Password Field is Required");

      return false;
    }

    return true;
  };

  // LOGIN SUBMIT

  const submitHandle = async (e) => {

    e.preventDefault();

    if (validation()) {

      try {

        const res = await axios.get(
          `http://localhost:3001/admin?email=${formvalue.email}`
        );

        // EMAIL CHECK

        if (res.data.length > 0) {

          // PASSWORD CHECK

          if (
            res.data[0].password === formvalue.password
          ) {

            // STATUS CHECK

            if (
              res.data[0].status === "Unblock"
            ) {

              // STORE LOGIN DATA

              localStorage.setItem(
                "s_id",
                res.data[0].id
              );

              localStorage.setItem(
                "s_name",
                res.data[0].name
              );

              alert("Login Success ✅");

              redirect("/dashboard");

            } else {

              alert(
                "Login Failed Due To Blocked Account ❌"
              );
            }

          } else {

            alert("Wrong Password ❌");
          }

        } else {

          alert("Email Does Not Exist ❌");
        }

      } catch (error) {

        console.log(error);

        alert("Something Went Wrong");
      }
    }
  };

  return (
    <div>

      <div className="p-5 bg-primary text-white text-center">

        <h1>Admin Login</h1>

      </div>

      <div className="container mt-5">

        <div className="row justify-content-center">

          <div className="col-md-5">

            <div className="card shadow p-4">

              <h2 className="text-center mb-4">
                Login Form
              </h2>

              <form onSubmit={submitHandle}>

                <div className="mb-3">

                  <label>Email</label>

                  <input
                    type="email"
                    name="email"
                    value={formvalue.email}
                    onChange={changeHandle}
                    className="form-control"
                    placeholder="Enter Email"
                  />

                </div>

                <div className="mb-3">

                  <label>Password</label>

                  <input
                    type="password"
                    name="password"
                    value={formvalue.password}
                    onChange={changeHandle}
                    className="form-control"
                    placeholder="Enter Password"
                  />

                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Login
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Login;