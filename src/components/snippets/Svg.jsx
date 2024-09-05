import { Link } from "react-router-dom";

const Svg = (props) => {
  return (
    <Link to={props.link} >
     {props.svg}      
    </Link>
  );
};

export default Svg;
