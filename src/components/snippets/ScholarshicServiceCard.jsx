const ScholarshipServiceCard = (props) => {
    return (
        <>
        <div className="scholarshipCard">
            <div className="cardImg-container">
                <img className="cardImg" src={props.src || "https://picsum.photos/300?grayscale"} alt={props.header} />
            </div>

            <div className="scholarTextContainer">
                <h3 className="scholarCardHeader">{props.header}</h3>

                <p className="scholarCardText">{props.text}</p>
            </div>
        </div>
        </>
    )
}

export default ScholarshipServiceCard;