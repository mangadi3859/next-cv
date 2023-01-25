export default function Button({ children, className, styles, ...opts }: any) {
    return (
        <button className={`button ${className}`} style={opts} {...opts}>
            {children}
        </button>
    );
}
