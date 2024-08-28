import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SirB from "./SirB";
import Graphics from "./service-page/Graphics";
import "../index.css";
import WebDev from "./service-page/WebDev";
import Error from "./sections/404";
import Schorlarship from "./service-page/router-sections/Scholarship";
import StaffsRouterComponent from "./service-page/router-sections/StaffsRouter";
import Research from "./service-page/router-sections/Research";
import SchoolCas from "./service-page/router-sections/SchoolCas";

console.log(window.location);

function App() {
  // Get local storage Theme
  const [dark, setDark] = useState(localStorage.getItem("dark") || "false");
  localStorage.setItem("dark", dark);
  const [ref, setRef] = useState("");

  // Set theme
  useEffect(() => {
    if (dark === "true") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [dark]);

  const set = () => {
    setDark((prev) => {
      if (prev === "true") {
        return "false";
      } else {
        return "true";
      }
    });
  };

  useEffect(() => {
    const urlHash = window.location.hash;

    if (urlHash.length) {
      const element = document.getElementById(urlHash.substring(1));
      if (element) {
        element.scrollIntoView();
      }
    }
  }, []);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        let element = entry.target;

        if (entry.isIntersecting) {
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
  }, []);

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<SirB dark={dark} set={set} curRef={ref} />}
          />
          <Route
            path="graphic-design"
            element={<Graphics dark={dark} set={set} ggg={ref} />}
          />
          <Route path="web-dev" element={<WebDev dark={dark} set={set} />} />
          <Route
            path="schorlarships"
            element={<Schorlarship dark={dark} set={set} />}
          />
          <Route path="staffs" element={<StaffsRouterComponent dark={dark} set={set} />} /> 
          <Route path="researches" element={<Research dark={dark} set={set} />} />
          <Route path="school-cas" element={<SchoolCas dark={dark} set={set} />} /> 
          <Route path="consultation" element={<SchoolCas dark={dark} set={set} />} />
          <Route path="*" element={<Error dark={dark} set={set} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
