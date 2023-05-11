import React, { useEffect, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";
import { auth } from "../firebase";
const SignIn = () => {
  const { user, setUser } = useStateContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const onButtonHandle = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          alert("Welcome to you admin dashboard");
          setUser((pre) => !pre);
        }
      })
      .catch((err) => {
        alert(err.message);
        console.log(err.message);
      });
  };
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div className="w-96 bg-white p-8 shadow-lg rounded-lg">
        <button
          onClick={toggleMode}
          className={`mb-4 ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
          } py-2 px-4 rounded`}
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
        <h2
          className={`text-3xl font-bold mb-6 ${
            isDarkMode ? "text-white" : "text-black"
          }`}
        >
          Sign In
        </h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-2">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className={`w-full rounded border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 ${
                isDarkMode ? "bg-gray-800 text-white" : ""
              }`}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block font-semibold mb-2">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className={`w-full rounded border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 ${
                isDarkMode ? "bg-gray-800 text-white" : ""
              }`}
            />
          </div>
          <button
            onClick={onButtonHandle}
            type="submit"
            className={`w-full ${
              isDarkMode ? "bg-gray-800" : "bg-blue-500 hover:bg-blue-700"
            } text-white font-semibold py-2 px-4 rounded`}
          >
            Log In
          </button>
        </form>

        <p
          className={`text-center mt-4 ${
            isDarkMode ? "text-gray-700" : "text-gray-700"
          }`}
        >
          Don't have an account?<Link to="/signup"> Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
