import { useState, useRef, useEffect } from "react";
import { FaInstagram, FaGithub } from "react-icons/fa";
import isClientReady from "../lib/isClientReady";

import ButtonAnchor from "./ButtonAnchor";

export default function Hero() {
    let [imgY, setImgY] = useState<number>(0);
    let imgRef = useRef<any>();
    let cardRef = useRef<any>();

    if (isClientReady()) {
        useEffect(() => {
            setImgY(window.scrollY);
            handleScroll();
            window.addEventListener("scroll", handleScroll);

            return () => window.removeEventListener("scroll", handleScroll);
        }, []);
    }

    function handleScroll(e?: Event) {
        setImgY(window.scrollY * 0.125);
    }

    if (imgRef.current) imgRef.current.style.objectPosition = `center ${imgY * 2}px`;
    if (cardRef.current) {
        cardRef.current.style.bottom = `calc(25% - ${imgY * 2}px)`;
        cardRef.current.style.opacity = `${1 - imgY * 0.01}`;
    }

    return (
        <header className="h-screen relative overflow-hidden isolate" id="hero">
            <div className="hero__banner absolute h-4/5 left-0 top-0 w-full z-[-1]">
                <img ref={imgRef} src="/assets/hero-banner.jpeg" data-y={imgY} className="absolute w-full h-full object-cover object-center" />
                <div className="w-full h-full bg-primary-200 bg-opacity-70 absolute"></div>
            </div>

            <div ref={cardRef} id="about" className="hero__card flex w-max aspect-[20/9] absolute bottom-[25%] h-2/3 left-1/2 translate-x-[-50%] rounded-md overflow-hidden shadow-md">
                <div data-slide="right" className="card__avatar p-6 flex flex-col aspect-[3/5] bg-primary-800 items-center">
                    <img src="/assets/avatar.jpg" alt="avatar" className="rounded-full aspect-square mb-6" />
                    <p className="text-xl font-bold">ISLA</p>
                    <p className="text-lg font-medium">Komang Adi Wirawan</p>
                    <div className="bg-primary-400 w-8 h-[.175rem] my-auto"></div>
                    <p className="font-light tracking-[.105rem] text-lg">PROJECT PORTFOLIO</p>
                    <div className="card__links w-full flex justify-center items-center mt-4 text-2xl gap-4">
                        <a href="https://github.com/mangadi3859" title="Github" target="_blank">
                            <FaGithub />
                        </a>
                        <a href="https://www.instagram.com/mangadi3859/" title="Instagram" target="_blank">
                            <FaInstagram />
                        </a>
                    </div>
                </div>
                <div data-slide="left" className="card__content min-w-[80%] text-white bg-black bg-opacity-80 px-10 py-6 flex-grow">
                    <h1 className="text-6xl font-bold mb-3 border-b-8 inline-block border-primary-400">Hello</h1>
                    <h2 className="text-2xl font-medium">Here's who i am & what i do.</h2>
                    <div className="card__btn mt-6 flex gap-4 justify-start items-center">
                        <ButtonAnchor href="#resume" className="bg-primary-400 hover:bg-primary-200 hover:scale-105">
                            Resume
                        </ButtonAnchor>
                        <ButtonAnchor href="/project" className="border-white border hover:border-neutral-100 hover:scale-105">
                            Project
                        </ButtonAnchor>
                    </div>
                    <p className="mt-12 text-md font-thin pr-10 ">
                        My name is <b>Komang Adi Wirawan</b>. Building a successful algorithm is a challenge for me. I am highly energetic in <b>Back End</b>, making bot or making algorithm is my specialitssies.
                    </p>
                    <p className="mt-4 text-md font-thin pr-10 ">I'm currently an intern in PT. Taksu Teknologi Indonesia. I'm extremely excited about working and would love to help!</p>
                </div>
            </div>
        </header>
    );
}
