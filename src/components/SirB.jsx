import Nav from "./sections/Nav";
import Header from "./sections/Header";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Reviews from "./sections/Review";
import About from "./sections/About";
import MeetStaff from "./sections/MeetStaff";
import Ceo from "./sections/Ceo";
import WhatsNew from "./sections/WhatsNew";

function SirB({curRef }) {
  return (
    <>
      <Nav/>
      <Header />
      <About current={curRef}/>
      <Ceo/>
      <Skills />
      <MeetStaff />
      <WhatsNew />
      <Reviews />
      <Contact/>
      <Footer/>
    </>
  );
}

export default SirB;
