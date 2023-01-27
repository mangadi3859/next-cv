export default function ProgressBar({ value }: any) {
    return (
        <div className="skill__bar relative mt-4 w-36 h-2 rounded-full overflow-hidden">
            <div className="trail__bar absolute left-0 w-full rounded-full h-full bg-neutral-200"></div>
            <div className="point__bar absolute left-0 w-0 rounded-full h-full transition-all bg-primary-600" style={{ width: `${(value || 0) * 100}%` }}></div>
        </div>
    );
}
