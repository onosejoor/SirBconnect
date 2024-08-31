import { useEffect } from "react";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Nav from "../sections/Nav";
import GraphicDesign from "./router-sections/GraphicSection";


// then add this to the function that is called for re-rendering

function Graphics (){
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <Nav  routed={true}  />
      <GraphicDesign />
      <Contact />
      <Footer routed={true}/>
    </>
  );
}

export default Graphics;
