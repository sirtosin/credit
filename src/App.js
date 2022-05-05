import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import History from "./pages/History";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="history" element={<History />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </main>
  );
};

export default App;
