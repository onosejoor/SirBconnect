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
      <nav className="navBar">
        <div className="logoContainer">
          <a href="/">
            <img
              className="logo"
              src={dark === "true" ? "/images/Logo2.png" : "/images/Logo1.png"}
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
            xmlns="http://www.w3.org/2000/svg"
            onClick={show}
            type="checkbox"
            className="bars"
            viewBox="0 0 50 50"
            fill="#fff"
            width="20px"
            height="20px"
          >
            <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
          </svg>
          <ul className="nav-items">
            {showed && (
              <svg
                onClick={show}
                fill="#fff"
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
      {/* <progress className="progress" value={10} max={100}></progress> */}
    </>
  );
}

export default Nav;
