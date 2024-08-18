import Nav from "../../sections/Nav";
import Contact from "../../sections/Contact"
import Footer from "../../sections/Footer"
import SchorlarshipSection from "./ScholarshipSection";

function Schorlarship({ set, dark }) {
  return (
    <>
      <Nav dark={dark} set={set} routed={true} />
      <SchorlarshipSection />
      <Contact dark={dark}/>
      <Footer dark={dark} set={set} routed={true} />
    </>
  );
}

export default Schorlarship;
