import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Add from "./pages/Add";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-bgColor_darkgreen min-w-[100vw]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Details />} />
          <Route path="/add" element={<Add />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
