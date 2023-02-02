import { useState, useRef, useEffect } from "react";
import isClientReady from "../../lib/isClientReady";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

import AboutCard from "./AboutCard";
import ContentCard from "./ContentCard";

export default function Hero() {
    let [imgY, setImgY] = useState<number>(0);
    let imgRef = useRef<any>();
    let cardRef = useRef<any>();
    let cardPhoneRef = useRef<any>();

    useEffect(() => {
        if (!isClientReady()) return;
        setImgY(window.scrollY);
        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function handleScroll(e?: Event) {
        setImgY(window.scrollY * 0.125);
    }

    if (imgRef.current) imgRef.current.style.objectPosition = `center ${imgY * 2}px`;
    if (cardRef.current) {
        cardRef.current.style.bottom = `calc(25% - ${imgY * 2}px)`;
        cardRef.current.style.opacity = `${1 - imgY * 0.01}`;
    }

    return (
        <header className="h-screen relative overflow-x-hidden isolate" id="hero">
            <div className="hero__banner absolute h-4/5 left-0 top-0 w-full z-[-1]">
                <img ref={imgRef} src="/assets/hero-banner.jpeg" data-y={imgY} className="absolute w-full h-full object-cover object-center" />
                <div className="w-full h-full bg-primary-200 bg-opacity-70 absolute"></div>
            </div>

            <div ref={cardRef} className="phone:hidden phone:overflow-y-visible phone:flex-col phone:top-0 phone:bottom-[none] hero__card flex aspect-[20/9] absolute bottom-[25%] max-w-[60rem] w-[90%] left-1/2 translate-x-[-50%] rounded-md overflow-hidden shadow-md">
                <AboutCard data-slide="right" />
                <ContentCard data-slide="left" />
            </div>

            <Swiper ref={cardPhoneRef} pagination={true} spaceBetween={50} autoplay={{ delay: 8000 }} centeredSlides={true} modules={[Pagination, Autoplay]} className="mt-5 phone:block hero__card hidden max-w-[60rem] w-[90%] rounded-md overflow-hidden hover:cursor-grab">
                <SwiperSlide className="h-full my-auto">
                    <AboutCard className="rounded-md shadow-md " />
                </SwiperSlide>
                <SwiperSlide>
                    <ContentCard className="rounded-md h-full my-auto overflow-auto shadow-md" />
                </SwiperSlide>
            </Swiper>
        </header>
    );
}
