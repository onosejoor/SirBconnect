import Nav from "../../sections/Nav";
import Contact from "../../sections/Contact";
import Footer from "../../sections/Footer";
import ResearchSections from "./ResearchSections";

const Research = () => {
    return (<>
    <Nav routed={true}/>
    <ResearchSections />
    <Contact />
    <Footer routed={true}/>
    </>)
}

export default Research;