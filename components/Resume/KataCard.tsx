import { IKataInfo } from "../../lib/getKata";
import { IServerProps } from "../../lib/utils";
import moment from "moment";
import Badge from "../Badge";
import ButtonAnchor from "../ButtonAnchor";
import { FaArrowRight } from "react-icons/fa";

export default function KataCard({ kata, solved }: { kata: IKataInfo; solved?: IServerProps["codewars"]["katas"]["data"][0] }) {
    return (
        <div className="px-8 py-6 kata_card aspect-[3/2] max-w-[30rem] w-full rounded-md shadow-lg bg-secondary-200 flex flex-col relative isolate after:absolute after:left-0 after:w-full after:bottom-0 after:h-full after:z-[-1] after:bg-gradient-to-tl after:from-transparent after:to-black after: after:opacity-50">
            <h2 className="text-white text-xl font-semibold mb-[-4px] phone-lg:text-base">{kata.name.length > 40 ? kata.name.slice(0, 40) + "..." : kata.name}</h2>
            <div className="flex gap-4">
                <p className="text-white text-xs font-light ">
                    {moment(kata.publishedAt).fromNow()} - By{" "}
                    <a href={kata.createdBy?.url} title="Check the author" className="font-normal link underline">
                        {kata.createdBy?.username || <i>Unknown User</i>}
                    </a>
                </p>
                <p className="text-white text-xs font-light">
                    Completed <span className="font-medium">{moment(solved?.completedAt).fromNow()}</span>
                </p>
            </div>
            <div className="tag_badge flex justify-start items-start gap-1 mt-2 overflow-y-hidden">
                <Badge title={kata.rank.name} className="filter phone-lg:text-xs capitalize contrast-75 brightness-[90%]" style={{ backgroundColor: kata.rank.color }} />
                {kata.tags.map((e) => {
                    return <Badge title={e} className="capitalize bg-neutral-300" key={e} />;
                })}
            </div>
            <div className="overflow-hidden opacity-75 description mt-4 text-white font-light phone-lg:text-sm max-w-full">{kata.description.length > 230 ? kata.description.slice(0, 230) + "..." : kata.description.length}</div>
            <ButtonAnchor target="_blank" title="See the kata" href={kata.url} className="text-black mr-auto mt-auto font-medium bg-white hover:bg-neutral-200 hover:scale-105 flex items-center phone-lg:text-xs gap-2">
                Read More <FaArrowRight />
            </ButtonAnchor>
        </div>
    );
}
