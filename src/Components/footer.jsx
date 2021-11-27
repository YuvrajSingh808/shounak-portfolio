import { Behance, Email, Insta, Linkedin } from "../assets/icons";

export default function Footer() {
    return (
        <div className="h-60 flex flex-col justify-evenly items-center text-customGrey">
            <p className="text-2xl font-bold">Find me on</p>
            <div className="flex justify-between space-x-4 sm:w-96 text-4xl">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={Behance} alt=""className="  hover:scale-105 transform-gpu ease-in-out duration-200 transition" />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={Email} alt="" className="  hover:scale-105 transform-gpu ease-in-out duration-200 transition"/>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={Insta} alt="" className="  hover:scale-105 transform-gpu ease-in-out duration-200 transition"/>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img src={Linkedin} alt="" className="  hover:scale-105 transform-gpu ease-in-out duration-200 transition" />
                </a>
            </div>
            <p className="text-base">
                Open for commissions and freelance work
            </p>
        </div>
    );
}