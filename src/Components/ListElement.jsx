import { BsArrowRight } from 'react-icons/bs';

export function ListElement(props) {
    return <div className="flex mt-5 items-start">
        <div className="text-xl mr-3 mt-2">
            <BsArrowRight />
        </div>
        <div className="text-base leading-10">
            <span className="font-bold">{props.title}</span> {props.information}
        </div>
    </div>;
}
