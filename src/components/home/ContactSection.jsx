'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-10% 0px' });

    // Stagger containers
    const containerVariants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
    };

    return (
        <section ref={ref} className="bg-[#0B5C8A] py-32 border-t border-white/10 relative overflow-hidden">

            {/* Minimalist Watermark Background */}
            <div className="absolute -top-[20%] -right-[10%] text-[#FFFFFF]/5 text-[400px] font-black font-['Plus_Jakarta_Sans'] select-none pointer-events-none leading-none z-0">
                TCR
            </div>

            <div className="container-site relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">

                    {/* LEFT: Grid-Aligned Contact Details & Typography */}
                    <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="flex flex-col justify-center">
                        <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
                            <span className="w-10 h-[1px] bg-[#D33C29]" />
                            <span className="text-[#D33C29] text-[11px] font-bold uppercase tracking-[0.2em] shadow-sm">Secure Your Future</span>
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="text-white text-5xl md:text-7xl font-extrabold font-['Plus_Jakarta_Sans'] leading-[1.05] tracking-tight mb-8">
                            Let's Talk <br />Legacy.
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-white/70 text-lg font-medium leading-relaxed max-w-md mb-16">
                            Schedule a private consultation or request a guided site tour of our premium plot reserves across Thrissur.
                        </motion.p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                            <motion.div variants={itemVariants}>
                                <div className="text-[#D33C29] text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"><MapPin size={14} /> Office</div>
                                <div className="text-white font-medium leading-relaxed">
                                    TCR Corporate Square,<br />
                                    MG Road, Poothole,<br />
                                    Thrissur, Kerala 680004
                                </div>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <div className="text-[#D33C29] text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"><Phone size={14} /> Direct Line</div>
                                <div className="text-white font-medium leading-relaxed mb-6">
                                    +91 98765 43210<br />
                                    +91 99988 77766
                                </div>
                                <div className="text-[#D33C29] text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2"><Mail size={14} /> Email</div>
                                <div className="text-white font-medium leading-relaxed">
                                    invest@tcrplots.com
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* RIGHT: Minimalist Conversion Engine Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                        className="bg-white/5 backdrop-blur-3xl rounded-[32px] p-10 md:p-14 border border-white/10"
                    >
                        <form className="flex flex-col gap-8">
                            <div className="relative group">
                                <label className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2 block transition-colors group-focus-within:text-[#D33C29]">Full Name</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-lg font-medium outline-none transition-colors focus:border-[#D33C29] placeholder:text-white/20"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="relative group">
                                <label className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2 block transition-colors group-focus-within:text-[#D33C29]">Contact Details</label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-lg font-medium outline-none transition-colors focus:border-[#D33C29] placeholder:text-white/20"
                                    placeholder="Phone or Email"
                                    required
                                />
                            </div>

                            <div className="relative group mb-4">
                                <label className="text-white/50 text-xs font-bold uppercase tracking-widest mb-2 block transition-colors group-focus-within:text-[#D33C29]">Investment Goal</label>
                                <select defaultValue="" className="w-full bg-transparent border-b border-white/20 pb-4 text-white text-lg font-medium outline-none transition-colors focus:border-[#D33C29] appearance-none cursor-pointer">
                                    <option value="" disabled className="text-black">Select an interest...</option>
                                    <option value="Premium Residential Plot" className="text-black">Premium Residential Plot</option>
                                    <option value="Commercial Land" className="text-black">Commercial Land</option>
                                    <option value="Investment / Resale" className="text-black">Investment / Resale</option>
                                </select>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                className="w-full bg-[#D33C29] hover:bg-[#a82d1e] text-white rounded-2xl py-6 flex items-center justify-center gap-3 text-sm font-bold uppercase tracking-widest transition-colors shadow-[0_10px_30px_rgba(211,60,41,0.3)] mt-2"
                            >
                                Submit Request <ArrowRight size={18} />
                            </motion.button>

                            <p className="text-white/40 text-xs text-center font-medium mt-2">
                                We respect your privacy. No spam.
                            </p>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
