export default function Section({ name, style, className, children, ...props }: any) {
    return (
        <section className={`${className} py-6 px-4 w-full`} {...props}>
            <div className="container">
                <div className="section__heading mb-10 relative w-full grid place-items-center" data-slide="up">
                    <h1 className="text-3xl phone:text-xl font-bold tracking-[2px] uppercase relative after:absolute after:left-[-2rem] phone:after:left-[-1rem] after:right-[-2rem] phone:after:right-[-1rem] after:bottom-[-.5rem] phone:after:bottom-[-.25rem] after:h-2 phone:after:h-1 text-black after:bg-primary-200">{name}</h1>
                </div>
                {children}
            </div>
        </section>
    );
}
