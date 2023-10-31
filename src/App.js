import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PageWheel from "./PageWheel";

const App = () => {
  return (
    <BrowserRouter basename="/wheelRenaser">
    <Routes>
      <Route path="/" element={<PageWheel />} />
    </Routes>
  </BrowserRouter>
  )
};

export default App;
