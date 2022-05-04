import React from "react";
import image from "./assets/bg.png";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import History from "./components/History";
import Weather from "./components/Weather";

const App = () => {
  return (
    <main
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="history" element={<History />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
