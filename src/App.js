import React from "react";
import "./App.css";
import "./service/firebase";
import Header from "./components/Header";
import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Header />
    </AuthProvider>
  );
}

export default App;