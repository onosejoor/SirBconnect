const SkillDiv = (props) => {
  return (
    <div className="skills">
      <div className="skillIMG">
        <img src={props.src} alt="skills" loading="lazy"/>
      </div>
      <h3 className="skillText">{props.text}</h3>
    </div>
  );
};

export default SkillDiv;
