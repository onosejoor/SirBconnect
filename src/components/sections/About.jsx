import { useState, useEffect } from "react";

const About = ({ current }) => {
  const [count, setCount] = useState(0);
  const target = 500;

  useEffect(() => {
    if (current === "about") {
      let interval = setInterval(() => {
        setCount((prev) => {
          if (prev !== target) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      });
    } else if (current === "reviews") {
      setCount(0);
    }
  }, [current]);

  return (
    <>
      <section id="about">
        <h1 className="about">Who are we?</h1>

        <p className="aboutText">
          We are a premier ICT and research company dedicated to providing
          comprehensive, accurate information solutions and actionable research services.
          🧑‍💻
        </p>

        <h2 className="count top">
          {" "}
          With over {"  "}
          <span className="counter">{count}</span>
          {"  "}
          researches{" "} conducted
        </h2>
      </section>
    </>
  );
};

export default About;
