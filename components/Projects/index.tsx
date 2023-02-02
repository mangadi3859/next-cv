import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import Preview from "./Preview";

export default function Projects() {
    return (
        <Swiper spaceBetween={50} data-slide="up" className="w-full project__slide aspect-video mb-[5rem]" autoplay={{ delay: 7000 }} navigation={true} pagination={{ clickable: true, dynamicBullets: true }} modules={[Autoplay, Navigation, Pagination]}>
            <SwiperSlide>
                <Preview className="w-full h-full" href="https://www.youtube.com/watch?v=-VRE0LxgpO8" imgsrc="/assets/lagtrain.png" />
            </SwiperSlide>
            <SwiperSlide>
                <Preview className="w-full h-full" href="https://github.com/mangadi3859/isla-mp3" imgsrc="/assets/isla-mp3.png" />
            </SwiperSlide>
            <SwiperSlide>
                <Preview className="w-full h-full" href="https://github.com/mangadi3859/doujin2" imgsrc="/assets/doujin-downloaderV2.png" />
            </SwiperSlide>
        </Swiper>
    );
}
