export default function Badge({ title, className, style }: any) {
    return (
        <span style={style} className={`inline-block px-4 h-[2em] grow-0 rounded-md py-1 font-medium text-[.65rem] text-black ${className}`}>
            <span>{title}</span>
        </span>
    );
}
