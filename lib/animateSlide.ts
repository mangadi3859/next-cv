import { useEffect } from "react";
import isClientReady from "./isClientReady";

export default function animateSlide() {
    function handler(entries: IntersectionObserverEntry[]) {
        entries.forEach((e) => {
            if (!e.isIntersecting) return;
            e.target.classList.add("i:open");

            if ("animate" in (<any>e.target).dataset) e.target.classList.add("i-open");
        });
    }

    useEffect(() => {
        if (!isClientReady()) return;
        let observer: IntersectionObserver;
        let slides = document.querySelectorAll("[data-slide], [data-animate]");

        observer = new IntersectionObserver(handler);

        slides?.forEach((e) => observer.observe(e));

        return () => observer?.disconnect();
    });
}
