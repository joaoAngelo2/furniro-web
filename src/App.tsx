import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Importe Router, Routes e Route
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header></Header>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;
