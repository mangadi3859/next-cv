import Badge from "../Badge";
import { IServerProps } from "../../lib/utils";
import Skill from "./Skill";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Navigation, Pagination } from "swiper";
import KataCard from "./KataCard";

export default function Resume({ katas, user, katasInfo }: IServerProps["codewars"] & { [k: string]: any }) {
    return (
        <div className="codewar__card py-3" data-slide="down">
            <div className="card__nav mb-4 text-xl font-semibold phone:text-lg phone:text-center">Codewars Stats</div>
            <div className="card_tabs" data-slide="right">
                <div className={`grid grid-cols-8 gap-6 items-center phone:grid-cols-1 phone:row-auto`}>
                    <div className="flex col-span-2 phone:col-span-1 justify-center items-center flex-col rounded-md bg-white shadow-lg px-10 py-6">
                        {/* <img src="https://avatars.githubusercontent.com/u/65892564?s=400" alt="avatar" className="aspect-square rounded-full overflow-hidden p-2 w-32 p-1 bg-neutral-400" /> */}
                        <img src="/assets/avatar-2.jpg" alt="avatar" className="aspect-square rounded-full overflow-hidden w-32 p-1 bg-neutral-400" />
                        <p className="mt-2 text-xl font-semibold">{user.name}</p>
                        <p className="text-xs text-gray-700">
                            {user.ranks.overall.name} - {user.honor} Honors
                        </p>
                    </div>
                    <div data-slide="left" data-animate className="card__tabs relative isolate flex col-span-6 group phone:col-span-1 justify-start phone:justify-between phone:items-center phone:content-center gap-4 items-start flex-grow flex-wrap bg-white shadow-lg px-10 py-6 h-full overflow-hidden">
                        <div className="circle transition-all duration-500 scale-0 delay-300 group-[&.i-open]:scale-100 rounded-full opacity-30 translate-x-1/2 -translate-y-1/2 aspect-square w-3/4 bg-secondary-700 phone:bg-secondary-500 phone:opacity-20 absolute top-0 right-0 z-[-1]"></div>
                        <div className="circle transition-all duration-500 scale-0 delay-300 group-[&.i-open]:scale-100 rounded-full opacity-30 -translate-x-1/2 translate-y-[5rem] phone:translate-y-[2rem] aspect-square w-1/3 bg-orange-300 phone:bg-orange-500 phone:opacity-20 absolute bottom-0 left-0 z-[-1]"></div>
                        {Object.keys(user.ranks.languages).map((e) => {
                            return <Skill key={e} name={e} rank={user.ranks.languages[e]} />;
                        })}
                    </div>
                </div>
                <div data-slide="up" className="codewar__solved-katas mt-20 relative isolate">
                    <div className="card__nav my-4 text-xl font-semibold phone:text-lg phone:text-center">Solved Katas</div>
                    <Swiper data-slide="down" effect="cards" autoplay={{ delay: 5000 }} pagination={{ enabled: true, clickable: true }} speed={300} navigation={true} modules={[EffectCards, Navigation, Autoplay, Pagination]} slidesPerView="auto" className="mx-auto w-1/2 phone:mb-12 phone:w-full phone:px-4 aspect-[3/2]">
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
