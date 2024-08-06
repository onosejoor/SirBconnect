import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SirB from "./SirB";
import "../index.css";
import Contact from "./sections/Contact";
import JobApplication from "./service-page/JobApplication";

function App() {
  const [dark, setDark] = useState(localStorage.getItem("dark") || "false");
  localStorage.setItem("dark", dark);

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

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SirB />} />
        <Route
          path="/job-application"
          element={<JobApplication dark={dark} set={set} />}
        />
        <Route path="*" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
