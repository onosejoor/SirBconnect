import { useEffect } from "react";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Nav from "../sections/Nav";
import GraphicDesign from "./router-sections/GraphicSection";


// then add this to the function that is called for re-rendering

function Graphics({ dark, set, route }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <Nav dark={dark} routed={true} set={set} route={route}/>
      <GraphicDesign />
      <Contact dark={dark}/>
      <Footer routed={true}/>
    </>
  );
}

export default Graphics;
