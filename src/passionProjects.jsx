import { useEffect, useState } from "react";
import Navbar from './Components/navbar';
import Art from "./passionProjects/art";
import GameDev from "./passionProjects/gameDev";
import Anime from "./passionProjects/Anime";
import { BsArrowRight } from 'react-icons/bs';
import { Link } from "react-router-dom";

export default function PassionProjects() {
    const [selectedTab, changeSelectedTab] = useState('Anime');
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    function TabButton(props) {
        var style = 'sm:py-2 py-1 sm:px-20 px-8 text-white sm:text-xl uppercase border rounded-lg hover:text-black hover:bg-white hover:font-bold transition duration-500';
        if (props.isSelected) {
            style = "sm:py-2 py-1 sm:px-20 px-8 sm:text-xl uppercase border rounded-lg text-black bg-white font-bold";
        }
        return (
            <button className={style} onClick={() => { changeSelectedTab(props.id) }}>
                {props.text}
            </button>
        );
    }
    return (
        <div className="bg-black">
            <Navbar textColor="text-white " hoverColor="text-gray-300" selected="Passion Projects" />
            <div className="text-white pt-32 pb-12">
                <div className="flex sm:flex-row flex-col items-center space-y-4 sm:space-y-0 sm:justify-around py-4 sm:py-8 px-15p z-10 top-0 sticky bg-black">
                    <TabButton text="Animation" id="Anime" isSelected={selectedTab === 'Anime'} />
                    <TabButton text="Game Dev" id="Game" isSelected={selectedTab === 'Game'} />
                    <TabButton text="ART & GRAPHICS" id="Art" isSelected={selectedTab === 'Art'} />
                </div>
                {
                    selectedTab === 'Anime' ?
                        <>
                            <Anime />
                            <div className="px-15p flex flex-row-reverse w-full">
                                <button className="" onClick={() => { changeSelectedTab('Game') }} >
                                    <div className="w-full flex sm:space-x-4  items-center space-x-2 sm:text-2xl hover:text-gray-400">
                                        <p>See next: </p>
                                        <span className="font-bold">Game Dev</span>
                                        <BsArrowRight />
                                    </div>
                                </button>
                            </div>
                        </>
                        : (
                            selectedTab === 'Game' ?
                                <>
                                    <GameDev />
                                    <div className="px-15p flex flex-row-reverse w-full">
                                        <button className="" onClick={() => { changeSelectedTab('Art') }} >
                                            <div className="w-full flex sm:space-x-4  items-center space-x-2 sm:text-2xl hover:text-gray-400">
                                                <p>See next: </p><span className="font-bold" > Art and Graphic</span> <BsArrowRight />
                                            </div>
                                        </button>
                                    </div>
                                </> :
                                <>
                                    <Art />
                                    <Link className="px-15p flex flex-row-reverse w-full" to={{pathname: '/'}}>
                                        <div className="w-auto flex items-center justify-end sm:space-x-4 space-x-2 sm:text-2xl hover:text-gray-400">
                                            <p>Back to Home </p> <BsArrowRight />
                                        </div>
                                    </Link>
                                </>
                        )
                }


            </div>
        </div>
    );
}