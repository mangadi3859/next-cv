export default function Badge({ title, className }: any) {
    return <span className={`${className} px-3 py-1 text-black`}>{title}</span>;
}
