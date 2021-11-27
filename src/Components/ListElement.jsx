import { BsArrowRight } from 'react-icons/bs';

export function ListElement(props) {
    return <div className="flex mt-5">
        <div className="text-3xl mr-3">
            <BsArrowRight />
        </div>
        <div className="text-base leading-relaxed">
            <span className="font-bold">{props.title}</span> {props.information}
        </div>
    </div>;
}
