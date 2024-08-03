const ContactCard = (props) => {
    return (
        <div className="info">
        {" "}
        <a href={props.link} className="con">
          {props.img} {props.text}
        </a>
      </div>
    )
}

export default ContactCard