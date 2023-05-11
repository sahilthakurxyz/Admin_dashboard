import React, { useState } from "react";
import SignUp from "./Authentication/SignUp";
import App from "./App";
import { useStateContext } from "./contexts/ContextProvider";
import SignIn from "./Authentication/SignIn";
import { Route, Routes } from "react-router-dom";
const AuthPage = () => {
  const { user, setUser } = useStateContext();
  return (
    <div>
      {!user ? (
        <>
          <Routes>
            <Route path="/Admin_dashboard" element={<SignIn />} />
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />

            <Route />
          </Routes>
        </>
      ) : (
        <App />
      )}
    </div>
  );
};

export default AuthPage;
