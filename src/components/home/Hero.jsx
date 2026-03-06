'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Search, MapPin, Home, Coins, ShieldCheck, ArrowRight } from 'lucide-react';

// Custom physics-based Magnetic Search Button (Desktop Only)
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
            className="w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center border-none cursor-pointer shrink-0 z-10 relative overflow-hidden group shadow-[0_10px_30px_rgba(211,60,41,0.4)]"
            style={{ background: '#D33C29', color: '#FFFFFF' }}
        >
            <motion.div
                className="absolute inset-0 bg-white/20 origin-bottom"
                initial={{ scaleY: 0 }}
                whileHover={{ scaleY: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
            />
            <span className="relative z-10">{children}</span>
        </motion.button>
    );
}

// Cinematic Staggered text animations
const textContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
};

const textItem = {
    hidden: { y: "100%", opacity: 0 },
    show: {
        y: "0%",
        opacity: 1,
        transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
};

export default function Hero() {
    const containerRef = useRef(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    // Smooth Parallax
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const smoothScroll = useSpring(scrollYProgress, { stiffness: 30, damping: 20 });
    const imageY = useTransform(smoothScroll, [0, 1], ['0%', '15%']);
    const textY = useTransform(smoothScroll, [0, 1], ['0%', '20%']);

    // Subtle Mouse Parallax
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (window.innerWidth < 1024) return;
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 15,
                y: (e.clientY / window.innerHeight - 0.5) * 15,
            });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative w-full min-h-[100vh] lg:h-[950px] bg-[#0B5C8A] overflow-hidden flex flex-col justify-center pt-24 pb-72 lg:py-0"
        >
            {/* 1. Refined, Professional Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08)_0%,transparent_50%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(211,60,41,0.05)_0%,transparent_50%)]" />
            </div>

            {/* Main Content strictly left-aligned in container-site */}
            <div className="container-site relative z-20 w-full h-full flex flex-col justify-center">

                {/* LEFT CONTENT: Authoritative Typography (Nudged further leftwards for perfect balance) */}
                <motion.div style={{ y: textY }} className="relative w-full lg:w-[52%] xl:w-[50%] flex flex-col justify-center items-start text-left z-20 lg:pr-8 lg:-left-20 xl:-left-32">

                    {/* Trust Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="inline-flex items-center gap-3 border border-[#FFFFFF]/20 bg-[#FFFFFF]/5 backdrop-blur-sm py-2 px-5 rounded-sm w-max mb-6 lg:mb-8"
                    >
                        <ShieldCheck size={18} className="text-[#D33C29]" />
                        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#FFFFFF] uppercase">100% Clear Title Assurance</span>
                    </motion.div>

                    {/* Cinematic Headline */}
                    <motion.h1
                        variants={textContainer} initial="hidden" animate="show"
                        className="font-display font-extrabold text-[#FFFFFF] leading-[1.05] tracking-tight mb-5 md:mb-6 text-left w-full flex flex-col"
                        style={{ fontSize: 'clamp(2.8rem, 5.5vw, 5rem)' }}
                    >
                        <div className="overflow-hidden pb-1"><motion.div variants={textItem} className="text-left w-full justify-start items-start">Discover The</motion.div></div>
                        <div className="overflow-hidden pb-1"><motion.div variants={textItem} className="text-[#D33C29] text-left w-full justify-start items-start">Pinnacle Of</motion.div></div>
                        <div className="overflow-hidden pb-1"><motion.div variants={textItem} className="text-left w-full justify-start items-start break-words whitespace-pre-wrap">Kerala's Legacy</motion.div></div>
                    </motion.h1>

                    {/* Elegant Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="text-base md:text-xl text-[#FFFFFF]/80 max-w-full lg:max-w-[480px] mb-8 leading-relaxed font-body font-light text-left"
                    >
                        Secure your future in the cultural capital. We curate exclusive residential plots and investments built on 25 years of trust.
                    </motion.p>

                    {/* THE SEARCH CONSOLE (Strictly confined to left column, no overlap) */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full z-40 mt-2 pr-4 lg:pr-8"
                    >
                        <div className="bg-[#FFFFFF] rounded-[24px] lg:rounded-[40px] p-2.5 lg:p-3 shadow-[0_20px_60px_rgba(0,0,0,0.3)] flex flex-col lg:flex-row items-center justify-between relative border border-[#FFFFFF]/50 w-full">

                            <div className="w-full flex flex-col lg:flex-row items-center py-2 lg:py-0 gap-2 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-[#0B5C8A]/10 text-left">

                                <div className="w-full flex items-center gap-3 py-2 lg:py-0 lg:px-4 group cursor-pointer">
                                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#0B5C8A]/5 flex items-center justify-center group-hover:bg-[#0B5C8A]/10 transition-colors">
                                        <MapPin size={18} className="text-[#0B5C8A]" />
                                    </div>
                                    <div className="flex flex-col flex-1 overflow-hidden pointer-events-none text-left">
                                        <span className="text-[9px] font-extrabold text-[#D33C29] uppercase tracking-widest mb-1 text-left">Location</span>
                                        <select className="w-full bg-transparent text-[#0B5C8A] font-extrabold text-sm outline-none cursor-pointer appearance-none border-none p-0 m-0 truncate text-left pointer-events-auto">
                                            <option>Thrissur City</option>
                                            <option>Punkunnam</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="w-full flex items-center gap-3 py-3 lg:py-0 lg:px-4 group cursor-pointer">
                                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#0B5C8A]/5 flex items-center justify-center group-hover:bg-[#0B5C8A]/10 transition-colors">
                                        <Home size={18} className="text-[#0B5C8A]" />
                                    </div>
                                    <div className="flex flex-col flex-1 overflow-hidden pointer-events-none text-left">
                                        <span className="text-[9px] font-extrabold text-[#D33C29] uppercase tracking-widest mb-1 text-left">Property</span>
                                        <select className="w-full bg-transparent text-[#0B5C8A] font-extrabold text-sm outline-none cursor-pointer appearance-none border-none p-0 m-0 truncate text-left pointer-events-auto">
                                            <option>Premium Plot</option>
                                            <option>Commercial</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="w-full flex items-center gap-3 pt-3 lg:pt-0 pb-1 lg:pb-0 lg:px-4 group cursor-pointer">
                                    <div className="w-10 h-10 shrink-0 rounded-full bg-[#0B5C8A]/5 flex items-center justify-center group-hover:bg-[#0B5C8A]/10 transition-colors">
                                        <Coins size={18} className="text-[#0B5C8A]" />
                                    </div>
                                    <div className="flex flex-col flex-1 overflow-hidden pointer-events-none text-left">
                                        <span className="text-[9px] font-extrabold text-[#D33C29] uppercase tracking-widest mb-1 text-left">Budget</span>
                                        <select className="w-full bg-transparent text-[#0B5C8A] font-extrabold text-sm outline-none cursor-pointer appearance-none border-none p-0 m-0 truncate text-left pointer-events-auto">
                                            <option>₹50L - ₹1Cr</option>
                                            <option>₹1Cr - ₹3Cr</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full lg:w-auto mt-3 lg:mt-0 flex justify-center shrink-0 lg:pl-2">
                                {/* Mobile Button */}
                                <button
                                    onClick={() => window.location.href = '/plots'}
                                    className="lg:hidden w-full bg-[#D33C29] text-[#FFFFFF] rounded-xl py-3.5 flex items-center justify-center gap-2 font-bold text-sm shadow-[0_8px_20px_rgba(211,60,41,0.4)] active:scale-95 transition-transform"
                                >
                                    <Search size={18} strokeWidth={3} /> Search
                                </button>
                                {/* Desktop Button */}
                                <div className="hidden lg:block relative z-10">
                                    <MagneticButton onClick={() => window.location.href = '/plots'}>
                                        <Search size={22} strokeWidth={3} />
                                    </MagneticButton>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* MOBILE IMAGE: Displayed only on mobile within the flow */}
                <div className="lg:hidden w-full relative h-[45vh] min-h-[380px] flex items-center justify-center z-10 order-1 mb-6">
                    <motion.div className="w-full relative h-[45vh] min-h-[380px] rounded-[24px] shadow-2xl overflow-hidden">
                        <motion.img
                            style={{ y: imageY }}
                            src="/images/plots/plot1.jpg"
                            alt="Premium Real Estate Plot"
                            className="w-full h-[120%] object-cover object-center absolute -top-[10%]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0B5C8A]/90 via-[#0B5C8A]/10 to-transparent" />
                        <div className="absolute bottom-6 left-6 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#FFFFFF]/20 backdrop-blur-md flex items-center justify-center text-[#FFFFFF]">
                                <ArrowRight size={18} />
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-[#FFFFFF]/80 tracking-widest uppercase mb-1">Featured Plot</p>
                                <p className="text-xl font-semibold text-[#FFFFFF] m-0">Thrissur Elite Ground</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* DESKTOP RIGHT-ALIGNED FULL SIZE IMAGE */}
            <motion.div
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="hidden lg:block absolute top-0 right-0 bottom-0 w-[45%] xl:w-[48%] z-10 overflow-hidden shadow-[-20px_0_40px_rgba(0,0,0,0.3)]"
            >
                <motion.div
                    animate={{ x: mousePosition.x * 0.4, y: mousePosition.y * 0.4 }}
                    transition={{ type: "spring", stiffness: 30, damping: 25 }}
                    className="w-full h-full relative scale-105"
                >
                    <motion.img
                        initial={{ scale: 1.15 }}
                        animate={{ scale: 1.05 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        style={{ y: imageY }}
                        src="/images/plots/plot1.jpg"
                        alt="Premium Real Estate Plot"
                        className="w-[110%] h-[120%] object-cover object-center absolute -top-[10%] -left-[5%]"
                    />
                    {/* Dark sleek gradient blend */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B5C8A]/95 via-[#0B5C8A]/5 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-l from-[#0B5C8A]/10 via-[#0B5C8A]/20 to-[#0B5C8A]/80" />

                    {/* Integrated Property Details Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="absolute bottom-40 xl:bottom-48 left-10 xl:left-14 bg-[#FFFFFF]/10 backdrop-blur-md border border-[#FFFFFF]/30 p-5 rounded-2xl flex items-center gap-5 shadow-xl"
                    >
                        <div className="w-14 h-14 rounded-full bg-[#FFFFFF]/25 flex items-center justify-center text-[#FFFFFF] shadow-[inset_0_2px_10px_rgba(255,255,255,0.2)]">
                            <ArrowRight size={24} />
                        </div>
                        <div className="pr-4">
                            <p className="text-[11px] font-extrabold text-[#FFFFFF]/80 tracking-[0.2em] uppercase mb-1">Featured Plot</p>
                            <p className="text-2xl font-bold text-[#FFFFFF] m-0 drop-shadow-md">Thrissur Prime Land</p>
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section >
    );
}