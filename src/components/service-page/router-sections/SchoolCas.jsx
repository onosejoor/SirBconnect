import Contact from "../../sections/Contact";
import Footer from "../../sections/Footer";
import Nav from "../../sections/Nav";
import DescripText from "./DescripText";

export default function SchoolCas ({dark, set}) {
    return (
        <>
        <Nav dark={dark} set={set} routed={true} />
        <DescripText />
        <Contact dark={dark} />
        <Footer dark={dark} routed={true} />
        </>
    )
}