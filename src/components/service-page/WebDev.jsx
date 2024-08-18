import { useEffect } from "react";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import Nav from "../sections/Nav";
import Job from "./router-sections/Web";

function WebDev({ dark, set }) {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <>
      <Nav dark={dark} routed={true} set={set} />
      <Job />
      <Contact dark={dark}/>
      <Footer dark={dark} routed={true}/>
    </>
  );
}

export default WebDev;