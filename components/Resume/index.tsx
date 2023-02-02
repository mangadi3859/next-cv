import Badge from "../Badge";
import { IServerProps } from "../../lib/utils";
import Skill from "./Skill";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay, Navigation, Pagination } from "swiper";
import { WaveSeparator, CircleThree } from "../Circle";
import KataCard from "./KataCard";

export default function Resume({ katas, user, katasInfo }: IServerProps["codewars"] & { [k: string]: any }) {
    return (
        <div className="codewar__card py-3" data-slide="down">
            <div className="card__nav mb-4 text-xl font-semibold phone:text-lg phone:text-center">Codewars Stats</div>
            <div className="card_tabs" data-slide="right">
                <div className={`grid grid-cols-8 gap-6 items-center phone:grid-cols-1 phone:row-auto`}>
                    <div data-animate className="flex relative group/animate isolate col-span-2 phone:col-span-1 justify-center items-center flex-col rounded-md bg-white shadow-lg px-10 py-6">
                        <WaveSeparator className="transition-all duration-1000 delay-500 origin-bottom scale-y-0 group-[&.i-open]/animate:scale-y-100" />
                        <img src="/assets/avatar-2.jpg" alt="avatar" className="aspect-square rounded-full overflow-hidden w-32 p-1 bg-neutral-400" />
                        <p className="mt-2 text-xl font-semibold">{user.name}</p>
                        <p className="text-xs text-gray-700">
                            {user.ranks.overall.name} - {user.honor} Honors
                        </p>
                    </div>
                    <div data-slide="left" data-animate className="card__tabs group/animate relative isolate flex col-span-6 phone:col-span-1 justify-start phone:justify-between phone:items-center phone:content-center gap-4 items-start flex-grow flex-wrap bg-white shadow-lg px-10 py-6 h-full overflow-hidden">
                        <CircleThree className="transition-all duration-1000 delay-500 scale-0 group-[&.i-open]/animate:scale-100" />
                        {Object.keys(user.ranks.languages).map((e) => {
                            return <Skill key={e} name={e} rank={user.ranks.languages[e]} />;
                        })}
                    </div>
                </div>
                <div data-slide="up" className="codewar__solved-katas mt-20 relative isolate">
                    <div className="card__nav my-4 text-xl font-semibold phone:text-lg phone:text-center">Solved Katas</div>
                    <Swiper data-slide="down" spaceBetween={50} autoplay={{ delay: 5000 }} pagination={{ enabled: true, clickable: true }} speed={300} navigation={true} modules={[EffectCards, Navigation, Autoplay, Pagination]} slidesPerView="auto" className="mx-auto w-1/2 phone:mb-12 phone:w-full overflow-visible phone:px-4 aspect-[3/2]">
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
