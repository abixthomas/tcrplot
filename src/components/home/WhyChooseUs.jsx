'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Custom designed premium SVG Icons inline
const ShieldIcon = ({ color = "#0B5C8A" }) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
    </svg>
);

const CompassIcon = ({ color = "#0B5C8A" }) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
);

const LineChartIcon = ({ color = "#0B5C8A" }) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
    </svg>
);

const GemIcon = ({ color = "#0B5C8A" }) => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 13L2 9Z" />
        <path d="M11 3v19" />
        <path d="M2 9h20" />
    </svg>
);

export default function WhyChooseUs() {
    const targetRef = useRef(null);

    // Setup Parallax Scroll Tracking for the container.
    // By giving the section a large height (e.g. 400vh) and making the inner container sticky,
    // we convert vertical scrolling into progress (0 to 1).
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"]
    });

    // Translate vertical scroll into horizontal movement
    // The track moves from 0% to -85% horizontally as the user scrolls down the section.
    const xTrack = useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]);

    // Background text scales slightly during the scroll sequence
    const textScale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

    // Header opacity logic over scroll
    const headerOpacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.3]);

    return (
        <section ref={targetRef} className="relative h-[400vh] bg-[#FFFFFF]">
            <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col justify-center bg-[#FFFFFF]">

                {/* ─── MASSIVE KINETIC TYPOGRAPHY BACKGROUND ─── */}
                <motion.div
                    style={{ scale: textScale }}
                    className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none z-0 opacity-[0.03] select-none"
                >
                    <h1 className="text-[25vw] font-black font-display leading-[0.75] tracking-tighter text-[#0B5C8A]">
                        WHY
                    </h1>
                    <h1 className="text-[25vw] font-black font-display leading-[0.8] tracking-widest text-[#0B5C8A]">
                        WE
                    </h1>
                    <h1 className="text-[25vw] font-black font-display leading-[0.75] tracking-tighter text-[#0B5C8A]">
                        LEAD
                    </h1>
                </motion.div>

                {/* ─── STICKY HEADER ─── */}
                <motion.div
                    style={{ opacity: headerOpacity }}
                    className="absolute top-[10%] md:top-[12%] left-0 w-full z-10 flex flex-col items-center text-center px-6 pointer-events-none"
                >
                    <div className="flex items-center gap-4 mb-4">
                        <span className="w-8 md:w-12 h-[2px] bg-[#D33C29]" />
                        <span className="text-[#0B5C8A] text-xs md:text-sm font-bold uppercase tracking-[0.3em]">The Premium Trust</span>
                        <span className="w-8 md:w-12 h-[2px] bg-[#D33C29]" />
                    </div>
                    <h2 className="text-[#0B5C8A] text-4xl md:text-6xl lg:text-7xl font-black font-display leading-[0.95] tracking-tighter">
                        Why Legacy Investors<br />Choose Us
                    </h2>
                </motion.div>

                {/* ─── HORIZONTAL SCROLL TRACK ─── */}
                <motion.div
                    style={{ x: xTrack }}
                    className="flex shrink-0 w-max items-center gap-16 md:gap-32 pl-[100vw] pr-[50vw] relative z-20"
                >

                    {/* Card 1: Soft Ice Blue (Clear Titles) */}
                    <div className="flex-shrink-0 w-[85vw] md:w-[480px] lg:w-[550px] -mt-16 rotate-[-3deg] hover:rotate-0 transition-transform duration-700">
                        <div className="bg-[#E6F0F9] rounded-[40px] p-10 lg:p-14 shadow-[0_20px_60px_rgba(11,92,138,0.15)] border border-[#FFFFFF] backdrop-blur-xl group">
                            <div className="w-16 h-16 bg-[#FFFFFF] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                <ShieldIcon color="#0B5C8A" />
                            </div>
                            <h3 className="text-[#0B5C8A] text-3xl lg:text-4xl font-bold font-display leading-tight mb-5">
                                Clear Titles & Legality
                            </h3>
                            <p className="text-[#0B5C8A]/80 text-lg md:text-xl font-medium leading-relaxed">
                                Every property is 100% legally vetted by top-tier advocates. Zero encumbrances, pristine paperwork, and absolute peace of mind.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Crisp White (Prime Corridors) */}
                    <div className="flex-shrink-0 w-[85vw] md:w-[480px] lg:w-[550px] mt-24 rotate-[4deg] hover:rotate-0 transition-transform duration-700">
                        <div className="bg-[#FFFFFF] rounded-[48px] p-10 lg:p-16 shadow-[0_30px_80px_rgba(0,0,0,0.1)] border-[1.5px] border-[#0B5C8A]/10 group">
                            <div className="w-16 h-16 bg-[#0B5C8A]/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0B5C8A]/10 transition-colors">
                                <CompassIcon color="#0B5C8A" />
                            </div>
                            <h3 className="text-[#0B5C8A] text-3xl lg:text-4xl font-black font-display leading-tight mb-5 tracking-tight">
                                Prime Thrissur Corridors
                            </h3>
                            <p className="text-[#4B5563] text-lg md:text-xl font-medium leading-relaxed">
                                We do not sell isolated lands. Our portfolio only includes plots situated in the fastest-appreciating, high-connectivity corridors of the city.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Deep Primary Blue (Generational ROI) */}
                    <div className="flex-shrink-0 w-[85vw] md:w-[480px] lg:w-[550px] -mt-20 rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
                        <div className="bg-[#0B5C8A] rounded-[40px] p-10 lg:p-16 shadow-[0_40px_100px_rgba(11,92,138,0.4)] border border-[#FFFFFF]/20 text-white group">
                            <div className="w-16 h-16 bg-[#FFFFFF]/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-8 border border-[#FFFFFF]/20 group-hover:bg-[#FFFFFF]/20 transition-colors">
                                <LineChartIcon color="#FFFFFF" />
                            </div>
                            <h3 className="text-[#FFFFFF] text-3xl lg:text-4xl font-black font-display leading-tight mb-5">
                                Generational ROI
                            </h3>
                            <p className="text-[#FFFFFF]/80 text-lg md:text-xl font-medium leading-relaxed">
                                Our curated plots historically outperform standard real estate, offering generational wealth scaling and immense resale demand.
                            </p>
                        </div>
                    </div>

                    {/* Card 4: Soft Pale Coral (Premium Standard) */}
                    <div className="flex-shrink-0 w-[85vw] md:w-[480px] lg:w-[550px] mt-20 rotate-[3deg] hover:rotate-0 transition-transform duration-700">
                        <div className="bg-[#FDE8E5] rounded-[40px] p-10 lg:p-14 shadow-[0_30px_70px_rgba(211,60,41,0.15)] border border-[#FFFFFF] group">
                            <div className="w-16 h-16 bg-[#FFFFFF] rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                                <GemIcon color="#D33C29" />
                            </div>
                            <h3 className="text-[#D33C29] text-3xl lg:text-4xl font-black font-display leading-tight mb-5">
                                The Premium Standard
                            </h3>
                            <p className="text-[#D33C29]/80 text-lg md:text-xl font-bold leading-relaxed">
                                We operate strictly in the ultra-premium segment. Our developments guarantee elite neighborhoods and unmatched lifestyle value.
                            </p>
                        </div>
                    </div>

                </motion.div>

            </div>
        </section>
    );
}
