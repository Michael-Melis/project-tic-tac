import NavBar from "./components/NavBar";
import { useState } from "react";
import DropDown from "./components/DropDown";
import Footer from "./components/Footer";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <NavBar toggle={toggle} />
      <DropDown toggle={toggle} isOpen={isOpen} />
      <Footer />
    </>
  );
};

export default App;
