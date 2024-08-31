const NyscServiceCard = ({src, header, text, svg}) => {
  return (
    <>
      <div className="brand flager">
        <div className="nyscServiceImage">
            {src && <img className="illu" src={src} alt={header} />    }
            {svg && svg}
        </div>

        <div>
          <h4 className="bold">{header}</h4>

          <p className="state con">{text}</p>
        </div>
      </div>
    </>
  );
};

export default NyscServiceCard;
