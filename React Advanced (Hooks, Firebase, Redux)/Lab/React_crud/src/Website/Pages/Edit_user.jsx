import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../Component/Header'
import Footer from '../Component/Footer';

function Edit_user() {

  const { id } = useParams();   // get id from URL so we got id from url 
  const navigate = useNavigate();

  const [formvalue, setFormvalue] = useState({
    name: "",
    email: "",
    password: "",
    mobile: ""
  });

  // Fetch existing user data
  useEffect(() => {
    axios.get(`http://localhost:3001/users/${id}`)
      .then(res => setFormvalue(res.data));
  }, [id]);

  // Handle input change
  const changeHandle = (e) => {
    setFormvalue({
      ...formvalue,
      [e.target.name]: e.target.value
    });
  };

  // Update user
  const submitHandle = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:3001/users/${id}`, formvalue);

    alert("User Updated");
    navigate("/manage_user"); // redirect after update
  };

  return (
    <div>
      <Header title="Edit User" />

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12">

            <h2>Edit User</h2>

            <form onSubmit={submitHandle}>

              <div className="mb-3 mt-3">
                <label>Name:</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={formvalue.name || ""}
                  onChange={changeHandle}
                />
              </div>

              <div className="mb-3 mt-3">
                <label>Email:</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formvalue.email || ""}
                  onChange={changeHandle}
                />
              </div>

              <div className="mb-3">
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  value={formvalue.password || ""}
                  onChange={changeHandle}
                />
              </div>

              <div className="mb-3">
                <label>Mobile:</label>
                <input
                  type="number"
                  className="form-control"
                  name="mobile"
                  value={formvalue.mobile || ""}
                  onChange={changeHandle}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Update User
              </button>

            </form>

          </div>
        </div>
      </div>
        <Footer />
    </div>
  );
}

export default Edit_user;