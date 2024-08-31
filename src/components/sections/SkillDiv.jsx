import { useState } from "react";
import { Link } from "react-router-dom";

const SkillDiv = (props) => {
  const [show, setShow] = useState(false);

  function setSee() {
    setShow((prev) => {
      return !prev;
    });
  }

  return (
    <div className="skills">
      <div className="skillContainer">
        <div className="skillIMG">
          <img src={props.src} alt="skills" loading="lazy" />
        </div>

        <div className="skillTextWrap">
          <h3 className="skillText">{props.header}</h3>

          {!show ? (
            <p className="text">
              {props.text.slice(0, 150) + "... "}{" "}
              <span>
                {" "}
                <button
                  className="linkButton whatsNewLink"
                  onClick={(e) => {
                    setSee();
                    e.preventDefault();
                  }}
                >
                  {show ? "See Less" : "See more"}
                </button>
              </span>
            </p>
          ) : (
            <p className="text">{props.text}</p>
          )}

          <div className="seemore">          {show && (
            <button
              className="linkButton whatsNewLink"
              onClick={(e) => {
                setSee();
                e.preventDefault();
              }}
            >
              See Less
            </button>
          )}</div>

        </div>
      </div>

      <Link
        to={props.url}
        onClick={window.location.reload}
        className="anchorSkill"
      >
        <div className="goToPage">
          <img src="/images/icons/arrowTop.svg" alt="Goto page arrow" />
        </div>
      </Link>
    </div>
  );
};

export default SkillDiv;
