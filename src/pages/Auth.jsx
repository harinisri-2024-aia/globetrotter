import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const Auth = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isLogin) {
      // Signup flow
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      // Save user info
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        })
      );

      alert("Signup successful! Now login.");
      setIsLogin(true); // switch to login form
      setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    } else {
      // Login flow
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (!storedUser) {
        alert("No user found. Please sign up first!");
        return;
      }

      if (
        formData.email === storedUser.email &&
        formData.password === storedUser.password
      ) {
        alert("Login successful!");
        navigate("/destinations"); // ✅ Redirect to Destinations instead of Home
      } else {
        alert("Invalid email or password!");
      }
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {!isLogin && (
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        )}
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin
          ? "Don't have an account? Sign Up"
          : "Already have an account? Login"}
      </p>
    </div>
  );
};

export default Auth;
