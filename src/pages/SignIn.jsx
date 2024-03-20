import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Footer from "../components/Footer";

const SignIn = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log(userData);
    axios
      .post("http://localhost:8080/api/auth/login", userData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("Credenciales incorrectas", err);
      });
  };

  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <>
    <h1 className="singHello">Welcome to your Bank</h1>

      <div className="containerSignIn">
        <form className="formIn" onSubmit={handleSignIn}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleInput}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={handleInput}
              required
            />
          </div>
          <button type="submit">Sign In</button>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default SignIn;
