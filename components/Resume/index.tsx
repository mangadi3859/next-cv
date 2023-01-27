import Badge from "../Badge";
import { IServerProps } from "../../lib/utils";
import Skill from "./Skill";
import { Splide } from "@splidejs/react-splide";

export default function Resume({ katas, user }: IServerProps["codewars"] & { [k: string]: any }) {
    return (
        <div className="codewar__card  px-5 py-3" data-slide="down">
            <div className="card__nav mb-4 text-xl font-semibold">Codewars Stats</div>
            <div className="card_tabs" data-slide="right">
                <div className={`grid grid-cols-8 gap-6 items-center`}>
                    <div className="flex col-span-2 justify-center items-center flex-col rounded-md bg-white shadow-lg px-10 py-6">
                        <img src="https://avatars.githubusercontent.com/u/65892564?s=400" alt="avatar" className="aspect-square rounded-full overflow-hidden p-2 w-32 p-1 bg-neutral-400" />
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
                <div data-slide="up" className="codewar__solved-katas mt-4">
                    <div className="card__nav mb-4 text-xl font-semibold">Solved Katas</div>
                </div>
            </div>
        </div>
    );
}
