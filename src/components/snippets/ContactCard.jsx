import { Link } from "react-router-dom"

const ContactCard = (props) => {
    return (
      <Link to={props.link}>
        <div className="info">
        {" "}
        <a href={props.link} className="con">
          {props.img} {props.text}
        </a>
      </div>
      </Link>

    )
}

export default ContactCard