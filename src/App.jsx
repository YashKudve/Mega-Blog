import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL); //this process in create-react-app
  // console.log(import.meta.env.VITE_APPWRITE_URL);

  let [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => (setLoading = false));
  }, []);

  return !loading ? <div className="min-h-screen">Test</div> : null;
}

export default App;
