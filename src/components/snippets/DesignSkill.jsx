import { Link } from "react-router-dom";

const DesignSkill = (props) => {
  return (
    <>
      <div className="designSkill fade">
        <img
        // className="fade"
          src={props.img || "https://picsum.photos/id/870/200/300?grayscale"}
          alt="random"
        />
        <div className="designSkillText">
          <h3 className="projectCardHead">{props.header}</h3>
          <p className="text">{props.text}</p>

          <Link
          to={`https://wa.me/+2347056017060/?text=Lets%20Work/discuss%20On%20${props.header}`}
          onClick={window.location.reload}
        >
          <button className="contact btn"> Get In Touch </button>{" "}
        </Link>
        </div>


      </div>
    </>
  );
};

export default DesignSkill;