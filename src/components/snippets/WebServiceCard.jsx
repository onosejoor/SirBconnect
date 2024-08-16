const WebServiceCard = (props) => {
  return (
    <>
      <div className="webCard">
        <div>
          <img className="webServiceImg" src={props.src} alt={props.header} />
        </div>

        <div className="webServiceText">
          <h2 className="webServiceh2">{props.header}</h2>
          <br />
          <p className="webText">{props.text}</p>
        </div>
      </div>
    </>
  );
};

export default WebServiceCard;
