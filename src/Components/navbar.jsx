import sgLogo from '../assets/sgLogo.svg';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { BiMenu } from 'react-icons/bi';
export default function Navbar(props) {
    const [selected, changeSelected] = useState(props.selected);
    const [navbarOpen, setNavbarOpen] = useState(false);
    console.log(props.reference);
    function NavTextElement(props) {
        return (
            <div>
                <Link
                    to={
                        {
                            pathname: props.pathname == null ? '/' : props.pathname,
                        }
                    }
                >
                    <button onClick={() => {
                        changeSelected(props.text);
                        if (props.text === 'Portfolio' && props.reference) {
                            props.reference.current.scrollIntoView({
                                behavior: 'smooth',
                            });
                        }
                    }} className={props.textColor + ` text-sm ${props.isSelected ? "font-bold" : "font-normal hover:text-gray-400 hover:text-base"}`}>{props.text}</button>
                </Link>
            </div>
        );
    }
    function NavButtonElement(props) {
        return (
            <>
                <div class="z-50 relative">

                    <div class="dropdown inline-block relative mx-auto z-50">
                        <button class="flex items-center space-x-2">
                            <span class={props.textColor + ` text-sm ${props.isSelected ? "font-bold" : "font-normal hover:text-gray-400 hover:text-base"}`}>Portfolio</span>
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                        </button>
                        <ul class="dropdown-menu absolute hidden z-80 text-gray-700 pt-1 text-xs -ml-8 w-40 text-center mx-auto">
                            <Link to={{ pathname: '/rangde' }} >
                                <li class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                                    Rang De
                                </li>
                            </Link>
                            <Link to={{ pathname: '/storeinstore' }} >
                                <li class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">Store in store

                                </li>
                            </Link>
                            <Link to={{ pathname: '/dmrc' }} >
                                <li class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                                    DMRC App Revamp
                                </li>
                            </Link>
                            <Link to={{ pathname: '/optimize' }} >
                                <li class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap">
                                    Optimize
                                </li>
                            </Link>
                        </ul>
                    </div>

                </div>
            </>
        );
    }
    return (
        <>
            <Link to={{pathname: '/'}} >
                <img src={sgLogo} alt="" className="fixed z-50 ml-10p mt-6" />
            </Link>
            <div className={props.textColor + " flex flex-col sm:flex-row justify-between px-10p pt-6 sm:mx-auto sm:justify-end sm:items-center z-10 w-full" + (navbarOpen ? '' : ' absolute')}>
                <button
                    className="self-end cursor-pointer text-3xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                    type="button"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                >
                    <BiMenu />
                </button>
                <div
                    className={
                        "lg:flex" +
                        (navbarOpen ? " flex-col" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <div className="flex lg:flex-row flex-col sm:items-start items-center sm:mt-6 mt-8 sm:justify-end sm:space-x-12 sm:space-y-0 space-y-4 justify-between">
                        <NavTextElement text="Home" isSelected={selected === 'Home'} pathname="/" />
                        <NavButtonElement text="Portfolio" isSelected={selected === 'Portfolio'} reference={props.reference} />
                        <NavTextElement text="Passion Projects" isSelected={selected === 'Passion Projects'} pathname="/passionProjects" />
                    </div>
                </div>
            </div>
        </>
    );
}