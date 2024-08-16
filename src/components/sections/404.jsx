import { Link } from "react-router-dom";
import svg from "/images/Router/404.png";
import Nav from "./Nav";

const Error = ({ dark, set }) => {
  return (
    <>
      <Nav dark={dark} set={set} routed={true} />
      <div id="error">
        <div>
          <img className="img404" src={svg} alt="404 'Page Not Found' image" />
        </div>
        {/* Looks like you researched into the unknown */}
        <h1 className="text404">Lost in the Research Maze?</h1>

        <h2 className="errorText404">
          It seems the page you’re looking for is missing. Let’s get you back to
          the homepage to continue your research journey.
        </h2>
        <div  className="errorBtn">
        <Link to={"/"} onClick={window.location.reload}>
          <button className="contact"> Go Back Home </button>
        </Link>            
        </div>


      </div>
    </>
  );
};

export default Error;
