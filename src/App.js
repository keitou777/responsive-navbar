import "./App.css";
import Navbar from "./Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
