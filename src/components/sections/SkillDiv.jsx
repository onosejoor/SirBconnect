import { Link } from "react-router-dom";

const SkillDiv = (props) => {
  return (
    <Link
      to={`/${props.url}`}
      className="anchorSkill"
    >
      <div className="skills">
        <div className="skillIMG">
          <img src={props.src} alt="skills" loading="lazy" />
        </div>

        <div className="skillTextWrap">
          <h3 className="skillText">{props.header}</h3>

          <p className="text">{props.text}</p>
        </div>
      </div>
    </Link>
  );
};

export default SkillDiv;
