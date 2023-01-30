export default function Hamburger({ className, state, ...props }: any) {
    return (
        <div className={`aspect-square overflow-hidden flex-col justify-center gap-2 px-2 items-center h-1/2 relative ${className}`} {...props}>
            <span className={`transition-all duration-300 w-full inline-block h-[2px] top-0 absolute bg-black ${state && "rotate-45 origin-center top-1/2 -translate-y-1/2"}`}></span>
            <span className={`transition-all duration-300 w-full inline-block h-[2px] absolute bg-black ${state && "opacity-0"}`}></span>
            <span className={`transition-all duration-300 w-full inline-block h-[2px] bottom-0 absolute bg-black ${state && "rotate-[-45deg] bottom-1/2 origin-center translate-y-1/2"}`}></span>
        </div>
    );
}
