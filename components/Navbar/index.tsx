import NavItem from "./NavItem";
import Hamburger from "./hamburger";
import { FaUserGraduate } from "react-icons/fa";
import { useState } from "react";

export default function Navbar({ items }: { items?: { href: string; name: string }[] }) {
    let [isNavOpen, setIsNavOpen] = useState(false);

    function handleHamburger(e: any) {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <nav className="sticky top-0 left-0 w-full bg-white z-[1000] border-b shadow-sm isolate">
            <div className="container h-16 px-4 relative py-2 flex justify-between isolate items-center">
                <p className="m-0 p-0 font-medium text-2xl tracking-[.15em] block">
                    <FaUserGraduate className="inline text-primary" /> ISLA
                </p>

                <div className={`nav__items justify-center gap-1 flex phone:shadow-md phone:absolute phone:bottom-0 phone:items-center phone:left-0 phone:right-0 phone:flex-col phone:bg-white transition-all phone:z-[-1] phone:px-4 phone:pb-6 ${isNavOpen ? "translate-y-full phone:opacity-100 " : "phone:opacity-0"}`}>
                    {!items?.length ? (
                        <>
                            <NavItem href="#hero">About</NavItem>
                            <NavItem href="/project">Project</NavItem>
                            <NavItem href="#resume">Resume</NavItem>
                            <NavItem href="#contact">Contact</NavItem>
                        </>
                    ) : (
                        items?.map((e) => (
                            <NavItem key={e.href} href={e.href}>
                                {e.name}
                            </NavItem>
                        ))
                    )}
                </div>

                <Hamburger state={isNavOpen} onClick={handleHamburger} className="hidden group phone:flex" />
            </div>
        </nav>
    );
}
