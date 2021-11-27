import { art3, art6 } from '../assets/passionProjects/art/digital';
import { d3 } from '../assets/passionProjects/art/3d';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export function PassionProjectsTile() {
    return <Link to={{ pathname: '/passionProjects' }}>
        <div className="flex space-x-4 items-center justify-between  hover:scale-105 transform-gpu ease-in-out duration-200 transition">
            <div className="w-1/4">
                <img src={art3} alt="" className="h-2/3 w-full" />
            </div>
            <div className="w-1/4 ">
                <img src={art6} alt="" className="h-2/3 w-full" />
            </div>
            <div className="w-1/4">
                <img src={d3} alt="" className="h-2/3 w-full" />
            </div>
            <div className="w-1/4 h-2/3 text-white pl-4">
                <div className="h-2/3 flex items-center">
                    <p>View All</p>
                    <BsArrowRight />

                </div>
            </div>
        </div>
    </Link>;
}
