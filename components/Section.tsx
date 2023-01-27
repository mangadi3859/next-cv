export default function Section({ name, style, className, children, ...props }: any) {
    return (
        <section className={`${className} p-6 w-full`}>
            <div className="container">
                <div className="section__heading mb-10 relative w-full grid place-items-center" data-slide="up">
                    <h1 className="text-3xl font-bold tracking-[2px] uppercase relative after:absolute after:left-[-2rem] after:right-[-2rem] after:bottom-[-.5rem] after:h-2 after:bg-primary-200">{name}</h1>
                </div>
                {children}
            </div>
        </section>
    );
}
