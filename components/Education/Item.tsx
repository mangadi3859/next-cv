export default function Item({ year, title, children, circleClass }: any) {
    return (
        <div className="flex justify-start gap-6 phone:gap-3 pb-20 relative isolate group/items overflow-hidden">
            <div
                className={
                    "year__info bg-primary-400 text-white text-xl phone:text-lg font-semibold p-[2.1rem] aspect-square rounded-full h-min grid place-items-center relative after:absolute after:bg-primary-400 after:-translate-x-1/2 after:z-[-1] after:top-1/2 after:left-1/2 after:w-[.4rem] after:h-screen group-last/items:after:hidden " + circleClass
                }
            >
                <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">{year}</p>
            </div>
            <div className="content" data-slide="left">
                <h2 className="text-2xl phone:text-xl font-bold mb-2 text-primary-400">{title}</h2>
                <div className="font-base phone:text-sm w-full">{children}</div>
            </div>
        </div>
    );
}
