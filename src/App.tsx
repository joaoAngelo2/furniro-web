import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importe Router, Routes e Route
import Header from "./components/Header";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
      </Router>
    </>
  );
}

export default App;
