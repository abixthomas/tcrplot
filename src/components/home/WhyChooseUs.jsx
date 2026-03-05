'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Custom designed premium SVG Icons inline
const ShieldIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0B5C8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
    </svg>
);

const CompassIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0B5C8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
);

const LineChartIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0B5C8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
    </svg>
);

const GemIcon = () => (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0B5C8A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 3h12l4 6-10 13L2 9Z" />
        <path d="M11 3v19" />
        <path d="M2 9h20" />
    </svg>
);

const REASONS = [
    {
        id: '01',
        icon: <ShieldIcon />,
        title: 'Clear Titles & Legality',
        description: 'Every property is 100% legally vetted by top-tier advocates. Zero encumbrances, pristine paperwork, and absolute peace of mind.'
    },
    {
        id: '02',
        icon: <CompassIcon />,
        title: 'Prime Thrissur Corridors',
        description: 'We do not sell isolated lands. Our portfolio only includes plots situated in the fastest-appreciating, high-connectivity corridors of the city.'
    },
    {
        id: '03',
        icon: <LineChartIcon />,
        title: 'Generational ROI',
        description: 'Our curated plots historically outperform standard real estate, offering generational wealth scaling and immense resale demand.'
    },
    {
        id: '04',
        icon: <GemIcon />,
        title: 'The Premium Standard',
        description: 'We operate strictly in the ultra-premium segment. Our developments guarantee elite neighborhoods and unmatched lifestyle value.'
    }
];

export default function WhyChooseUs() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-10% 0px' });

    // Stagger container
    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.2, delayChildren: 0.3 }
        }
    };

    // Spring animation for nodes
    const itemVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1, y: 0, scale: 1,
            transition: { type: 'spring', stiffness: 50, damping: 12, mass: 1 }
        }
    };

    return (
        <section ref={ref} className="py-40 md:py-48 lg:py-56 bg-[#FFFFFF]">
            <div className="container-site">

                {/* Header Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
                    className="flex flex-col items-center text-center mb-24"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-10 h-[1px] bg-[#D33C29]" />
                        <span className="text-[#D33C29] text-[11px] font-bold uppercase tracking-[0.2em]">The Premium Trust</span>
                        <span className="w-10 h-[1px] bg-[#D33C29]" />
                    </div>
                    <h2 className="text-[#0B5C8A] text-4xl md:text-5xl lg:text-6xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight max-w-3xl">
                        Why Legacy Investors <br />Choose Us
                    </h2>
                </motion.div>

                {/* Asymmetrical Staggered Layout */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 max-w-5xl mx-auto"
                >
                    {REASONS.map((reason, index) => {
                        // Create asymmetry by pushing even items down
                        const isEven = index % 2 !== 0;
                        return (
                            <motion.div
                                key={reason.id}
                                variants={itemVariants}
                                className={`relative flex flex-col items-start ${isEven ? 'md:mt-24' : ''}`}
                            >
                                {/* Background Watermark Number */}
                                <div className="absolute -top-12 -left-8 text-[120px] font-black text-[#0B5C8A]/5 select-none pointer-events-none font-['Plus_Jakarta_Sans'] leading-none z-0">
                                    {reason.id}
                                </div>

                                <div className="bg-[#F9FAFB] p-5 rounded-2xl mb-8 border border-[#E5E7EB] z-10 relative group hover:border-[#0B5C8A]/30 transition-colors">
                                    {reason.icon}
                                    <div className="absolute inset-0 bg-[#0B5C8A]/5 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
                                </div>

                                <h3 className="text-[#0B5C8A] text-2xl font-bold font-['Plus_Jakarta_Sans'] mb-4 z-10">
                                    {reason.title}
                                </h3>

                                <p className="text-[#4B5563] text-base leading-relaxed max-w-md z-10 font-medium">
                                    {reason.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
