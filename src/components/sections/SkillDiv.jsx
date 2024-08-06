import { Link } from "react-router-dom";

const SkillDiv = (props) => {
  return (
    <Link to={`/${props.url}`}>
      <div className="skills">
        <div className="skillIMG">
          <img src={props.src} alt="skills" loading="lazy" />
        </div>
        <h3 className="skillText">{props.text}</h3>
      </div>
    </Link>
  );
};

export default SkillDiv;
