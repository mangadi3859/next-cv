import { forwardRef } from "react";

const FormInput = forwardRef((props: JSX.IntrinsicElements["input"] & { divClass?: string; errormessage?: string }, ref: any) => {
    return (
        <div className={`${props.divClass} group w-full`}>
            <input {...props} ref={ref} className={`${props.className} w-full px-3 py-2 border-2 border-neutral-300 transition-all duration-100 focus:border-primary-400 outline-none text-neutral-600  [&:not(:placeholder-shown):invalid]:border-red-500`} />
            <p className="group-[:has(input:not(:placeholder-shown):invalid)]:block hidden text-red-500 text-sm font-light bg-red-500 bg-opacity-[.1] opacity-75 py-1 px-2 border mt-1 rounded-sm border-red-500">{props.errormessage || "Invalid"}</p>
        </div>
    );
});

FormInput.displayName = "FormInput";

export default FormInput;
