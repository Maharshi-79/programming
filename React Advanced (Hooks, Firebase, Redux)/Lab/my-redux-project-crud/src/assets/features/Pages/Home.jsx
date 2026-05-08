import React from "react";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #667eea, #764ba2)",
      }}
    >
      <Header title={"Home Page"} />

      <div className="container py-5">

        {/* HERO SECTION */}

        <div
          className="text-center text-white p-5 rounded-4 shadow"
          style={{
            background: "rgba(255,255,255,0.1)",
          }}
        >
          <h1 className="fw-bold display-4">
            Welcome To Admin Panel
          </h1>

          <p className="lead mt-3">
            Manage Users & Dashboard Easily
          </p>

          <button
            className="btn btn-light px-4 mt-3"
            onClick={() => navigate("/manage_user")}
          >
            Manage Users
          </button>
        </div>

        {/* CARDS */}

        <div className="row mt-5 g-4">

          {/* CARD 1 */}

          <div className="col-md-4">

            <div className="card border-0 shadow rounded-4 h-100">

              <div className="card-body text-center p-4">

                <h3 className="fw-bold">
                  Dashboard
                </h3>

                <p className="text-muted">
                  View all dashboard details and
                  analytics.
                </p>

                <button
                  className="btn btn-primary rounded-pill"
                  onClick={() => navigate("/dashboard")}
                >
                  Go Dashboard
                </button>

              </div>

            </div>

          </div>

          {/* CARD 2 */}

          <div className="col-md-4">

            <div className="card border-0 shadow rounded-4 h-100">

              <div className="card-body text-center p-4">

                <h3 className="fw-bold">
                  Manage Users
                </h3>

                <p className="text-muted">
                  Add, edit and delete users easily.
                </p>

                <button
                  className="btn btn-success rounded-pill"
                  onClick={() => navigate("/manage_user")}
                >
                  Manage
                </button>

              </div>

            </div>

          </div>

          {/* CARD 3 */}

          <div className="col-md-4">

            <div className="card border-0 shadow rounded-4 h-100">

              <div className="card-body text-center p-4">

                <h3 className="fw-bold">
                  Logout
                </h3>

                <p className="text-muted">
                  Securely logout from admin panel.
                </p>

                <button
                  className="btn btn-danger rounded-pill"
                  onClick={() => {
                    localStorage.removeItem("s_id");
                    localStorage.removeItem("s_name");

                    navigate("/");
                  }}
                >
                  Logout
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

export default Home;