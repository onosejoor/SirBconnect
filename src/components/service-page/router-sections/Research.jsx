import Nav from "../../sections/Nav";
import Contact from "../../sections/Contact";
import Footer from "../../sections/Footer";
import ResearchSections from "./ResearchSections";

const Research = ({dark, set}) => {
    return (<>
    <Nav dark={dark} set={set} routed={true}/>
    <ResearchSections />
    <Contact dark={dark}/>
    <Footer dark={dark} routed={true}/>
    </>)
}

export default Research;