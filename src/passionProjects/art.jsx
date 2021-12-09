import { Link } from "react-router-dom";
import { BsArrowRight } from 'react-icons/bs';
import { Heading } from "../Components/Heading";
import { SubHeading } from "../Components/SubHeading";
import {
    art1,
    art2,
    art3,
    art4,
    art5,
    art6,
    art7,
    art8,
    art9,
} from '../assets/passionProjects/art/digital/index';
import {
    d1, d2, d3, d4, d5,
} from '../assets/passionProjects/art/3d/index'

import {
    sketch1,
    sketch2,
    sketch3,
    sketch4,
    sketch5,
    sketch6,
    sketch7,
} from '../assets/passionProjects/art/sketches/index';
import { useEffect } from "react";

export default function Art() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="px-15p">
                <Heading text="A quick peek into my more artistic side." />
                <SubHeading text="Digital/Graphic Art" textColor="text-white" />
                <div className="grid grid-rows-6 grid-cols-2">
                    <img src={art1} alt="" className="row-span-2" />
                    <img src={art2} alt="" className="row-span-3" />
                    <img src={art3} alt="" className="row-span-2" />
                    <img src={art4} alt="" className="row-span-3" />
                    <img src={art5} alt="" className="row-span-2" />
                </div>
                <img src={art6} alt="" className="w-full" />
                <div className="grid grid-rows-4 sm:grid-rows-2 sm:grid-cols-3 grid-cols-1 sm:gap-x-4 gap-y-4 my-8">
                    <img src={art7} alt="" className="row-span-1 col-span-1" />
                    <img src={art8} alt="" className="row-span-2 col-span-2 w-full" />
                    <img src={art9} alt="" className="row-span-1 col-span-1 h-full" />
                </div>
                <SubHeading text="3D ART" textColor="text-white" />
                <div className="grid grid-rows-3 sm:grid-cols-2 gap-y-8 gap-x-16">
                    <img src={d1} alt="" className="sm:col-span-2" />
                    <img src={d2} alt="" />
                    <img src={d3} alt="" />
                    <img src={d4} alt="" />
                    <img src={d5} alt="" />
                </div>
                <SubHeading text="sketching and painting" textColor="text-white" />
                <div className="flex space-x-8 w-full my-8">
                    <div className="flex flex-col h-full justify-between space-y-8 w-1/2">

                        <img src={sketch1} alt="" />
                        <img src={sketch3} alt="" />
                    </div>
                    <div className="flex flex-col justify-between h-full space-y-8 w-1/2">
                        <img src={sketch2} alt="" />
                        <img src={sketch4} alt="" />

                    </div>
                </div>
                <div className="grid grid-rows-2 sm:grid-cols-2 grid-cols-1 w-full">
                    <img src={sketch5} alt="" className="sm:col-span-2 w-full" />
                    <img src={sketch6} alt="" className="w-full pr-4" />
                    <img src={sketch7} alt="" className="w-full pl-4" />
                </div>
            </div>
        </>
    );
}
