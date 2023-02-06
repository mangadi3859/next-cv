import { FaInstagram, FaGithub } from "react-icons/fa";

export default function AboutCard({ className, ...props }: any) {
    return (
        <div className={`card__avatar p-6 flex flex-col aspect-[3/5] phone:aspect-auto phone:h-full w-full bg-primary-950 justify-start items-center ${className}`} {...props}>
            {/* <img src="/assets/avatar.jpg" alt="avatar" className="rounded-full aspect-square mb-6" /> */}
            <img src="/assets/avatar-2.jpg" alt="avatar" className="phone:max-w-[12rem] border-[5px] border-white phone:w-3/4 rounded-full aspect-square mb-6" />
            <p className="text-xl phone-lg:text-lg phone-lg:text-normal phone:text-xl font-bold">ISLA</p>
            <p className="text-base phone-lg:text-sm font-medium phone:text-lg phone:font-light">Komang Adi Wirawan</p>
            <div className="bg-primary-400 w-8 h-[.175rem] my-auto phone:my-4"></div>
            <p className="font-light tracking-[.065rem] text-base phone-lg:text-xs phone:text-base">PROJECT PORTFOLIO</p>
            <div className="card__links w-full flex justify-center items-center mt-4 text-2xl gap-4">
                <a href="https://github.com/mangadi3859" title="Github" target="_blank" rel="noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/mangadi3859/" title="Instagram" target="_blank" rel="noreferrer">
                    <FaInstagram />
                </a>
            </div>
        </div>
    );
}
