
import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import Navbar1 from "./Navbar/Navbar1";
import "../styles.css"
import Icon from "./Home/IconGrid";
import Tax from "./Tax/Tax";
import Drei from "./Drei/Drei";
function App() {
  const [showNavbar1, setShowNavbar1] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Scroll 100px'i geçince Navbar1 gizlenir
      if (window.scrollY > 100) {
        setShowNavbar1(false);
      } else {
        setShowNavbar1(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar1 isVisible={showNavbar1} />
      <Navbar />
      <Home />
      <Icon/>
      <Tax/>
      <Drei/>
    </>
  );
}

export default App;


