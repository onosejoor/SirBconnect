import Nav from "../../sections/Nav";
import Contact from "../../sections/Contact"
import Footer from "../../sections/Footer"
import SchorlarshipSection from "./ScholarshipSection";

function Schorlarship() {
  return (
    <>
      <Nav routed={true} />
      <SchorlarshipSection />
      <Contact/>
      <Footer routed={true} />
    </>
  );
}

export default Schorlarship;
