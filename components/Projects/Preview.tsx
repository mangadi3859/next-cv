export default function Preview({ className, href, imgsrc }: any) {
    return (
        <a href={href} target="_blank" rel="noreferrer" className={`${className} cursor-pointer w-full brightness-50 hover:brightness-50 h-full`}>
            <img src={imgsrc} alt="project" className="object-cover rounded-lg overflow-hidden object-center w-full shadow-2xl h-full" />
        </a>
    );
}
