import { FaArrowUp } from "react-icons/fa";
import { useEffect, useRef } from "react";
import isClientReady from "@/lib/isClientReady";

export default function ToTop() {
    let btnRef = useRef<any>();

    useEffect(() => {
        if (!isClientReady()) return;
        handleScroll();
        document.addEventListener("scroll", handleScroll);

        return () => document.removeEventListener("scroll", handleScroll);
    }, []);

    function handleClick() {
        window.scrollTo({ top: 0 });
    }

    function handleScroll() {
        if (window.scrollY >= window.innerHeight * 0.5) {
            btnRef.current.classList.remove("translate-y-[15rem]");
            return btnRef.current.classList.add("translate-y-0");
        }

        btnRef.current.classList.add("translate-y-[15rem]");
        return btnRef.current.classList.remove("translate-y-0");
    }

    return (
        <button ref={btnRef} className="transition shadow-md duration-700 fixed right-0 bottom-0 aspect-square bg-primary-400 hover:bg-primary-200 grid p-3 rounded-full overflow-hidden place-items-center m-4 z-[1000]" onClick={handleClick}>
            <FaArrowUp className="text-3xl phone:text-xl text-neutral-50" />
        </button>
    );
}
