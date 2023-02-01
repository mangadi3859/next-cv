import { forwardRef } from "react";

const Button = forwardRef((props: any, ref: any) => {
    const { children, className, styles, ...opts } = props;

    return (
        <button ref={ref} className={`button ${className}`} style={opts} {...opts}>
            {children}
        </button>
    );
});

Button.displayName = "Button";

export default Button;
