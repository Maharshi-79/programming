import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

import Header from "../Component/Header";
import Footer from "../Component/Footer";

function Edit_user() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  // FETCH USER

  useEffect(() => {

    fetchUser();

  }, []);

  const fetchUser = async () => {

    try {

      const res = await axios.get(
        `http://localhost:3001/users/${id}`
      );

      setFormvalue(res.data);

    } catch (error) {

      console.log(error);

    }
  };

  // INPUT CHANGE

  const changeHandle = (e) => {

    setFormvalue({
      ...formvalue,
      [e.target.name]: e.target.value,
    });

  };

  // VALIDATION

  const validation = () => {

    if (formvalue.name === "") {

      alert("Name Field is Required");
      return false;
    }

    if (formvalue.email === "") {

      alert("Email Field is Required");
      return false;
    }

    if (formvalue.password === "") {

      alert("Password Field is Required");
      return false;
    }

    if (formvalue.mobile === "") {

      alert("Mobile Field is Required");
      return false;
    }

    return true;
  };

  // UPDATE USER

  const submitHandle = async (e) => {

    e.preventDefault();

    if (validation()) {

      try {

        await axios.put(
          `http://localhost:3001/users/${id}`,
          formvalue
        );

        alert("User Updated Successfully ✅");

        navigate("/manage_user");

      } catch (error) {

        console.log(error);

      }
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #667eea, #764ba2)",
      }}
    >

      <Header title="Edit User" />

      <div className="container py-5">

        <div className="row justify-content-center">

          <div className="col-md-6">

            <div
              className="card border-0 shadow-lg rounded-4"
              style={{
                background: "rgba(255,255,255,0.95)",
              }}
            >

              <div className="card-body p-5">

                <h2 className="text-center fw-bold mb-4">
                  Edit User
                </h2>

                <form onSubmit={submitHandle}>

                  {/* NAME */}

                  <div className="mb-4">

                    <label className="form-label fw-semibold">
                      Name
                    </label>

                    <input
                      type="text"
                      className="form-control rounded-pill p-3"
                      placeholder="Enter Name"
                      name="name"
                      value={formvalue.name || ""}
                      onChange={changeHandle}
                    />

                  </div>

                  {/* EMAIL */}

                  <div className="mb-4">

                    <label className="form-label fw-semibold">
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control rounded-pill p-3"
                      placeholder="Enter Email"
                      name="email"
                      value={formvalue.email || ""}
                      onChange={changeHandle}
                    />

                  </div>

                  {/* PASSWORD */}

                  <div className="mb-4">

                    <label className="form-label fw-semibold">
                      Password
                    </label>

                    <input
                      type="password"
                      className="form-control rounded-pill p-3"
                      placeholder="Enter Password"
                      name="password"
                      value={formvalue.password || ""}
                      onChange={changeHandle}
                    />

                  </div>

                  {/* MOBILE */}

                  <div className="mb-4">

                    <label className="form-label fw-semibold">
                      Mobile
                    </label>

                    <input
                      type="number"
                      className="form-control rounded-pill p-3"
                      placeholder="Enter Mobile"
                      name="mobile"
                      value={formvalue.mobile || ""}
                      onChange={changeHandle}
                    />

                  </div>

                  {/* BUTTON */}

                  <button
                    type="submit"
                    className="btn btn-primary w-100 rounded-pill p-3 fw-bold"
                  >
                    Update User
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}

export default Edit_user;