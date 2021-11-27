export function Feature(props) {
    return (
        <div className="flex items-center space-x-4 my-5">
            <div className="rounded-full bg-black text-white h-8 sm:h-16 w-16 overflow-hidden flex justify-center items-center">
                <div className="text-sm sm:text-2xl">{props.icon}</div>
            </div>
            <p><span className="font-bold">{props.boldText}</span>{props.text}</p>
        </div>
    );
}
