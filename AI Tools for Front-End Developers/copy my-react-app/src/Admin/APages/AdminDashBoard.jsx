// AdminDashboard.jsx
import { useState } from "react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import AddMenu from "../ACommon/AddMenu";       // your add form (without edit logic)
import AdminTable from "../ACommon/AdminTable";
import ManageUsers from "../ACommon/ManageUsers";
import "./AdminDashBoard.css";

export default function AdminDashboard() {
  const navigate = useNavigate();
  const location = useLocation();

  // Helper to check active route
  const isActive = (path) => location.pathname === `/admindashboard${path}`;

  return (
    <div className="dashboard-wrapper">
      <aside className="dashboard-sidebar">
        <div className="sidebar-header">
          <h2>🍽️ Feane</h2>
          <p>chef’s workstation</p>
        </div>
        <nav className="sidebar-nav">
          <button
            className={`nav-btn ${isActive("/menu") ? "active" : ""}`}
            onClick={() => navigate("/admindashboard/menu")}
          >
            <i className="fas fa-plus-circle"></i> Add Menu
          </button>
          <button
            className={`nav-btn ${isActive("/menu-list") ? "active" : ""}`}
            onClick={() => navigate("/admindashboard/menu-list")}
          >
            <i className="fas fa-table-list"></i> Menu List
          </button>
          <button
            className={`nav-btn ${isActive("/users") ? "active" : ""}`}
            onClick={() => navigate("/admindashboard/users")}
          >
            <i className="fas fa-users"></i> Manage Users
          </button>
        </nav>
        <div className="sidebar-footer">
          <i className="fas fa-utensil-spoon"></i> spice route
        </div>
      </aside>

      <main className="dashboard-main">
        <div className="content-header">
          <h1>
            {isActive("/menu") && "📖 Add New Dish"}
            {isActive("/menu-list") && "📋 Complete Menu"}
            {isActive("/users") && "👥 Team & Customers"}
            {location.pathname.startsWith("/admindashboard/menu/edit/") && "✏️ Edit Dish"}
          </h1>
          <div className="kitchen-badge">👨‍🍳 Live_Kitchen</div>
        </div>
        <div className="component-container">
          <Routes>
            <Route path="menu" element={<AddMenu />} />
            <Route path="menu-list" element={<AdminTable />} />
            <Route path="users" element={<ManageUsers />} />
            <Route path="menu/edit/:id" element={<AddMenu />} />
            {/* Default redirect inside dashboard */}
          </Routes>
        </div>
      </main>
    </div>
  );
}