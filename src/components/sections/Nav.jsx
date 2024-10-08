import { useState, useEffect, useContext } from "react";
import Lists from "../snippets/List";
import { DarkThemeContext } from "../Context";

function Nav({ routed }) {
  const [showed, setShowed] = useState(false);
  const { dark, setDark } = useContext(DarkThemeContext);

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
            className="bars"
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill={dark === "false" ? "#001233" : "#fff"}
            onClick={show}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke={dark === "false" ? "#001233" : "#fff"}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke={dark === "false" ? "#001233" : "#fff"}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke={dark === "false" ? "#001233" : "#fff"}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <ul className="nav-items">
            {routed ? (
              <>
                {showed && (
                  <div>
                    <svg
                      onClick={show}
                      fill={dark === "false" ? "#001233" : "#fff"}
                      width="50px"
                      height="50px"
                      viewBox="0 0 256 256"
                      id="Flat"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z" />
                    </svg>
                  </div>
                )}
                <Lists
                  click={showed ? shut : null}
                  class1="nav"
                  class2="nav-link"
                  text="Home"
                  link="/"
                />
                <Lists
                  click={showed ? shut : null}
                  class1="nav"
                  class2="nav-link"
                  text="Contact"
                  link="#contact"
                />{" "}
              </>
            ) : (
              <>
                {showed && (
                  <div>
                    <svg
                      onClick={show}
                      fill={dark === "false" ? "#001233" : "#fff"}
                      width="30px"
                      height="30px"
                      viewBox="0 0 256 256"
                      id="Flat"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M202.82861,197.17188a3.99991,3.99991,0,1,1-5.65722,5.65624L128,133.65723,58.82861,202.82812a3.99991,3.99991,0,0,1-5.65722-5.65624L122.343,128,53.17139,58.82812a3.99991,3.99991,0,0,1,5.65722-5.65624L128,122.34277l69.17139-69.17089a3.99991,3.99991,0,0,1,5.65722,5.65624L133.657,128Z" />
                    </svg>
                  </div>
                )}
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
            {showed && (
              <>
                <h6 className="top">Web Pages</h6>
                <Lists
                  click={showed ? shut : null}
                  class1="nav"
                  class2="nav-link"
                  text="Research Services"
                  link="researches"
                />
                <Lists
                  click={showed ? shut : null}
                  class1="nav"
                  class2="nav-link"
                  text="NYSC"
                  link="nysc"
                />{" "}
                <Lists
                  click={showed ? shut : null}
                  class1="nav"
                  class2="nav-link"
                  text="Graphic-design"
                  link="graphic-design"
                />
                <Lists
                  click={showed ? shut : null}
                  class1="nav"
                  class2="nav-link"
                  text="Web-Devlopment"
                  link="web-dev"
                />{" "}
                <Lists
                  click={showed ? shut : null}
                  class1="nav"
                  class2="nav-link"
                  text="Scholarships"
                  link="scholarships"
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
