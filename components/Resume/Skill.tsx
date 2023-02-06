import { IServerProps } from "@/lib/utils";
import ProgressBar from "./ProgessBar";

// const RANK_REQUIREMENTS = [0, 20, 76, 229, 643, 1768, 4829, 13147, 35759, 97225];
const RANK_REQUIREMENTS = [97225, 35759, 13147, 4829, 1768, 643, 229, 76, 20, 0];

export default function Skill(props: { name: string; rank: IServerProps["codewars"]["user"]["ranks"]["languages"][""] } & {}) {
    let { rank, name } = props;
    let value = (rank.score - RANK_REQUIREMENTS[-rank.rank + 1]) / (RANK_REQUIREMENTS[-rank.rank] - RANK_REQUIREMENTS[-rank.rank + 1]);

    return (
        <div className="resume__skillset flex flex-col justify-start items-start content-between">
            <p className="w-full skill_lang font-normal text-lg relative pb-1 after:bg-primary-600 after:left-0 after:w-full after:absolute after:bottom-0 after:h-[2px] uppercase">{name}</p>
            <ProgressBar value={value} />
            <p className="skill_text mt-2 text-sm">
                {rank.name} - {rank.score}/{RANK_REQUIREMENTS[Math.abs(rank.rank)]} ({(value * 100).toFixed(1)}%)
            </p>
        </div>
    );
}
