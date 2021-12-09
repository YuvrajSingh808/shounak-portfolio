import { Behance, Email, Insta, Linkedin } from "../assets/icons";

export default function Footer() {
    return (
        <div className="py-20 space-y-12 flex flex-col justify-evenly items-center text-customGrey">
            <p className="text-2xl font-bold">Find me on</p>
            <div className="flex justify-center sm:space-x-24 space-x-8 sm:w-full">
                <a href="https://www.behance.net/sounak1412" target="_blank" rel="noopener noreferrer">
                    <img src={Behance} alt=""className="w-8 sm:w-16 hover:scale-125 transform-gpu ease-in-out duration-200 transition" />
                </a>
                <a href="mailto:sounak1412@gmail.com" target="_blank" rel="noopener noreferrer">
                    <img src={Email} alt="" className="w-8 sm:w-16 hover:scale-125 transform-gpu ease-in-out duration-200 transition"/>
                </a>
                <a href="https://www.instagram.com/souns1412/" target="_blank" rel="noopener noreferrer">
                    <img src={Insta} alt="" className=" w-8 sm:w-16   hover:scale-125 transform-gpu ease-in-out duration-200 transition"/>
                </a>
                <a href="https://www.linkedin.com/in/sounak-gupta/" target="_blank" rel="noopener noreferrer">
                    <img src={Linkedin} alt="" className=" w-8 sm:w-16 hover:scale-125 transform-gpu ease-in-out duration-200 transition" />
                </a>
            </div>
            <p className="text-base">
                Open for commissions and freelance work
            </p>
        </div>
    );
}