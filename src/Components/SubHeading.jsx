export function SubHeading(props) {
    var textColor = 'text-black';
    if (props.textColor) {
        textColor = props.textColor;
    }
    return <p className={textColor + " uppercase mt-12 mb-5 text-black text-opacity-60"}>{props.text}</p>;
}
