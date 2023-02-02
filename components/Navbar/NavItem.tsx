export default function NavItem({ href, children }: any = {}) {
    return (
        <a href={href} className="px-4 py-1 phone:w-full trasition rounded-full duration-200 hover:bg-primary phone:text-md hover:text-white text-center">
            {children}
        </a>
    );
}
