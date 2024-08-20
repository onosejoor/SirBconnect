import { Link } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <>
      <div className="projectCard">
        <img src={ props.img || "https://picsum.photos/id/870/200/300?grayscale"} alt="random" />
        <div className="cardText">
          <h3 className="projectCardHead">{props.header}</h3>
          <p className="text">{props.text}</p>

          <Link to={"#contact"}  onClick={window.location.reload}>
          <button className="contact btn">  Get In Touch  </button>{" "}
        </Link>
        </div>


      </div>
    </>
  );
};

export default ProjectCard;
