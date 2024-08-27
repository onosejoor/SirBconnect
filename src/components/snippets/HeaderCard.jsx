const HeaderCard = (props) => {
  return (
    <div
      className={
        !props.class ? `design-container` : `design-container ${props.class}`
      }
    >
      <div>
        <h1 className="designH1">
          <span className="comName">SirBconnect: </span>
          {props.text}
        </h1>{" "}
        {props.motto && <h3>{props.motto}</h3>}
        {props.top && <h4 className="top">{props.top}</h4>}
      </div>

      <img
        className={props.class2 ? "headerImage" : null}
        src={props.src || "/images/Router/designHead.png"}
        alt="design picture"
      />
    </div>
  );
};

export default HeaderCard;
