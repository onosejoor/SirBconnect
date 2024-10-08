import Contact from "../../sections/Contact";
import Footer from "../../sections/Footer";
import Nav from "../../sections/Nav";
import StaffCard from "../../snippets/StaffCard";

const StaffsRouterComponent = () => {
  return (
    <>
    <Nav routed={true} />
      <section id="staff">
      <h3 className="top"> Meet Our Team </h3>

      <div className="staff-container">
        <StaffCard
          des="Sunday Ezekiel is our creative powerhouse, specializing in branding and digital media. With over a decade of experience, he crafts stunning designs that captivate and inspire."
          name="Obinna N"
          position="ICT technician"
            img="/images/staffs & CEO/boy.png"
        />{" "}
        <StaffCard
          des="Sunday Ezekiel is our creative powerhouse, specializing in branding and digital media. With over a decade of experience, he crafts stunning designs that captivate and inspire."
          name="Samuel"
          position="Computer engineer"
            img="/images/staffs & CEO/boy.png"
        />{" "}
        <StaffCard
          des="Sunday Ezekiel is our creative powerhouse, specializing in branding and digital media. With over a decade of experience, he crafts stunning designs that captivate and inspire."
          name="christy"
          position="researcher"
            img="/images/staffs & CEO/girl.jpeg"
        />{" "}
        <StaffCard
          des="Sunday Ezekiel is our creative powerhouse, specializing in branding and digital media. With over a decade of experience, he crafts stunning designs that captivate and inspire."
          name="peter A.O"
          position="Researcher"
            img="/images/staffs & CEO/boy.png"
        />{" "}
        <StaffCard
          des="Sunday Ezekiel is our creative powerhouse, specializing in branding and digital media. With over a decade of experience, he crafts stunning designs that captivate and inspire."
          name="Sunday Ezekiel"
          position="ICT Researcher"
          img="https://picsum.photos/id/870/200/300?grayscale"
        />{" "}
        <StaffCard
          des="Sunday Ezekiel is our creative powerhouse, specializing in branding and digital media. With over a decade of experience, he crafts stunning designs that captivate and inspire."
          name="Sunday Ezekiel"
          position="ICT Researcher"
          img="https://picsum.photos/id/870/200/300?grayscale"
        />{" "}
        <StaffCard
          des="Sunday Ezekiel is our creative powerhouse, specializing in branding and digital media. With over a decade of experience, he crafts stunning designs that captivate and inspire."
          name="Sunday Ezekiel"
          position="ICT Researcher"
          img="https://picsum.photos/id/870/200/300?grayscale"
        />{" "}
        <StaffCard
          des="Sunday Ezekiel is our creative powerhouse, specializing in branding and digital media. With over a decade of experience, he crafts stunning designs that captivate and inspire."
          name="Sunday Ezekiel"
          position="ICT Researcher"
          img="https://picsum.photos/id/870/200/300?grayscale"
        />

      </div>
      </section>

      <Contact />
      <Footer  routed={true}/>
    </>
  );
};

export default StaffsRouterComponent;
