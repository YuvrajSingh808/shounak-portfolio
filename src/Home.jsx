import { RecentProjects } from './Components/RecentProjects';
import { useEffect, useRef } from 'react';
import Navbar from "./Components/navbar";

export default function Homepage() {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.style.background = null;
        }, []);
    const el1 = useRef(null);
    return (
        <>
            <Navbar  selected="Home" reference={el1} />
            <div className="">

                <Intro />
                <RecentProjects reference={el1} />
            </div>
        </>
    );
}

function Intro() {
    return (
        <div className="sm:mt-40 mt-24 mb-20 mx-15p">
            <div className="mb-6">
                <p className="text-5xl">Hi, I am <span className="font-bold">Sounak Gupta</span></p>
            </div>
            <p className="text-xl mb-9">and I am an Artist, Engineer and <span className="font-bold">UX Designer</span></p>
            <p className="text-base leading-10">
                I design digital products that incorporate the design thinking process. I'm extremely passionate about delivering human-centered solutions that help society. I have garnered real-world experiences by working in diverse, cross-cultural teams in both India and internationally as a User Researcher, UI-UX, and Interaction designer and occasionally performing tasks of Product Management and Marketing.
            </p>
        </div>
    );
}

