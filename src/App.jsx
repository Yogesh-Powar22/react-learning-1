import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./assets/component/About";
import Navbar from "./assets/component/Navbar";
import Contact from "./assets/component/Contact";
import Home from "./assets/component/Home";
import ErrorPage from "./assets/component/ErrorPage";
import GlobalContext from "./assets/context/GlobalContext";
import { useState } from "react";

function App() {
  const [userName, setUserName] = useState("yogesh");

  return (
    <>
      <div>
        <GlobalContext.Provider value={{ userName, setUserName }}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </BrowserRouter>
        </GlobalContext.Provider>
      </div>
    </>
  );
}

export default App;
