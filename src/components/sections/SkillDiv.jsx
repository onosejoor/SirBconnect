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
    <Link
      to={props.url}
      onClick={window.location.reload}
      className="anchorSkill"
    >
      <div className="skills">
        <div className="skillIMG">
          <img src={props.src} alt="skills" loading="lazy" />
        </div>

        <div className="skillTextWrap">
          <h3 className="skillText">{props.header}</h3>

          <p className="text">
            {!show ? props.text.slice(0, 150) + "..." : props.text}
          </p>

          <div className="seemore">
            <button
              className="linkButton whatsNewLink"
              onClick={(e) => {
                setSee();
                e.preventDefault();
              }}
            >
              {show ? "See Less" : "See more"}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SkillDiv;
