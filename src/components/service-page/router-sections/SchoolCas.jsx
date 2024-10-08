import Contact from "../../sections/Contact";
import Footer from "../../sections/Footer";
import Nav from "../../sections/Nav";
import DescripText from "./DescripText";

export default function SchoolCas() {
  return (
    <>
      <Nav routed={true} />
      <DescripText />
      <Contact />
      <Footer routed={true} />
    </>
  );
}
