export default function ButtonAnchor({ href, children, className, styles, ...opts }: any) {
    return (
        <a href={href} className={`button ${className}`} style={opts} {...opts}>
            {children}
        </a>
    );
}
