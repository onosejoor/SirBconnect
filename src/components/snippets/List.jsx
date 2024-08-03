export default function Lists (props) {
    return <li className={props.class1 } onClick={props.click} ><a onClick={props.click} className={props.class2} href={props.link}>{props.text}</a></li>
}
    