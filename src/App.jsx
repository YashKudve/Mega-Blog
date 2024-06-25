import React from "react";

function App() {
  // console.log(process.env.REACT_APP_APPWRITE_URL); //this process in create-react-app

  console.log(import.meta.env.VITE_APPWRITE_URL);

  return <div>Blog app with appwrite</div>;
}

export default App;
