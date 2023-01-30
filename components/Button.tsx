import { forwardRef } from "react";

export default forwardRef((props: any, ref: any) => {
    const { children, className, styles, ...opts } = props;

    return (
        <button ref={ref} className={`button ${className}`} style={opts} {...opts}>
            {children}
        </button>
    );
});
