import Item from "./Item";
import { CircleFour, CircleTwo } from "../Circle";

export default function Education() {
    return (
        <div data-animate className="education__list flex phone:flex-col gap-10 relative group/animate isolate justify-between items-start mt-[5rem]">
            <div className="circle-decoration scale-0 group-[&.i-open]/animate:scale-100 bg-orange-300 opacity-20"></div>
            <CircleFour className="transition-all duration-1000 delay-500 scale-0 group-[&.i-open]/animate:scale-100" />
            <CircleTwo className="transition-all duration-1000 delay-500 scale-0 group-[&.i-open]/animate:scale-100" />

            <div className="flex-col items-start w-1/2 phone:w-full">
                <Item year="General" circleClass="text-xs phone:text-[.65rem]" title="General Experience">
                    My general experience in Programing world.
                </Item>
                <Item year="2019" title="Introduction To Coding">
                    While the world is currently facing a virus and force people to be home i spend time by trying to code by curiousity.
                </Item>
                <Item year="2019" title="Trying NodeJS">
                    I finally found{" "}
                    <a href="https://nodejs.org" className="link text-primary-200">
                        NodeJs
                    </a>{" "}
                    and extremely interested on it. My first program with NodeJs is Discord Bot.
                </Item>
                <Item year="2022" title="PNB IT Competition">
                    I chosen by my school to attend PNB IT Competition as front end website development.
                </Item>
            </div>
            <div className="flex-col items-start w-1/2 phone:w-full">
                <Item year="Education" circleClass="text-xs phone:text-[.65rem]" title="Education Experience">
                    My experience in school in general.
                </Item>
                <Item year="2012" title="SD N 11 SUMERTA">
                    School located in East of Denpasar, i spent 6 years learning basics there.
                </Item>
                <Item year="2018" title="SMP Nasional Denpasar">
                    Located in Jl. Tukad Yeh Aya N0. 15 A, Panjer, Kec. Denpasar Selatan, Kota Denpasar. i spent another 3 years learning here about &quot;Neccessary&quot; stuff.
                </Item>
                <Item year="2021" title="SMK TI Bali Global Denpasar">
                    This is the school when i actually like studying.
                </Item>
            </div>
        </div>
    );
}
