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
                style={{
                    position: 'absolute', bottom: 60, left: '50%', transform: 'translateX(-50%)', zIndex: 20,
                    width: 'min(90vw, 900px)',
                    background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(24px)',
                    borderRadius: 40, padding: '12px 12px 12px 40px',
                    boxShadow: '0 40px 80px rgba(11,92,138,0.3)',
                    display: 'flex', alignItems: 'center'
                }}
            >
                {/* Search Options Data Wrapper */}
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 24, paddingRight: 24 }} className="search-fields-wrapper">

                    {/* Location Field */}
                    <div className="search-field" style={{ flex: 1, display: 'flex', alignItems: 'center', borderRight: '1px solid #E5E7EB', paddingRight: 16 }}>
                        <MapPin size={20} style={{ color: '#0B5C8A', marginRight: 16, strokeWidth: 2.5 }} />
                        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <span style={{ fontSize: 10, fontWeight: 800, color: '#D33C29', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Location</span>
                            <select style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', fontSize: 15, fontWeight: 700, color: '#111827', cursor: 'pointer', appearance: 'none', padding: '4px 0 0 0' }}>
                                <option>Thrissur City</option>
                                <option>Punkunnam</option>
                                <option>Ollur</option>
                            </select>
                        </div>
                    </div>

                    {/* Property Type Field */}
                    <div className="search-field" style={{ flex: 1, display: 'flex', alignItems: 'center', borderRight: '1px solid #E5E7EB', paddingRight: 16 }}>
                        <Home size={20} style={{ color: '#0B5C8A', marginRight: 16, strokeWidth: 2.5 }} />
                        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <span style={{ fontSize: 10, fontWeight: 800, color: '#D33C29', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Property Type</span>
                            <select style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', fontSize: 15, fontWeight: 700, color: '#111827', cursor: 'pointer', appearance: 'none', padding: '4px 0 0 0' }}>
                                <option>Premium Villa</option>
                                <option>Residential Plot</option>
                                <option>Commercial Segment</option>
                            </select>
                        </div>
                    </div>

                    {/* Budget Field */}
                    <div className="search-field" style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                        <Coins size={20} style={{ color: '#0B5C8A', marginRight: 16, strokeWidth: 2.5 }} />
                        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <span style={{ fontSize: 10, fontWeight: 800, color: '#D33C29', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Budget Range</span>
                            <select style={{ width: '100%', background: 'transparent', border: 'none', outline: 'none', fontSize: 15, fontWeight: 700, color: '#111827', cursor: 'pointer', appearance: 'none', padding: '4px 0 0 0' }}>
                                <option>₹50L - ₹1Cr</option>
                                <option>₹1Cr - ₹3Cr</option>
                                <option>₹3Cr+</option>
                            </select>
                        </div>
                    </div>

                </div>

                {/* Engaging Magnetic Orange Button */}
                <MagneticButton onClick={() => window.location.href = '/plots'}>
                    <Search size={24} style={{ strokeWidth: 3 }} />
                </MagneticButton>
            </motion.div>

            <style>{`
                @media (max-width: 900px) {
                    section > div:nth-child(4) { 
                        flex-direction: column !important; 
                        border-radius: 24px !important;
                        padding: 24px !important;
                        gap: 24px !important;
                        bottom: 30px !important;
                    }
                    .search-fields-wrapper { 
                        flex-direction: column !important; 
                        width: 100% !important; 
                        padding-right: 0 !important;
                        gap: 16px !important;
                    }
                    .search-field {
                        width: 100% !important;
                        border-right: none !important;
                        border-bottom: 1px solid #E5E7EB !important;
                        padding-bottom: 12px !important;
                        padding-right: 0 !important;
                    }
                    .search-field:last-child {
                        border-bottom: none !important;
                        padding-bottom: 0 !important;
                    }
                }
            `}</style>
        </section>
    );
}
