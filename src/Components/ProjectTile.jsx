import { Link } from "react-router-dom";

export function ProjectTile(props) {
    console.log(props.image.includes('rangDe'));
    return (
        <Link to={
            {
                pathname: "/" + props.id,
            }
            }
             >
            <div className={`flex mx-15p items-center justify-start hover:scale-105 transform-gpu ease-in-out duration-200 transition` + (props.image.includes('rangDe') ? ' -my-4': ' my-6' )}>
                <img src={props.image} alt="" srcset="" className="w-full" />
                {/* <div className="mb-6 sm:mb-0 mx-4 sm:mx-8 w-3/5 sm:mt-0 mt-4 flex flex-col">
                    <p className="sm:text-4xl text-xl font-bold sm:mb-4">{props.title}</p>
                    <p className="text-sm">{props.subtitle}</p>
                </div> */}
            </div>
        </Link>
    );
}
