
const StaffCard = (props) => {
  return (
    <>
      <div className="staff">
        <div className="staffCon">
        <div className="staffImg">
          <img src={props.img} alt={props.name} />
        </div>

        <div className="staffTextContainer">
          <h2 className="staffName">{props.name}</h2>

          {/* <br /> */}

          <h4 className="staffPosition">{props.position}</h4>
        </div>            
        </div>


        <div className="staffHidden">
        <div className="staffTextContainer">
          <h2 className="staffName">{props.name}</h2>

          {/* <br /> */}

          <h4 className="staffPosition">{props.position}</h4>
        </div>
          {" "}
          <p className="staffText">{props.des}</p>
        </div>
      </div>
    </>
  );
};

export default StaffCard;
