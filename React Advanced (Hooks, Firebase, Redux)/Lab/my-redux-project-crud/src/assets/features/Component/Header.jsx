import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Header = ({ title }) => {

  const redirect = useNavigate();

  useEffect(() => {

    // if (!localStorage.getItem("s_id")) {
    //   redirect("/");
    // }

  }, []);

  const logout = () => {

    localStorage.removeItem("s_id");
    localStorage.removeItem("s_name");

    alert("Logout Success ✅");

    redirect("/");
  };

  return (
    <div>

      {/* TOP HEADER */}

      <div
        className="text-white text-center py-5 shadow"
        style={{
          background:
            "linear-gradient(135deg, #667eea, #764ba2)",
        }}
      >
        <h1 className="fw-bold display-5">
          {title}
        </h1>

        <p className="mt-2 mb-0">
          Admin Dashboard Panel
        </p>
      </div>

      {/* NAVBAR */}

      <nav
        className="navbar navbar-expand-lg shadow"
        style={{
          background: "#ffffff",
        }}
      >
        <div className="container">

          {/* LOGO */}

          <NavLink
            to="/dashboard"
            className="navbar-brand fw-bold text-primary"
          >
            AdminPanel
          </NavLink>

          {/* TOGGLE BUTTON */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* NAV LINKS */}

          <div
            className="collapse navbar-collapse"
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">

              <li className="nav-item mx-2">

                <NavLink
                  to="/dashboard"
                  className="nav-link fw-semibold"
                >
                  Home
                </NavLink>

              </li>

              <li className="nav-item mx-2">

                <NavLink
                  to="/add_user"
                  className="nav-link fw-semibold"
                >
                  Add User
                </NavLink>

              </li>

              <li className="nav-item mx-2">

                <NavLink
                  to="/manage_user"
                  className="nav-link fw-semibold"
                >
                  Manage User
                </NavLink>

              </li>

              <li className="nav-item mx-2">

                <button
                  className="btn btn-danger rounded-pill px-4"
                  onClick={logout}
                >
                  Logout
                </button>

              </li>

            </ul>
          </div>

        </div>
      </nav>

    </div>
  );
};

export default Header;