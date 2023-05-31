import React, { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const SignUp = () => {
  const navigate = useNavigate();
  const { createUser } = useStateContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);
  let specialCharacters = /[@#$&123]/;

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then((currentUser) => {
          if (currentUser) {
            toast.success("🦄 seccessfully created new Account!", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
            setTimeout(() => {
              navigate("/signin");
            }, 4000);
          }
        });
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
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
          Sign Up
        </h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block font-semibold mb-2">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email..."
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
            <div style={{ color: "red" }}>
              {email.length && !email.includes("@gmail.com")
                ? "make sure email must contain in the end @gmail.com"
                : ""}
            </div>
            <input
              value={password}
              placeholder="Password..."
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              className={`w-full rounded border-gray-300 py-2 px-3 focus:outline-none focus:ring-2 ${
                isDarkMode ? "bg-gray-800 text-white" : ""
              }`}
            />
            <div
              className={`${
                password.length >= 6 && specialCharacters.test(password)
                  ? " bg-white text-blue-600"
                  : " text-red-700"
              }`}
            >
              {password.length >= 6 && specialCharacters.test(password)
                ? "strong password"
                : password.length > 3
                ? "week password"
                : ""}
            </div>
          </div>

          <button
            type="submit"
            className={`w-full ${
              isDarkMode ? "bg-gray-800" : "bg-blue-500 hover:bg-blue-700"
            } text-white font-semibold py-2 px-4 rounded`}
          >
            Create new account
          </button>
        </form>
        <p
          className={`text-center mt-4 ${
            isDarkMode ? "text-gray-700" : "text-gray-700"
          }`}
        >
          Already have an account ?<Link to="/signin">Sign In</Link>
        </p>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default SignUp;
