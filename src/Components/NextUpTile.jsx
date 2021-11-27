import { Link } from "react-router-dom";

export function NextUpTile(props) {
    return (
        <div className="sm:w-1/2 w-full">
            <Link to={{
                pathname: "/" + props.id,
            }}>
                <div className={`flex sm:flex-row flex-col sm:h-40 h-32 items-center justify-start my-6 bg-${props.color} hover:scale-105 transform-gpu ease-in-out duration-200 transition`}>
                    <img src={props.image} className="w-36" alt="" srcset="" />
                    <div className="">
                        <p className="text-xl font-bold">{props.title}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
