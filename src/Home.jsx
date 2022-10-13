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
            <Navbar selected="Home" reference={el1} />
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
                My impact-driven projects are geared toward solving complex business and social problems. I’m passionate about understanding user needs to find inspiration for innovative digital solutions. My diverse multicultural, international exposure to the design industry as a Researcher and Experience Designer helps me conceptualize inclusive, sustainable, and innovative designs. A strong technological foundation combined with my penchant for art propels me to create viable and aesthetic human-centered products and services.
            </p>
        </div>
    );
}

