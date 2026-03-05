'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { TrendingUp, TreePine, Map, ShieldCheck } from 'lucide-react';

// Custom Animated Counter Component
function AnimatedCounter({ from = 0, to, duration = 2, suffix = '' }) {
    const nodeRef = useRef(null);
    const inView = useInView(nodeRef, { once: true, margin: '-10% 0px' });
    const springValue = useSpring(from, { duration: duration * 1000, bounce: 0 });

    useEffect(() => {
        if (inView) {
            springValue.set(to);
        }
    }, [inView, to, springValue]);

    useEffect(() => {
        return springValue.on('change', (latest) => {
            if (nodeRef.current) {
                nodeRef.current.textContent = Math.floor(latest).toLocaleString() + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={nodeRef}>{from}{suffix}</span>;
}

const HIGHLIGHTS = [
    {
        id: 'roi',
        title: 'Average ROI',
        metric: 24,
        suffix: '%',
        icon: <TrendingUp size={24} className="text-[#0B5C8A]" />,
        desc: 'Year-over-year appreciation in our premium corridors, significantly outperforming standard real estate indexes.',
        span: 'md:col-span-2 md:row-span-2',
        bg: 'bg-white',
        text: 'text-[#0B5C8A]'
    },
    {
        id: 'green',
        title: 'Green Cover',
        metric: 40,
        suffix: '%+',
        icon: <TreePine size={24} className="text-white" />,
        desc: 'Mandatory dedicated green spaces in all our major plot developments.',
        span: 'md:col-span-1 md:row-span-1',
        bg: 'bg-[#0B5C8A]',
        text: 'text-white'
    },
    {
        id: 'distance',
        title: 'To City Center',
        metric: 15,
        suffix: ' Min',
        icon: <Map size={24} className="text-[#0B5C8A]" />,
        desc: 'Strategic positioning ensuring swift access to Thrissur’s cultural heart.',
        span: 'md:col-span-1 md:row-span-1',
        bg: 'bg-[#F9FAFB]',
        text: 'text-[#111827]'
    },
    {
        id: 'legal',
        title: 'Vetted Titles',
        metric: 100,
        suffix: '%',
        icon: <ShieldCheck size={24} className="text-[#0B5C8A]" />,
        desc: 'Absolute legal clarity. Every square inch of land is protected by iron-clad, transparent documentation.',
        span: 'md:col-span-2 md:row-span-1',
        bg: 'bg-white',
        text: 'text-[#0B5C8A]'
    }
];

export default function Highlights() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-10% 0px' });

    const containerVariants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.98 },
        visible: {
            opacity: 1, y: 0, scale: 1,
            transition: { type: 'spring', stiffness: 60, damping: 15 }
        }
    };

    return (
        <section ref={ref} className="py-32 bg-[#F3F4F6]">
            <div className="container-site">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}
                    className="mb-16 md:mb-24"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-10 h-[1px] bg-[#D33C29]" />
                        <span className="text-[#D33C29] text-[11px] font-bold uppercase tracking-[0.2em]">The Metrics of Success</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <h2 className="text-[#0B5C8A] text-4xl md:text-5xl lg:text-6xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight max-w-2xl">
                            By the Numbers
                        </h2>
                        <p className="text-[#4B5563] text-lg font-medium max-w-md">
                            We don't just sell land; we engineer generational assets based on strict data and market trajectories.
                        </p>
                    </div>
                </motion.div>

                {/* Bento Box Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[240px]"
                >
                    {HIGHLIGHTS.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            className={`rounded-3xl p-8 lg:p-12 flex flex-col justify-between ${item.bg} ${item.span} shadow-sm hover:shadow-xl transition-shadow duration-500 border border-[#E5E7EB]/50`}
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center ${item.bg === 'bg-[#0B5C8A]' ? 'bg-white/10' : 'bg-[#F3F4F6]'}`}>
                                    {item.icon}
                                </div>
                                <h3 className={`text-sm font-bold uppercase tracking-widest ${item.text} opacity-60`}>
                                    {item.title}
                                </h3>
                            </div>

                            <div>
                                <div className={`text-6xl md:text-7xl lg:text-8xl font-black font-['Plus_Jakarta_Sans'] mb-4 ${item.text} tracking-tighter`}>
                                    {inView ? <AnimatedCounter to={item.metric} suffix={item.suffix} /> : `0${item.suffix}`}
                                </div>
                                <p className={`text-base font-medium leading-relaxed max-w-sm ${item.text} ${item.bg === 'bg-[#0B5C8A]' ? 'opacity-90' : 'opacity-70'}`}>
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
