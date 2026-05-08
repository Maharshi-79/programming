import React, { useState } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { useDispatch } from "react-redux";
import { userinsert } from "../../../app/userSlice";
import { useNavigate } from "react-router-dom";

const Add_User = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  // INPUT CHANGE

  const changeHandle = (e) => {

    setFormData({
      ...formData,
      id: new Date().getTime().toString(),
      status: "Unblock",
      [e.target.name]: e.target.value,
    });

  };

  // VALIDATION

  const validation = () => {

    if (formData.name === "") {

      alert("Name Field is Required");
      return false;
    }

    if (formData.email === "") {

      alert("Email Field is Required");
      return false;
    }

    if (formData.password === "") {

      alert("Password Field is Required");
      return false;
    }

    if (formData.mobile === "") {

      alert("Mobile Field is Required");
      return false;
    }

    return true;
  };

  // SUBMIT

  const submitHandle = async (e) => {

    e.preventDefault();

    if (validation()) {

      await dispatch(userinsert(formData));

      alert("User Added Successfully ✅");

      // RESET FORM

      setFormData({
        name: "",
        email: "",
        password: "",
        mobile: "",
      });

      navigate("/manage_user");
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

      <Header title="Add User" />

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
                  Add New User
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
                      value={formData.name}
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
                      value={formData.email}
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
                      value={formData.password}
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
                      value={formData.mobile}
                      onChange={changeHandle}
                    />

                  </div>

                  {/* BUTTON */}

                  <button
                    type="submit"
                    className="btn btn-primary w-100 rounded-pill p-3 fw-bold"
                  >
                    Add User
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
};

export default Add_User;