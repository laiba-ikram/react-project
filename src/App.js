// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavRoute from "./components/main/routes.js";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<NavRoute />} />
      </Routes>
    </Router>
  );
};

export default App;
