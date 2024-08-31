import { useEffect } from "react";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Nav from "../sections/Nav";
import Job from "./router-sections/Web";

function WebDev() {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <Nav  routed={true} />
      <Job />
      <Contact />
      <Footer routed={true}/>
    </>
  );
}

export default WebDev;