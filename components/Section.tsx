export default function Section({ name, style, className, children, ...props }: any) {
    return (
        <section className={`${className} p-6 w-full`}>
            <div className="container">
                <div className="section__heading mb-10 relative" data-slide="right">
                    <h1 className="text-3xl font-bold tracking-[2px] uppercase relative after:absolute after:left-0 after:w-32 after:bottom-[-.5rem] after:h-2 after:bg-primary-200">{name}</h1>
                </div>
                {children}
            </div>
        </section>
    );
}
