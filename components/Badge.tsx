export default function Badge({ title, className, style }: any) {
    return (
        <span style={style} className={`inline-block px-[.65em] truncate text-ellipsis overflow-hidden grow-0 rounded-md py-[.15em] font-medium text-[.65rem] text-black ${className}`}>
            <span>{title}</span>
        </span>
    );
}
