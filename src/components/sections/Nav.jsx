import { useState, useEffect } from "react";
import Lists from "../snippets/List";

function Nav({ dark, set, routed }) {
  const [showed, setShowed] = useState(false);

  useEffect(() => {
    if (showed) {
      let dom = document.querySelector(".nav-items");
      let overlay = document.querySelector(".overlay");
      dom.classList.add("show");

      overlay.classList.add("show");
    } else {
      let dom = document.querySelector(".nav-items");
      let overlay = document.querySelector(".overlay");
      dom.classList.remove("show");
      overlay.classList.remove("show");
    }
  }, [showed]);

  function show() {
    setShowed((prev) => {
      return !prev;
    });
  }
  function shut() {
    setShowed(false);
  }

  return (
    <>
      <div className="overlay" onClick={show}></div>
      <div id="nav">
        <nav className="navBar">
          <div className="logoContainer">
            <a href="/">
              <img
                className="logo"
                src={
                  dark === "true" ? "/images/Logo2.png" : "/images/Logo1.png"
                }
                alt="SirB logo"
              />
            </a>

            <h4>SirBconnect Integrated Services</h4>
          </div>

          <div className="navCon">
            <img
              onClick={set}
              className="theme"
              src={
                dark === "true"
                  ? "/images/theme/light.svg"
                  : "/images/theme/dark.svg"
              }
            />

            <svg
              className="bars"
              onClick={show}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 50 50"
              width="30px"
              height="30px"
              fill={dark === "false" ? "#001233" : "#fff"}
            >
              <path
                onClick={show}
                d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
              />
            </svg>
            <ul className="nav-items">
              {showed && (
                <svg
                  onClick={show}
                  fill={dark === "false" ? "#001233" : "#fff"}
                  width="30px"
                  height="30px"
                  viewBox="0 0 256 256"
                  id="Flat"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    onClick={show}
                    d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z"
                  />
                </svg>
              )}

              {routed ? (
                <Lists
                  click={showed ? shut : null}
                  class1="nav"
                  class2="nav-link"
                  text="Home"
                  link="/"
                />
              ) : (
                <>
                  <Lists
                    click={showed ? shut : null}
                    class1="nav"
                    class2="nav-link"
                    text="Services"
                    link="#services"
                  />
                  <Lists
                    click={showed ? shut : null}
                    class1="nav"
                    class2="nav-link"
                    text="About"
                    link="#about"
                  />
                  <Lists
                    click={showed ? shut : null}
                    class1="nav"
                    class2="nav-link"
                    text="Contact"
                    link="#contact"
                  />
                  <Lists
                    click={showed ? shut : null}
                    class1="nav"
                    class2="nav-link"
                    text="Reviews"
                    link="#reviews"
                  />
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>

      {/* <progress className="progress" value={10} max={100}></progress> */}
    </>
  );
}

export default Nav;
