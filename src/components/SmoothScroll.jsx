'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function SmoothScroll({ children }) {
    const lenisRef = useRef(null);
    const pathname = usePathname();

    useEffect(() => {
        let rafId = null;

        const init = async () => {
            try {
                const { default: Lenis } = await import('lenis');
                lenisRef.current = new Lenis({
                    duration: 1.2,
                    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    smoothWheel: true,
                    wheelMultiplier: 1
                });
                const raf = (time) => {
                    lenisRef.current?.raf(time);
                    rafId = requestAnimationFrame(raf);
                };
                rafId = requestAnimationFrame(raf);
            } catch {
                // fallback
            }
        };

        init();

        return () => {
            if (rafId) cancelAnimationFrame(rafId);
            if (lenisRef.current) lenisRef.current.destroy();
        };
    }, []);

    useEffect(() => {
        if (lenisRef.current) {
            lenisRef.current.scrollTo(0, { immediate: true });
        }
    }, [pathname]);

    return <>{children}</>;
}
