import Nav from "./sections/Nav";
import Header from "./sections/Header";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Reviews from "./sections/Review";
import About from "./sections/About";

function SirB({ set, dark, curRef }) {
  return (
    <>

      <Nav set={set} dark={dark} />
      <Header />
      <About current={curRef} />
      <Skills />
      <Reviews />
      <Contact />
      <Footer dark={dark} />
    </>
  );
}

export default SirB;
