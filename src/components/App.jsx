import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SirB from "./SirB";
import Graphics from "./service-page/Graphics";
import "../index.css";
import Contact from "./sections/Contact";
import JobApplication from "./service-page/JobApplication";

function App() {
  const [dark, setDark] = useState(localStorage.getItem("dark") || "false");
  localStorage.setItem("dark", dark);
  const [ref, setRef] = useState("");

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
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        let element = entry.target;

        if (entry.isIntersecting) {
          console.log(element);

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
            path="/job-application"
            element={<JobApplication dark={dark} set={set} />}
          />
          <Route
            path="/graphic-design"
            element={<Graphics dark={dark} set={set} ggg={ref} />}
          />
          <Route path="*" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
