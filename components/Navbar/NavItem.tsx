export default function NavItem({ href, children }: any = {}) {
    return (
        <a href={href} className="px-4 py-1 trasition rounded-full duration-200 hover:bg-primary hover:text-white">
            {children}
        </a>
    );
}
