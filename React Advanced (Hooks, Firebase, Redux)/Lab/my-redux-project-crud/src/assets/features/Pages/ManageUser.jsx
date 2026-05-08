import React, { useEffect, useState } from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  userget,
  userdelete,
  userupdate,
} from "../../../app/userSlice";

const ManageUser = () => {

  const dispatch = useDispatch();

  const redirect = useNavigate();

  const users =
    useSelector((state) => state.user.user) || [];

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    mobile: "",
    status: "",
  });

  // FETCH USERS

  useEffect(() => {

    fetchData();

  }, []);

  const fetchData = async () => {

    await dispatch(userget());

  };

  // DELETE USER

  const handleDelete = async (id) => {

    if (window.confirm("Are You Sure ?")) {

      await dispatch(userdelete(id));

      dispatch(userget());

      alert("User Deleted Successfully ✅");
    }
  };

  // EDIT USER

  const handleEdit = (id) => {

    const res = users.find(
      (data) => data.id == id
    );

    if (res) {

      setFormData(res);

    }
  };

  // INPUT CHANGE

  const changeHandle = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  // UPDATE USER

  const submitHandle = async (e) => {

    e.preventDefault();

    await dispatch(userupdate(formData));

    dispatch(userget());

    alert("User Updated Successfully ✅");

    // CLOSE MODAL

    const modal =
      document.getElementById("myModal");

    const modalInstance =
      window.bootstrap.Modal.getInstance(modal);

    modalInstance.hide();
  };

  // STATUS TOGGLE

  const toggleStatus = async (id) => {

    const user = users.find(
      (item) => item.id == id
    );

    if (!user) return;

    const updatedUser = {
      ...user,
      status:
        user.status === "Unblock"
          ? "Block"
          : "Unblock",
    };

    await dispatch(userupdate(updatedUser));

    dispatch(userget());
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #667eea, #764ba2)",
      }}
    >

      <Header title="Manage Users" />

      <div className="container py-5">

        <div
          className="card border-0 shadow-lg rounded-4"
          style={{
            background: "rgba(255,255,255,0.95)",
          }}
        >

          <div className="card-body p-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

              <h2 className="fw-bold mb-0">
                User Management
              </h2>

              <button
                className="btn btn-primary rounded-pill px-4"
                onClick={() =>
                  redirect("/add_user")
                }
              >
                + Add User
              </button>

            </div>

            {/* TABLE */}

            <div className="table-responsive">

              <table className="table align-middle table-hover text-center">

                <thead
                  style={{
                    background: "#667eea",
                    color: "white",
                  }}
                >
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Status</th>
                    <th width="300">
                      Actions
                    </th>
                  </tr>
                </thead>

                <tbody>

                  {users.length > 0 ? (

                    users.map((value) => (

                      <tr key={value.id}>

                        <td>{value.id}</td>

                        <td>{value.name}</td>

                        <td>{value.email}</td>

                        <td>{value.mobile}</td>

                        <td>

                          <button
                            className={`btn rounded-pill px-3 ${
                              value.status ===
                              "Unblock"
                                ? "btn-success"
                                : "btn-danger"
                            }`}
                            onClick={() =>
                              toggleStatus(
                                value.id
                              )
                            }
                          >
                            {value.status}
                          </button>

                        </td>

                        <td>

                          <button
                            className="btn btn-primary btn-sm rounded-pill m-1 px-3"
                            data-bs-toggle="modal"
                            data-bs-target="#myModal"
                            onClick={() =>
                              handleEdit(
                                value.id
                              )
                            }
                          >
                            Edit
                          </button>

                          <button
                            className="btn btn-danger btn-sm rounded-pill m-1 px-3"
                            onClick={() =>
                              handleDelete(
                                value.id
                              )
                            }
                          >
                            Delete
                          </button>

                          <button
                            className="btn btn-warning btn-sm rounded-pill m-1 px-3 text-white"
                            onClick={() =>
                              redirect(
                                `/edit_user/${value.id}`
                              )
                            }
                          >
                            Edit Page
                          </button>

                        </td>

                      </tr>

                    ))

                  ) : (

                    <tr>

                      <td colSpan="6">
                        No Users Found
                      </td>

                    </tr>

                  )}

                </tbody>

              </table>

            </div>

          </div>

        </div>

        {/* EDIT MODAL */}

        <div
          className="modal fade"
          id="myModal"
          tabIndex="-1"
        >

          <div className="modal-dialog">

            <div className="modal-content rounded-4 border-0">

              <div
                className="modal-header text-white"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea, #764ba2)",
                }}
              >

                <h5 className="modal-title">
                  Edit User
                </h5>

                <button
                  type="button"
                  className="btn-close btn-close-white"
                  data-bs-dismiss="modal"
                ></button>

              </div>

              <div className="modal-body p-4">

                <form onSubmit={submitHandle}>

                  <div className="mb-3">

                    <label className="fw-semibold">
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={changeHandle}
                      className="form-control rounded-pill p-3"
                      required
                    />

                  </div>

                  <div className="mb-3">

                    <label className="fw-semibold">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={changeHandle}
                      className="form-control rounded-pill p-3"
                      required
                    />

                  </div>

                  <div className="mb-3">

                    <label className="fw-semibold">
                      Password
                    </label>

                    <input
                      type="password"
                      name="password"
                      value={
                        formData.password || ""
                      }
                      onChange={changeHandle}
                      className="form-control rounded-pill p-3"
                      required
                    />

                  </div>

                  <div className="mb-4">

                    <label className="fw-semibold">
                      Mobile
                    </label>

                    <input
                      type="number"
                      name="mobile"
                      value={formData.mobile}
                      onChange={changeHandle}
                      className="form-control rounded-pill p-3"
                      required
                    />

                  </div>

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
};

export default ManageUser;