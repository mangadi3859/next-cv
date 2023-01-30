import Badge from "../Badge";
import { IServerProps } from "../../lib/utils";
import Skill from "./Skill";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Navigation, Pagination } from "swiper";
import KataCard from "./KataCard";

export default function Resume({ katas, user, katasInfo }: IServerProps["codewars"] & { [k: string]: any }) {
    return (
        <div className="codewar__card px-5 py-3" data-slide="down">
            <div className="card__nav mb-4 text-xl font-semibold">Codewars Stats</div>
            <div className="card_tabs" data-slide="right">
                <div className={`grid grid-cols-8 gap-6 items-center`}>
                    <div className="flex col-span-2 justify-center items-center flex-col rounded-md bg-white shadow-lg px-10 py-6">
                        {/* <img src="https://avatars.githubusercontent.com/u/65892564?s=400" alt="avatar" className="aspect-square rounded-full overflow-hidden p-2 w-32 p-1 bg-neutral-400" /> */}
                        <img src="/assets/avatar-2.jpg" alt="avatar" className="aspect-square rounded-full overflow-hidden w-32 p-1 bg-neutral-400" />
                        <p className="mt-2 text-xl font-semibold">{user.name}</p>
                        <p className="text-xs text-gray-700">
                            {user.ranks.overall.name} - {user.honor} Honors
                        </p>
                    </div>
                    <div data-slide="left" className="card__tabs flex col-span-6 justify-start gap-4 items-start flex-grow flex-wrap bg-white shadow-lg px-10 py-6 h-full">
                        {Object.keys(user.ranks.languages).map((e) => {
                            return <Skill key={e} name={e} rank={user.ranks.languages[e]} />;
                        })}
                    </div>
                </div>
                <div data-slide="up" className="codewar__solved-katas mt-20">
                    <div className="card__nav my-4 text-xl font-semibold">Solved Katas</div>
                    <Swiper data-slide="down" effect="cards" autoplay={{ delay: 5000 }} pagination={{ enabled: true, clickable: true }} speed={300} navigation={true} modules={[EffectCards, Navigation, Autoplay, Pagination]} slidesPerView="auto" className="mySwiper mx-auto w-1/2 aspect-[3/2]">
                        {katasInfo
                            .sort((a, b) => b.rank.id - a.rank.id)
                            .map((e) => {
                                return (
                                    <SwiperSlide className="cursor-grab" key={e.id}>
                                        <KataCard solved={katas.data.find((el) => el.id == e.id)} kata={e} />
                                    </SwiperSlide>
                                );
                            })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
