import { Link } from "react-router-dom"

const ContactCard = (props) => {
    return (
      <Link to={props.link}>
        <div className="info">
        {" "}
        <div className="con">
        {props.img} {props.text}
        </div>
      </div>
      </Link>

    )
}

export default ContactCard