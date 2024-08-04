import Nav from "./sections/Nav";
import Header from "./sections/Header";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Reviews from "./sections/Review";
import About from "./sections/About";
import { useState, useEffect } from "react";

function SirB() {
  const [dark, setDark] = useState(localStorage.getItem("dark") || "false");
  const [ref, setRef] = useState("");
  localStorage.setItem("dark", dark);

  useEffect(() => {
    if (dark === "true") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.10,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        let element = entry.target;

        if (entry.isIntersecting ) {
          console.log(entry.boundingClientRect);
          
          setRef(element.id);
          element.classList.add("view");
        }
      });
    }, options);

    const target = document.querySelectorAll("section");
    target.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  function set() {
    setDark((prev) => {
      if (prev === "true") {
        return "false";
      } else {
        return "true";
      }
    });
  }
  return (
    <>
    <div className="container">
      <Nav set={set} dark={dark} />
      <Header  />
      <About current={ref}/>
      <Skills />
      <Reviews />
      <Contact />
      <Footer dark={dark} />      
    </div>
    </>
  );
}

export default SirB;
