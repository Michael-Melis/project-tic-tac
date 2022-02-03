import NavBar from "./components/NavBar";
import { useState } from "react";
import DropDown from "./components/DropDown";
import Footer from "./components/Footer";
import LandingPage from "./pages/landingPage";
import { Route, Routes } from "react-router-dom";
import Singleplayer from "./pages/singleplayer";
import Multyplayer from "./pages/multyplayer";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-primary h-screen ">
      <NavBar toggle={toggle} />
      <DropDown toggle={toggle} isOpen={isOpen} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/singleplayer" element={<Singleplayer />} />
        <Route path="/multyplayer" element={<Multyplayer />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
