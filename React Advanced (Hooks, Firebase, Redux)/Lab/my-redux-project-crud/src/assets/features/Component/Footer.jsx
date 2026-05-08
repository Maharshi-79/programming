import React from "react";

function Footer() {

  return (
    <footer
      className="text-white text-center py-4 mt-5"
      style={{
        background:
          "linear-gradient(135deg, #667eea, #764ba2)",
      }}
    >

      <div className="container">

        <h5 className="fw-bold mb-2">
          Admin Dashboard
        </h5>

        <p className="mb-1">
          Manage Users & System Efficiently
        </p>

        <small>
          © 2026 All Rights Reserved
        </small>

      </div>

    </footer>
  );
}

export default Footer;