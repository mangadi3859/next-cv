export default function Hamburger({ className, state, ...props }: any) {
    return (
        <div className={`aspect-square flex-col justify-center gap-2 px-2 items-center h-1/2 relative overflow-hidden ${className}`} {...props}>
            <span className={`transition-all duration-300 w-full inline-block h-[2px] absolute bg-black origin-center ${!state ? "top-0" : "rotate-45 top-1/2 -translate-y-1/2"}`}></span>
            <span className={`transition-all duration-300 w-full inline-block h-[2px] absolute bg-black ${state && "opacity-0"}`}></span>
            <span className={`transition-all duration-300 w-full inline-block h-[2px] bottom-0 absolute bg-black origin-center ${state && "rotate-[-45deg] bottom-1/2 translate-y-1/2"}`}></span>
        </div>
    );
}
