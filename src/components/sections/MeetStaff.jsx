import { Link } from "react-router-dom";
import StaffCard from "../snippets/StaffCard";

const MeetStaff = () => {
  return (
    <>
      <section id="staff">
        <h3 className="top"> Meet Our Team </h3>

        <h1 className="h1Text">
          Get to know the experts driving{" "}
          <span className="comName">SirBconnect’s</span> success
        </h1>

        <div className="staff-container">
          <StaffCard
            des="Sunday Ezekiel is our creative powerhouse, specializing in branding and digital media. With over a decade of experience, he crafts stunning designs that captivate and inspire."
            name="Austin E.U"
            position="Manager"
            img="/images/Router/teams/austin.png"
          />
          <StaffCard
            des="Sunday Ezekiel is our creative powerhouse, specializing in branding and digital media. With over a decade of experience, he crafts stunning designs that captivate and inspire."
            name="Sunday E"
            position="Research"
            img="/images/staffs & CEO/boy.png"
          />
          <StaffCard
            des="Sunday Ezekiel is our creative powerhouse, specializing in branding and digital media. With over a decade of experience, he crafts stunning designs that captivate and inspire."
            name="chioma C.M"
            position="Researcher/Bio-Tactician"
            img="/images/staffs & CEO/girl.jpeg"
          />
        </div>

        <Link to="teams" onClick={window.location.reload}>
          <button className="staffMore contact bullet"> See More.... </button>
        </Link>
      </section>
    </>
  );
};

export default MeetStaff;
