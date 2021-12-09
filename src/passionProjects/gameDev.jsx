import { Heading } from "../Components/Heading";
import { Information } from "../Components/Information";
import enemies from '../assets/passionProjects/gameDev/enemies.png';
import gameSetting from '../assets/passionProjects/gameDev/gameSetting.png';
import instructions from '../assets/passionProjects/gameDev/instructions.png';
import m4a1 from '../assets/passionProjects/gameDev/m4a1.png';
import shot from '../assets/passionProjects/gameDev/shot.png';
import mainMenu from '../assets/passionProjects/gameDev/mainMenu.png';
import { SubHeading } from "../Components/SubHeading";
import ResponsiveEmbed from 'react-responsive-embed';
import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
import { useEffect } from "react";

export default function GameDev() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="px-15p">
                <Heading text="FPS Game Development on Unreal Engine." />
                <p className="font-bold mb-4">Vance Reloaded.</p>
                <Information text="In this new-age spy game, play as Vance McCormick and use your tactical skills to eliminate the enemies around your base. Each game level offers the player an M4A1 pickup, multiple ammo pickups, and a set of flashbangs scattered somewhere throughout the map. Instructions appear throughout the game when picking up objects and travelling through the map." />
            </div>
            <div className="flex sm:flex-row flex-col my-8 space-y-4 sm:space-y-0 sm:space-x-8">
                <img src={mainMenu} alt="" className="" />
                <div className="flex flex-col w-full space-y-4 sm:space-y-8">
                    <img src={gameSetting} alt="" className="h-full" />
                    <img src={instructions} alt="" className="h-full" />
                </div>
            </div>
            <div className="flex sm:flex-row flex-col my-8 sm:space-y-0 space-y-4 sm:space-x-8">
                <div className="flex flex-col sm:space-y-0 space-y-4 w-full sm:w-1/3 items-center">
                    <img src={m4a1} alt="" className="w-full" />
                    <img src={shot} alt="" className="w-full" />
                </div>
                <div className="sm:w-2/3 w-full">
                    <img src={enemies} alt="" className="h-full w-full" />
                </div>
            </div>
            <div className="px-15p my-12">
                <SubHeading text="GAME TRAILER" textColor='text-white' />
                <ResponsiveEmbed src='https://www.youtube.com/embed/pCOO8waXMQs' allowfullscreen />
            </div>
        </>
    );
}