import ButtonAnchor from "../ButtonAnchor";

export default function ContentCard({ className, ...props }: any) {
    return (
        <div className={`card__content min-w-[80%] text-white bg-black bg-opacity-80 px-10 py-6 h-auto`} {...props}>
            <h1 className="text-6xl phone-lg:text-2xl font-bold mb-3 phone-lg:mb-1 border-b-8 phone-lg:border-b-2 inline-block border-primary-400">Hello</h1>
            <h2 className="text-2xl phone-lg:text-lg font-medium">Here's who i am & what i do.</h2>
            <div className="card__btn mt-6 phone-lg:mt-2 flex gap-4 justify-start items-center">
                <ButtonAnchor href="#resume" className="bg-primary-400 hover:bg-primary-200 hover:scale-105">
                    Resume
                </ButtonAnchor>
                <ButtonAnchor href="/project" className="border-white border hover:border-neutral-100 hover:scale-105">
                    Project
                </ButtonAnchor>
            </div>
            <p className="mt-12 text-md font-thin phone-lg:mt-4 pr-12 phone-lg:p-0">
                My name is <b>Komang Adi Wirawan</b>. Building a successful algorithm is a challenge for me. I am highly energetic in <b>Back End</b>, making bot or making algorithm is my specialities.
            </p>
            <p className="mt-4 text-md font-thin pr-12 phone-lg:p-0">I'm currently an intern in PT. Taksu Teknologi Indonesia. I'm extremely excited about working and would love to help!</p>
        </div>
    );
}
