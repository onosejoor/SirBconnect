import Contact from "../../sections/Contact";
import Footer from "../../sections/Footer";
import Nav from "../../sections/Nav";
import NYSCsection from "./NYSCsection";

export default function NYSC() {
  return (
    <>
      <Nav routed={true}/>
      <NYSCsection />
      <Contact />
      <Footer />
    </>
  );
}
