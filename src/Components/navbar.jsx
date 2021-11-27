import sgLogo from '../assets/sgLogo.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
export default function Navbar(props) {
    const [selected, changeSelected] = useState(props.selected);
    function NavTextElement(props) {
        return (
            <div>
                <Link
                    to={
                        {
                            pathname: props.pathname,
                        }
                    }
                >
                    <button onClick={() => {changeSelected(props.text)}} className={`text-sm ${props.isSelected ? "font-bold" : "font-normal hover:text-purple-900 hover:text-base"}`}>{props.text}</button>
                </Link>
            </div>
        );
    }
    return (
        <div className={props.textColor + " flex flex-col sm:flex-row sm:justify-between mx-10p my-6 sm:w-4/5 sm:items-center absolute z-10"}>
            <div className="bg-blue-500 flex items-center">

                <img src={sgLogo} alt="" className="fixed z-50" />
            </div>
            <div className="flex sm:mt-6 mt-8 items-end sm:space-x-0 space-x-4 w-full sm:w-1/4 justify-between">
                <NavTextElement text="Home" isSelected={selected === 'Home'} pathname="/" />
                <NavTextElement text="Portfolio" isSelected={selected === 'Portfolio'} />
                <NavTextElement text="Passion Projects" isSelected={selected === 'Passion Projects'} pathname="/passionProjects" />
            </div>
        </div>
    );
}