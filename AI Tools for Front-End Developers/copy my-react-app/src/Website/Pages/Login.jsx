import React, { useState } from "react";
import axios from "axios";
import "./AuthForm.css";
import { useNavigate } from "react-router-dom";
function AuthForm() {

   const [isLogin, setIsLogin] = useState(true);
  const redirect = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

 

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (!email || !password || (!isLogin && !name)) {
      alert("All fields are required ❌");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters ❌");
      return;
    }

    try {
      // ================= LOGIN =================
      if (isLogin) {
        const res = await axios.get("http://localhost:3000/users");
        const users = res.data;

        const matchedUser = users.find(
          (user) =>
            user.email === email && user.password === password
        );

        if (!matchedUser) {
          alert("Invalid Email or Password ❌");
          return;
        }

        if (matchedUser.status === "blocked") {
          alert("Your account is blocked 🚫");
          return;
        }

        localStorage.setItem("user", JSON.stringify(matchedUser));
        alert("Login Successful ✅");

        // 🛠 Admin
        if (matchedUser.role === "admin") {
          redirect("/admindashboard");
          return;
        }

        // 👤 User
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.length === 0) {
          redirect("/menu");
        } else {
          redirect("/cart");
        }
      }

      // ================= SIGNUP =================
      else {
        const checkRes = await axios.get(
          `http://localhost:3000/users?email=${email}`
        );

        if (checkRes.data.length > 0) {
          alert("User already exists ❌");
          return;
        }

        await axios.post("http://localhost:3000/users", {
          name,
          email,
          password,
          role: "user",
          status: "unblock",
        });

        alert("Signup Successful ✅");
        setIsLogin(true);
      }
    } catch (error) {
      alert("Something went wrong ❌");
    }
  };


  return (
    <div className="main-div">
      <div className="auth-container">
        <div className="auth-card">
          {/* 🍔 Animated Icons */}
          <span className="food-icon icon1">🍕</span>
          <span className="food-icon icon2">🍔</span>
          <span className="food-icon icon3">🍟</span>
          <span className="food-icon icon4">🍩</span>

          <h2 className="auth-title">🍴 Foodie's Hub</h2>

          <h5 className="text-center mb-3">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h5>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                name="name"
                placeholder="👤 Name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
              />
            )}

            <input
              type="email"
              name="email"
              placeholder="📧 Email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="🔒 Password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
            />

            <button type="submit" className="auth-btn">
              {isLogin ? "Login 🍽️" : "Sign Up 🍕"}
            </button>
          </form>

          <div className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin
              ? "Don't have an account? Sign Up"
              : "Already have an account? Login"}
          </div>
        </div>
      </div>
    </div>
  );
}
export default AuthForm;
