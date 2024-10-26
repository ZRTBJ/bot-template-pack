import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import TapBot from "./pages/TapBot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TapBot />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
