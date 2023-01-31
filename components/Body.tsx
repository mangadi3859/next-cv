export default function Body(props: any) {
    return (
        <div id="body" className={`m-0 p-0 ${props.className}`} style={props.style}>
            {props.children}
        </div>
    );
}
