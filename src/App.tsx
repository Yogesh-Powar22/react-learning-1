import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./assets/component/About";
import Navbar from "./assets/component/Navbar";
import Contact from "./assets/component/Contact";
import Home from "./assets/component/Home";
import ErrorPage from "./assets/component/ErrorPage";
import {GlobalContextProvider} from "./assets/context/GlobalContext";

function App() {
  // const [userName, setUserName] = useState<any>("yogesh");

  return (
    <>
      <div>
        <GlobalContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </BrowserRouter>
        </GlobalContextProvider>
      </div>
    </>
  );
}

export default App;
