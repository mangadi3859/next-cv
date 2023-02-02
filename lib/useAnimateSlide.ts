import { useEffect } from "react";
import isClientReady from "./isClientReady";

export default function useAnimateSlide() {
    function handler(entries: IntersectionObserverEntry[]) {
        entries.forEach((e) => {
            if (!e.isIntersecting) return e.target.classList.remove("i-open");
            e.target.classList.add("i:open");
            if ("animate" in (<any>e.target).dataset) e.target.classList.add("i-open");
        });
    }

    useEffect(() => {
        if (!isClientReady()) return;
        let observer: IntersectionObserver;
        let slides = document.querySelectorAll("[data-slide], [data-animate]");

        observer = new IntersectionObserver(handler, { threshold: 0.25 });

        slides?.forEach((e) => observer.observe(e));

        return () => observer?.disconnect();
    });
}
