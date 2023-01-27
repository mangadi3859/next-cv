export default function FormInput(props: JSX.IntrinsicElements["input"]) {
    return <input {...props} className={`${props.className} w-full px-3 py-2 border-2 border-neutral-300 transition-all duration-100 focus:border-primary-400 outline-none text-neutral-600 invalid:border-red-500`} />;
}
