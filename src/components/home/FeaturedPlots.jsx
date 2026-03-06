'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { MapPin, Maximize, ExternalLink } from 'lucide-react';
import Image from 'next/image';

const PLOTS = [
    { id: 1, title: 'The Heritage Reserve', location: 'Punkunnam, Thrissur', price: '₹1.2 Cr', area: '15 Cents', image: '/images/plots/plot1.jpg', status: 'Available' },
    { id: 2, title: 'Ollur Green Valley', location: 'Ollur, Thrissur', price: '₹85 L', area: '10 Cents', image: '/images/plots/plot2.jpg', status: 'Just Listed' },
    { id: 3, title: 'Cultural Corridor plots', location: 'Thrissur City', price: '₹2.5 Cr', area: '20 Cents', image: '/images/plots/plot3.jpg', status: 'Premium' },
    { id: 4, title: 'Kuttippuram Estates', location: 'Thrissur Outskirts', price: '₹60 L', area: '12 Cents', image: '/images/plots/plot1.jpg', status: 'Available' },
    { id: 5, title: 'The Royal Canvas', location: 'Kuttanellur, Thrissur', price: '₹1.8 Cr', area: '18 Cents', image: '/images/plots/plot2.jpg', status: 'Selling Fast' }
];

// 3D Tilt Card Component
function TiltCard({ plot }) {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
            className="group relative flex-shrink-0 w-[85vw] sm:w-[400px] h-[65vh] sm:h-[550px] min-h-[450px] max-h-[600px] rounded-2xl overflow-hidden cursor-pointer bg-white"
        >
            {/* The Image (Scales on hover) */}
            <motion.div
                className="absolute inset-0 w-full h-full"
                style={{ transform: 'translateZ(-50px)' }}
            >
                <img
                    src={plot.image}
                    alt={plot.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B5C8A] via-transparent to-transparent opacity-60" />
            </motion.div>

            {/* Top Status Tag */}
            <div className="absolute top-6 left-6" style={{ transform: 'translateZ(30px)' }}>
                <span className="bg-[#D33C29] text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {plot.status}
                </span>
            </div>

            {/* Initial Bottom Info (Fades out on hover) */}
            <div className="absolute bottom-8 left-8 right-8 transition-opacity duration-300 group-hover:opacity-0" style={{ transform: 'translateZ(40px)' }}>
                <h3 className="text-white text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-tight mb-2">{plot.title}</h3>
                <div className="flex items-center text-white/80 text-sm font-medium">
                    <MapPin size={14} className="mr-1.5" /> {plot.location}
                </div>
            </div>

            {/* Slide-Up Details Panel (Reveals on hover) */}
            <div
                className="absolute bottom-0 left-0 right-0 bg-white p-6 sm:p-8 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] [transform:translateZ(50px)_translateY(101%)] group-hover:[transform:translateZ(50px)_translateY(0%)] shadow-[0_-20px_40px_rgba(0,0,0,0.1)] rounded-t-3xl border-t border-gray-100"
            >
                <h3 className="text-[#0B5C8A] text-2xl font-bold font-['Plus_Jakarta_Sans'] leading-tight mb-2">{plot.title}</h3>
                <div className="flex items-center text-[#0B5C8A]/70 text-sm font-medium mb-6">
                    <MapPin size={14} className="mr-1.5" /> {plot.location}
                </div>

                <div className="flex items-end justify-between border-t border-gray-100 pt-6">
                    <div>
                        <div className="text-[#0B5C8A]/60 text-xs font-bold uppercase tracking-wider mb-1">Specs</div>
                        <div className="text-[#0B5C8A] font-bold flex items-center gap-1.5">
                            <Maximize size={16} /> {plot.area}
                        </div>
                    </div>
                    <div className="text-right">
                        <div className="text-[#0B5C8A]/60 text-xs font-bold uppercase tracking-wider mb-1">Investment</div>
                        <div className="text-[#D33C29] text-2xl font-bold font-['Plus_Jakarta_Sans']">
                            {plot.price}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function FeaturedPlots() {
    const scrollContainerRef = useRef(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -450, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 450, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-40 md:py-48 lg:py-56 bg-[#F9FAFB] overflow-hidden">
            <div className="container-site mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-10% 0px' }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <span className="w-4 h-[2px] bg-[#D33C29]" />
                        <span className="text-[#D33C29] text-[11px] font-bold uppercase tracking-[0.2em]">Featured Portfolio</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <h2 className="text-[#0B5C8A] text-4xl md:text-6xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight max-w-2xl">
                            The Avant-Garde <br />Collection
                        </h2>
                        <div className="flex items-center gap-6">
                            <div className="flex gap-2">
                                <button onClick={scrollLeft} aria-label="Scroll Left" className="w-12 h-12 rounded-full border border-[#0B5C8A]/20 flex items-center justify-center text-[#0B5C8A] hover:bg-[#0B5C8A] hover:text-white transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6" /></svg>
                                </button>
                                <button onClick={scrollRight} aria-label="Scroll Right" className="w-12 h-12 rounded-full border border-[#0B5C8A]/20 flex items-center justify-center text-[#0B5C8A] hover:bg-[#0B5C8A] hover:text-white transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6" /></svg>
                                </button>
                            </div>
                            <a href="/plots" className="hidden md:inline-flex items-center gap-2 text-[#0B5C8A] font-bold text-sm uppercase tracking-widest hover:text-[#D33C29] transition-colors relative group">
                                View All Properties <ExternalLink size={16} />
                                <span className="absolute -bottom-2 left-0 right-0 h-[2px] bg-[#D33C29] scale-x-0 group-hover:scale-x-100 transition-transform origin-left ease-out" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Horizontal Control Track */}
            <div className="pl-[max(24px,calc((100vw-1280px)/2))]">
                <div
                    ref={scrollContainerRef}
                    className="flex gap-8 pr-[20vw] overflow-x-auto hide-scrollbar snap-x snap-mandatory pt-4 pb-12 w-full"
                >
                    {PLOTS.map(plot => (
                        <div key={plot.id} className="snap-start">
                            <TiltCard plot={plot} />
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
}
