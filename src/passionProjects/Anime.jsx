import { Heading } from "../Components/Heading";
import { SubHeading } from "../Components/SubHeading";
import { Information } from "../Components/Information";
import tape1 from '../assets/passionProjects/animation/tape1.png';
import tape2 from '../assets/passionProjects/animation/tape2.png';
import tape3 from '../assets/passionProjects/animation/tape3.png';
import tape4 from '../assets/passionProjects/animation/tape4.png';
import tape5 from '../assets/passionProjects/animation/tape5.png';
import tape6 from '../assets/passionProjects/animation/tape6.png';
import tape7 from '../assets/passionProjects/animation/tape7.png';
import tape from '../assets/passionProjects/animation/tape.png';
import angry from '../assets/passionProjects/animation/angry.png';
import anxiety from '../assets/passionProjects/animation/anxiety.png';
import happy from '../assets/passionProjects/animation/happy.png';
import crying from '../assets/passionProjects/animation/crying.png';
import cleaning1 from '../assets/passionProjects/animation/cleaning1.png';
import cleaning2 from '../assets/passionProjects/animation/cleaning2.png';
import characters from '../assets/passionProjects/animation/characters.png';
import cleaning3 from '../assets/passionProjects/animation/cleaning3.png';
import background1 from '../assets/passionProjects/animation/background1.png';
import background2 from '../assets/passionProjects/animation/background2.png';
import ResponsiveEmbed from 'react-responsive-embed';
import { useEffect } from "react";

export default function Anime() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <div className="px-15p">
                <Heading text="I love Anime so much that I made my own." />
                <Information text="Nozomu (Hope) is the story of an underpriviledged little girl in the city of Tokyo who has lost the will to live due to gruelling circumstances. The only thing that stops her from taking her own life is a magical event..." />
            </div>
            <div className="flex sm:flex-row flex-col justify-between my-12 sm:space-y-0 space-y-4">
                {/* <img src={tape1} alt="" />
                <img src={tape2} alt="" />
                <img src={tape3} alt="" />
                <img src={tape4} alt="" />
                <img src={tape5} alt="" />
                <img src={tape6} alt="" />
                <img src={tape7} alt="" /> */}
                <img src={tape} alt="" />
            </div>
            <div className="px-15p text-white">
                <ResponsiveEmbed src='https://www.youtube.com/embed/QH2RFrOznvw' allowfullscreen />
                <SubHeading text="Character design" textColor="text-white" />
                <div className="flex sm:flex-row flex-col sm:space-y-0 space-y-6 justify-between my-8">
                    <img src={characters} alt="" />
                </div>
                <SubHeading text="BACKGROUND ARCHITECTURE" textColor="text-white" />
            </div>
            <div className="flex my-16 sm:space-y-0 space-y-8 justify-between sm:flex-row flex-col">
                <img src={background1} alt="" />
                <img src={background2} alt="" />
            </div>
        </div>
    );
}
