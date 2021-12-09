export function ProjectBrief(props) {
    return (
        <div className="bg-black -mt-8 px-15p py-12 text-white flex sm:flex-row flex-col items-center">
            <div className="flex flex-col">
                <div className="flex items-center mb-12 sm:flex-row">
                    <p className="text-4xl font-bold mr-10">{props.projectName}</p>
                    <div className="ml-8">
                        <img src={props.icon} className="" alt="" srcset="" />
                    </div>
                </div>
                <p className="text-opacity-50 text-white text-base mb-5">OVERVIEW AND BACKGROUND</p>
                <div className="sm:w-3/5 w-full sm:h-40 mb-24">
                    <span className=" leading-10 ">
                        {props.paragraph1}
                    </span>
                </div>
                <div className="sm:w-3/5 w-full sm:h-60 mt-8 mb-12 flex flex-col justify-between items-start">
                    <span className="leading-10 mb-4">
                        {props.paragraph2}
                    </span>
                    {props.buttonComponent}
                </div>
            </div>
            <div className="flex flex-col sm:w-4/5 w-full">
                <div className="mb-12 h-16 flex items-end">
                    <p className="text-base">{props.timeline}</p>
                </div>
                <p className="text-opacity-50 text-white text-base mb-5">MY ROLE</p>
                <div className="leading-10 flex flex-col justify-start h-48 mb-12">
                    {props.roles.map((x, i) => <p className={(i === 0 ? 'font-bold' : 'font-normal')}>{x}</p>)}
                </div>
                <div className="leading-10 flex flex-col justify-start h-60 mb-16 ">
                    <p className="text-opacity-50 text-white text-base mb-5">MY TEAM (<span>{props.totalMembers}</span>)</p>
                    {props.team.map((x) => <p>{x}</p>)}
                </div>
            </div>
        </div>
    );
}
