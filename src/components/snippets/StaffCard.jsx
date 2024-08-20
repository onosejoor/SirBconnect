import Svg from "./Svg"

const StaffCard = (props) => {
    return (
        <>
        <div className="staff">
            <div className="staffImg">
                <img src={props.img} alt={props.name} />
            </div>

            <div className="staffTextContainer">
                <h2 className="staffName">{props.name}</h2>

                <p className="staffText">{props.des}</p>

                <br />

                <h4 className="staffPosition">{props.position}</h4>
            </div>

            <Svg />
        </div>
        </>
    )
}

export default StaffCard;