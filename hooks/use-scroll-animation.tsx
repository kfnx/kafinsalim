'use client'
import { useEffect, useRef, useState } from "react";

type UseScrollAnimationOptions = {
    threshold?: number;
    rootMargin?: string;
    triggerOnce?: boolean;
};

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
    options: UseScrollAnimationOptions = {}
) {
    const {
        threshold = 0.1,
        rootMargin = "0px",
        triggerOnce = true,
    } = options;

    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleObserve = (entries: IntersectionObserverEntry[]) => {
            const [entry] = entries;
            if (entry.isIntersecting) {
                setIsVisible(true);
                if (triggerOnce) {
                    observer.unobserve(element);
                }
            } else if (!triggerOnce) {
                setIsVisible(false);
            }
        };

        const observer = new IntersectionObserver(handleObserve, { 
            threshold, 
            rootMargin 
        });

        // Small delay to ensure DOM is ready
        setTimeout(() => {
            observer.observe(element);
        }, 100);

        return () => {
            observer.unobserve(element);
        };
    }, [threshold, rootMargin, triggerOnce]);

    return { ref, isVisible };
} 