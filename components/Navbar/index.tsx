import NavItem from "./NavItem";
import { FaUserGraduate } from "react-icons/fa";

export default function Navbar() {
    return (
        <nav className="sticky top-0 left-0 w-full bg-white z-[1000] border-b shadow-sm">
            <div className="container h-16 px-4 py-2 flex justify-between items-center">
                <p className="m-0 p-0 font-medium text-2xl tracking-[.15em] block">
                    <FaUserGraduate className="inline text-primary" /> ISLA
                </p>

                <div className="NavItems flex justify-center gap-1">
                    <NavItem href="#hero">About</NavItem>
                    <NavItem href="/project">Project</NavItem>
                    <NavItem href="#resume">Resume</NavItem>
                    <NavItem href="#contact">Contact</NavItem>
                </div>
            </div>
        </nav>
    );
}
