import { useEffect } from "react";
import isClientReady from "./isClientReady";

export default function animateSlide() {
    if (isClientReady()) {
        useEffect(() => {
            let observer: IntersectionObserver;
            let slides = document.querySelectorAll("[data-slide], [data-animate]");

            observer = new IntersectionObserver(
                (entries) =>
                    entries.forEach((e) => {
                        // if (!e.isIntersecting) return e.target.classList.remove("i:open");
                        if (!e.isIntersecting) return;
                        e.target.classList.add("i:open");

                        if ("animate" in (<any>e.target).dataset) e.target.classList.add("i-open");
                        // observer.unobserve(e.target);
                    }),
                {
                    threshold: 0.2,
                },
            );

            slides?.forEach((e) => observer.observe(e));

            return () => observer?.disconnect();
        });
    }
}
