'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Play } from 'lucide-react';

export default function ThrissurVideo() {
    const containerRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 900);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Track scroll over a 300vh sticky area
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end']
    });

    // Smooth out the scroll physics
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });

    // ── Phase 1: Video expands from RHS card to full 100vw x 100vh ──
    const clipStart = isMobile
        ? 'inset(55% 5% 5% 5% round 24px)'
        : 'inset(10% 5% 10% 45% round 24px)';

    // Shrink inset to 0
    const clipPath = useTransform(smoothProgress, [0, 0.4], [clipStart, 'inset(0% 0% 0% 0% round 0px)']);

    // ── Phase 1 Content (Text on Left) Fades Out ──
    const textOpacity = useTransform(smoothProgress, [0, 0.25], [1, 0]);
    const textX = useTransform(smoothProgress, [0, 0.25], [0, -40]);

    // ── Phase 2: Overlay Dark Tint comes in once full screen ──
    const tintOpacity = useTransform(smoothProgress, [0.4, 0.6], [0, 0.6]);

    // ── Phase 3: Climax Quote and Play Button appear ──
    const contentOpacity = useTransform(smoothProgress, [0.6, 0.8], [0, 1]);
    const contentY = useTransform(smoothProgress, [0.6, 0.8], [40, 0]);

    return (
        <section ref={containerRef} style={{ height: '300vh', background: '#FFFFFF', position: 'relative' }}>

            {/* The sticky viewport playing area */}
            <div style={{ position: 'sticky', top: 0, height: '100vh', width: '100%', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>

                {/* 1. Initial Left-Side Typography */}
                <motion.div
                    style={{
                        position: 'absolute',
                        left: isMobile ? '5%' : '8%',
                        top: isMobile ? '10%' : 'auto',
                        width: isMobile ? '90%' : '35%',
                        textAlign: isMobile ? 'center' : 'left',
                        opacity: textOpacity, x: textX, zIndex: 1
                    }}
                    className="flex flex-col items-center md:items-start"
                >
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
                        <span style={{ width: 14, height: 2, background: '#D33C29' }} />
                        <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D33C29' }}>The Cultural Capital</span>
                    </div>
                    <h2 style={{
                        fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                        fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                        fontWeight: 800, color: '#0B5C8A',
                        lineHeight: 1.05, letterSpacing: '-0.03em',
                        marginBottom: 32
                    }}>
                        A Legacy <br />of Trust.
                    </h2>
                    <p style={{ fontSize: 16, color: 'rgba(11,92,138,0.7)', lineHeight: 1.7, maxWidth: 400 }}>
                        Witness the seamless blend of traditional architectural values with cutting-edge infrastructure. Thrissur is rapidly emerging as Kerala’s most sought-after smart city destination for premium living.
                    </p>
                </motion.div>

                {/* 2. The Extending Background Image Element */}
                <motion.div
                    style={{
                        position: 'absolute', inset: 0, zIndex: 10,
                        WebkitClipPath: clipPath,
                        clipPath: clipPath
                    }}
                >
                    <video
                        autoPlay muted loop playsInline
                        poster="/images/plots/plot1.jpg"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    >
                        <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
                    </video>

                    {/* Dark Tint covering the video to make final text readable */}
                    <motion.div
                        style={{ position: 'absolute', inset: 0, background: '#0B5C8A', opacity: tintOpacity, pointerEvents: 'none' }}
                    />

                    {/* 3. POST-EXPANSION OVERLAY CONTENT */}
                    <motion.div
                        style={{
                            position: 'absolute', inset: 0,
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            opacity: contentOpacity, y: contentY,
                            padding: '0 20px', textAlign: 'center', pointerEvents: 'auto'
                        }}
                    >
                        {/* Interactive Play Button */}
                        <motion.button
                            whileHover={{ scale: 1.1, background: 'rgba(211,60,41,1)', borderColor: 'rgba(211,60,41,1)' }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                width: 90, height: 90, borderRadius: '50%',
                                background: 'rgba(211,60,41,0.9)', backdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255,255,255,0.3)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: 40, cursor: 'pointer',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.3)', transition: 'background 0.3s, border-color 0.3s'
                            }}
                        >
                            <Play size={32} fill="#fff" color="#fff" style={{ marginLeft: 6 }} />
                        </motion.button>

                        <div style={{ fontSize: 13, fontWeight: 800, color: '#FFFFFF', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 20 }}>
                            Short Film
                        </div>
                        <h3 style={{
                            fontFamily: '"Plus Jakarta Sans", system-ui, sans-serif',
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            fontWeight: 700, color: '#fff',
                            lineHeight: 1.1, letterSpacing: '-0.02em',
                            maxWidth: 800, textShadow: '0 4px 24px rgba(0,0,0,0.6)'
                        }}>
                            "Our legacy is not just built on land, it is woven into culture."
                        </h3>
                    </motion.div>
                </motion.div>

                {/* Constant Scroll Indicator at Bottom Left */}
                <div style={{ position: 'absolute', bottom: 40, left: '8%', display: 'flex', alignItems: 'center', gap: 16, zIndex: 1, pointerEvents: 'none' }}>
                    <div style={{ fontSize: 10, fontWeight: 700, color: 'rgba(11,92,138,0.5)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Scroll</div>
                    <div style={{ width: 40, height: 1, background: 'rgba(11,92,138,0.2)', position: 'relative', overflow: 'hidden' }}>
                        <motion.div
                            animate={{ x: [-40, 40] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                            style={{ position: 'absolute', top: 0, left: 0, width: 20, height: 1, background: '#0B5C8A' }}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
