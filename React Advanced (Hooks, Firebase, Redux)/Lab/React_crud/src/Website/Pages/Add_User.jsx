import React, { useState } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import axios from "axios";
const Add_User = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
  });

  const changeHandle=(e)=>{
    setFormData({...formData,id:new Date().getTime().toString(),status:"Unblock",[e.target.name]:e.target.value});
  }

  const submitHandle=async(e)=>{
    e.preventDefault();
    const res = await axios.post("http://localhost:3001/users",formData);
    setFormData({...formData,name:"",email:"",password:"",mobile:""});
    alert('user added successfully');
    return false;
}

  return (
    <div>
      <div>
        <Header title="Add User" />
        <div className="container mt-5">
          <div className="row">
            <div className="col-sm-12">
              <h2>Add User</h2>
              <form action="" method="post" onSubmit={submitHandle}>
                <div className="mb-3 mt-3">
                  <label htmlFor="email">Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    name="name"
                    value={formData.name}
                    onChange={changeHandle}
                  />
                </div>
                <div className="mb-3 mt-3">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    value={formData.email}
                    onChange={changeHandle}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pwd">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    name="password" value={formData.password} onChange={changeHandle}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pwd">Mobile:</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter Mobile"
                    name="mobile"   value={formData.mobile} onChange={changeHandle}
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Add_User;
