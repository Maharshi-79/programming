import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import axios from "axios";
import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";

const ManageUser = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const redirect = useNavigate();

  const [data, setData] = useState([]);

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
  });


  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:3001/users");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await axios.delete(`http://localhost:3001/users/${id}`);
      fetchData();
      alert("User deleted successfully ✅");
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete user ❌");
    }
  };

  const handleEdit = async (id) => {
    try {
      const res = await axios.get(`http://localhost:3001/users/${id}`);
      setFormData(res.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  //  FIXED (no ID change)
  const changeHandle = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  //  FIXED UPDATE
  const submitHandle = async (e) => {
    e.preventDefault();

    try {
      await axios.patch(`http://localhost:3001/users/${formData.id}`, formData);

      fetchData();
      alert("User updated successfully ✅");

      const modal = document.getElementById("myModal");
      const modalInstance = window.bootstrap.Modal.getInstance(modal);
      modalInstance.hide();
    } catch (error) {
      console.error(error);
      alert("Update failed ❌");
    }
  };


  const toggleStatus = async (id) => {
        const res = await axios.get(`http://localhost:3001/users/${id}`);
        if (res.data.status == "Block") {
            const upd = await axios.patch(`http://localhost:3001/users/${id}`, {status:"Unblock"});
            fetchData();
            alert('User Unblock success');
            return false;
        }
        else {
            const upd = await axios.patch(`http://localhost:3001/users/${id}`, {status:"Block"});
            fetchData();
            alert('User Block success');
            return false;
        }
    }


  return (
    <div>
      <Header title="Manage Page" />

      <div className="container mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((value) => (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.name}</td>
                  <td>{value.email}</td>
                  <td>{value.mobile}</td>
                    {/* ✅ STATUS */}
                    <td>
                            <button
                              className="btn btn-success m-2"
                              onClick={() => toggleStatus(value.id)}
                            >
                              {" "}
                              {value.status}{" "}
                            </button>
                          </td>
                  <td>
                    <button
                      className="btn btn-primary m-2"
                      data-bs-toggle="modal"
                      data-bs-target="#myModal"
                      onClick={() => handleEdit(value.id)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger m-2"
                      onClick={() => handleDelete(value.id)}
                    >
                      Delete
                    </button>

                    <button
                      className="btn btn-info btn-sm"
                      onClick={() => redirect(`/edit_user/${value.id}`)}
                    >
                      Edit in new page
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {/* ✅ MODAL */}
        <div id="myModal" className="modal fade">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit User</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>

              <div className="modal-body">
                <form onSubmit={submitHandle}>
                  <div className="mb-3">
                    <label>Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={changeHandle}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={changeHandle}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Password:</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={formData.password || ""}
                      onChange={changeHandle}
                    />
                  </div>

                  <div className="mb-3">
                    <label>Mobile:</label>
                    <input
                      type="number"
                      className="form-control"
                      name="mobile"
                      value={formData.mobile}
                      onChange={changeHandle}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </form>
              </div>

              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ManageUser;
