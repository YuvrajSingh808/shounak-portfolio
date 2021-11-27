import { Link } from "react-router-dom";

export function ProjectTile(props) {
    return (
        <Link to={
            {
                pathname: "/" + props.id,
            }
            }
             >
            <div className={`flex sm:flex-row flex-col items-center justify-start my-6 bg-${props.color} hover:scale-105 transform-gpu ease-in-out duration-200 transition`}>
                <img src={props.image} alt="" srcset="" />
                <div className="mb-6 sm:mb-0 mx-4 sm:mx-0">
                    <p className="sm:text-4xl text-2xl font-bold mb-4">{props.title}</p>
                    <p className="text-base">{props.subtitle}</p>
                </div>
            </div>
        </Link>
    );
}
