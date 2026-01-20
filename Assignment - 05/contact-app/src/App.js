import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContactProvider } from "./context/ContactContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddContact from "./pages/AddContact";
import "./assets/css/bootstrap.min.css";
import "./assets/css/custom.css";

function App() {
  return (
    <ContactProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-contact" element={<AddContact />} />
        </Routes>
      </Router>
    </ContactProvider>
  );
}

export default App;
