import React from "react";
import Header from "./components/Header";
import TapBotTemplate from "./components/TapBotTemplate";
import "./App.css";

function App() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center space-y-8">
        {/* h1 Heading */}
        <h1 className="text-white text-3xl font-bold text-center">
          Launch-ready Projects
        </h1>

        {/* TemplateCard Component */}
        <TapBotTemplate />
      </div>
    </div>
  );
}

export default App;
