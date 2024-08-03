const ReviewCard = (props) => {
  return (
    <>
      <div className="reviewCard">
        <div>
          <p className="reviewText">{props.text}</p>
        </div>
        <br />
        <div className="revImgWrap">
          <img src={props.src} alt="Avatar" loading="lazy"/>
          <br />
          <div>
            <h3 className="reviewer">{props.name}</h3>
            <b>{props.role}</b>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
