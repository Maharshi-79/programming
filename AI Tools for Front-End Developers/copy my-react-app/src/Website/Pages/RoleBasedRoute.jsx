import { Navigate } from "react-router-dom";

export default function RoleBasedRoute({ children, role }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    return <Navigate to="/login" />;
  }
  

  // 🚫 Blocked user check
  if (user.status === "blocked") {
    alert("You are blocked 🚫");
    localStorage.removeItem("user");
    return <Navigate to="/login" />;
  }

  // 🔐 Role check
  if (user.role !== role && user.role !== "admin") {
    alert("Access Denied ❌");
    return <Navigate to="/" />;
  }

  return children;
}