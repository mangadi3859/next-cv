export default function Badge({ title, className }: any) {
    return <span className={`${className} px-4 rounded-md py-1 text-sm border text-black`}>{title}</span>;
}
