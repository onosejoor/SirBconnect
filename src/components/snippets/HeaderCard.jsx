const HeaderCard = (props) => {
  return (
    <div
      className={
        !props.class ? `design-container` : `design-container ${props.class}`
      }
    >
      <div>
      {props.top2 && <h4 className="top">{props.top2}</h4>}
        <h1 className="designH1">

          <span className="comName">SirBconnect: </span>
          {props.text}
        </h1>{" "}
        {props.motto && <h3>{props.motto}</h3>}
        {props.top && <h4 className="top">{props.top}</h4>}
      </div>

      {props.src && (
        <img
          className={props.class2 ? "headerImage" : null}
          src={props.src}
          alt={props.src && props.text}
        />
      )}
    </div>
  );
};

export default HeaderCard;
