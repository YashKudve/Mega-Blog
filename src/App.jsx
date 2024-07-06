import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components/index";
import { Outlet } from "react-router-dom";

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL); //this process in create-react-app
  console.log("Appwrite URL: ",import.meta.env.VITE_APPWRITE_URL);
  console.log("Project ID: ",import.meta.env.VITE_APPWRITE_PROJECT_ID);
  console.log("Database ID",import.meta.env.VITE_APPWRITE_DATABASE_ID);
  console.log("Collection ID",import.meta.env.VITE_APPWRITE_COLLECTION_ID);
  console.log("Bucket ID",import.meta.env.VITE_APPWRITE_BUCKET_ID);

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

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-500">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
