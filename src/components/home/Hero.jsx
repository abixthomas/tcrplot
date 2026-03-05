'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Search, MapPin, Home, Coins } from 'lucide-react';

// Custom physics-based Magnetic Search Button
function MagneticButton({ children, onClick }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.35, y: middleY * 0.35 });
    };

    const reset = () => setPosition({ x: 0, y: 0 });

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            onClick={onClick}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
                width: 64, height: 64, borderRadius: '50%',
                background: '#D33C29', color: '#fff',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: 'none', cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(211,60,41,0.4)',
                flexShrink: 0
            }}
        >
            {children}
        </motion.button>
    );
}

export default function Hero() {
    const containerRef = useRef(null);
    // Smooth scroll progress for parallax background
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const smoothParallax = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
    const yBg = useTransform(smoothParallax, [0, 1], ['0%', '30%']);

    const headlineText = "Discover the Pinnacle of Kerala's Legacy".split(" ");

    return (
        <section ref={containerRef} style={{ position: 'relative', height: '100vh', minHeight: 800, overflow: 'hidden', background: '#FFFFFF' }}>

            {/* Parallax Background Estate Image */}
            <motion.div style={{ position: 'absolute', inset: -50, top: 0, y: yBg, zIndex: 0 }}>
                <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=2000&auto=format&fit=crop"
                    alt="Premium Thrissur Villa"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </motion.div>

            {/* Strict Deep Marine Blue Tint */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(135deg, rgba(11,92,138,0.9) 0%, rgba(11,92,138,0.5) 100%)' }} />

            {/* Central Content */}
            <div className="container-site" style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom: 60 }}>

                {/* 1. Staggered Word-by-Word Massive Reveal */}
                <h1 style={{
                    fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                    fontSize: 'clamp(3rem, 7vw, 6.5rem)',
                    fontWeight: 800, color: '#FFFFFF',
                    lineHeight: 1.1, letterSpacing: '-0.03em',
                    textAlign: 'center',
                    display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '0 0.25em',
                    marginBottom: 32, maxWidth: 1200
                }}>
                    {headlineText.map((word, i) => (
                        <span key={i} style={{ overflow: 'hidden', paddingBottom: 8 }}>
                            <motion.span
                                initial={{ y: '120%', opacity: 0 }}
                                animate={{ y: '0%', opacity: 1 }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                style={{ display: 'inline-block' }}
                            >
                                {word === 'Pinnacle' ? <span style={{ color: '#D33C29' }}>{word}</span> : word}
                            </motion.span>
                        </span>
                    ))}
                </h1>

                {/* 2. Subtitle Fade In */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.8 }}
                    style={{ fontSize: 18, color: 'rgba(255,255,255,0.85)', maxWidth: 640, textAlign: 'center', lineHeight: 1.6, fontWeight: 400 }}
                >
                    Premium villas, exclusive plots, and architectural masterpieces situated in the cultural capital. Built to honor trust and elegance.
                </motion.p>
            </div>

            {/* 3. The Interactive Glassmorphism Search Panel */}
            <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.2, type: 'spring', stiffness: 50, damping: 20 }}
                className="absolute bottom-8 md:bottom-16 left-1/2 -translate-x-1/2 z-20 w-[92vw] max-w-[900px] bg-white/92 backdrop-blur-[24px] rounded-3xl md:rounded-[40px] p-6 pb-6 md:p-3 md:pl-10 shadow-[0_40px_80px_rgba(11,92,138,0.3)] flex flex-col md:flex-row items-center gap-6 md:gap-0"
            >
                {/* Search Options Data Wrapper */}
                <div className="flex-1 flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:pr-6">

                    {/* Location Field */}
                    <div className="flex-1 flex flex-row items-center border-b md:border-b-0 md:border-r border-gray-200 pb-3 md:pb-0 md:pr-4 w-full">
                        <MapPin size={20} className="text-[#0B5C8A] mr-4 drop-shadow-sm" style={{ strokeWidth: 2.5 }} />
                        <div className="flex flex-col flex-1">
                            <span className="text-[10px] font-extrabold text-[#D33C29] uppercase tracking-widest">Location</span>
                            <select className="w-full bg-transparent border-none outline-none text-[15px] font-bold text-gray-900 cursor-pointer appearance-none pt-1">
                                <option>Thrissur City</option>
                                <option>Punkunnam</option>
                                <option>Ollur</option>
                            </select>
                        </div>
                    </div>

                    {/* Property Type Field */}
                    <div className="flex-1 flex flex-row items-center border-b md:border-b-0 md:border-r border-gray-200 pb-3 md:pb-0 md:pr-4 w-full">
                        <Home size={20} className="text-[#0B5C8A] mr-4 drop-shadow-sm" style={{ strokeWidth: 2.5 }} />
                        <div className="flex flex-col flex-1">
                            <span className="text-[10px] font-extrabold text-[#D33C29] uppercase tracking-widest">Property Type</span>
                            <select className="w-full bg-transparent border-none outline-none text-[15px] font-bold text-gray-900 cursor-pointer appearance-none pt-1">
                                <option>Premium Villa</option>
                                <option>Residential Plot</option>
                                <option>Commercial Segment</option>
                            </select>
                        </div>
                    </div>

                    {/* Budget Field */}
                    <div className="flex-1 flex flex-row items-center w-full">
                        <Coins size={20} className="text-[#0B5C8A] mr-4 drop-shadow-sm" style={{ strokeWidth: 2.5 }} />
                        <div className="flex flex-col flex-1">
                            <span className="text-[10px] font-extrabold text-[#D33C29] uppercase tracking-widest">Budget Range</span>
                            <select className="w-full bg-transparent border-none outline-none text-[15px] font-bold text-gray-900 cursor-pointer appearance-none pt-1">
                                <option>₹50L - ₹1Cr</option>
                                <option>₹1Cr - ₹3Cr</option>
                                <option>₹3Cr+</option>
                            </select>
                        </div>
                    </div>

                </div>

                {/* Engaging Magnetic Orange Button */}
                <div className="w-full md:w-auto flex justify-center mt-2 md:mt-0">
                    <MagneticButton onClick={() => window.location.href = '/plots'}>
                        <Search size={24} style={{ strokeWidth: 3 }} />
                    </MagneticButton>
                </div>
            </motion.div>
        </section>
    );
}
