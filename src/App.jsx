import Home from "./pages/Home";
import Details from "./pages/Details";
import Add from "./pages/Add";
import Favorites from "./pages/Favorites";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="bg-[#283A45]">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details" element={<Details />} />
            <Route path="/add" element={<Add />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
