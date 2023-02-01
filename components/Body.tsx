import { Poppins } from "@next/font/google";
const poppins = Poppins({ weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], subsets: ["latin"] });

export default function Body(props: any) {
    return (
        <div id="body" className={`${poppins.className} relative m-0 p-0 overflow-hidden ${props.className}`} style={props.style}>
            {props.children}
        </div>
    );
}
