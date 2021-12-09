import { Link } from "react-router-dom";

export function NextUpTile(props) {
    return (
        <div className="sm:w-1/2 w-full">
            <Link to={{
                pathname: "/" + props.id,
            }}>
                <div className={`flex sm:flex-row flex-col items-center justify-start sm:my-6 hover:scale-105 transform-gpu ease-in-out duration-200 transition`}>
                    <img src={props.image} className="w-full" alt="" srcset="" />
                    {/* <div className="w-3-5">
                        <p className="text-xl font-bold">{props.title}</p>
                    </div> */}
                </div>
            </Link>
        </div>
    );
}
