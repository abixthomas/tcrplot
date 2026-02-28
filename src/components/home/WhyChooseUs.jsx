'use client';
import FadeIn from '@/components/FadeIn';
import { motion } from 'framer-motion';
import { Shield, Clock, MapPin, Star, Globe, Zap, TrendingUp, FileCheck } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
};

const reasons = [
    { icon: Shield, title: '100% Legal & Clear Title', desc: 'Every listing carries verified patta, encumbrance certificate, and legal clearance from our in-house lawyers.', color: '#1B4F8A' },
    { icon: Clock, title: '25+ Years of Local Expertise', desc: 'Since 1998, we have helped 1,000+ families buy land in Thrissur with zero disputes or complications.', color: '#E63329' },
    { icon: FileCheck, title: 'End-to-End Documentation', desc: 'From EC verification to sub-registrar registration — we handle every document for a seamless experience.', color: '#2C9BE8' },
    { icon: Star, title: 'Premium Verified Listings Only', desc: 'We reject 7 out of 10 plots submitted to us. Only quality, fairly-priced properties make our list.', color: '#D4A843' },
    { icon: Globe, title: 'NRI-Friendly Service', desc: 'Power of attorney, virtual site tours, remote documentation — we serve NRI buyers without hassle.', color: '#1B4F8A' },
    { icon: TrendingUp, title: '8% Annual Appreciation', desc: 'Thrissur land has delivered 8% annual appreciation over 5 years, making it Kerala\'s smartest investment.', color: '#E63329' },
];

export default function WhyChooseUs() {
    return (
        <section style={{ background: '#071b38', paddingTop: 96, paddingBottom: 96, position: 'relative', overflow: 'hidden' }}>
            {/* Dot pattern */}
            <div style={{ position: 'absolute', inset: 0, opacity: 0.04, backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 0)', backgroundSize: '32px 32px', pointerEvents: 'none' }} />

            <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 64 }}>
                    <FadeIn><div className="tag" style={{ color: '#2C9BE8', justifyContent: 'center', marginBottom: 16 }}>Why Choose TCR Plots</div></FadeIn>
                    <FadeIn delay={0.1}>
                        <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 900, color: '#fff', lineHeight: 1.25 }}>
                            The Standard of Trust,<br /><em style={{ color: '#2C9BE8' }}>Beyond Compare</em>
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p style={{ marginTop: 16, fontSize: 16, color: 'rgba(255,255,255,0.5)', maxWidth: 520, margin: '16px auto 0' }}>
                            We don't just sell land — we build relationships that last decades.
                        </p>
                    </FadeIn>
                </div>

                {/* Cards grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginBottom: 72 }}
                >
                    {reasons.map((r, i) => (
                        <motion.div
                            key={r.title}
                            variants={itemVariants}
                            whileHover="hover"
                            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '28px 24px', cursor: 'default' }}
                        >
                            <motion.div
                                variants={{ hover: { scale: 1.15, rotate: 5, backgroundColor: `${r.color}44` } }}
                                transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                                style={{ width: 48, height: 48, borderRadius: 10, background: `${r.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}
                            >
                                <r.icon size={24} style={{ color: r.color }} />
                            </motion.div>
                            <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 10, lineHeight: 1.35 }}>{r.title}</h3>
                            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>{r.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Animated stat bar */}
                <FadeIn>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, background: 'rgba(255,255,255,0.06)', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                        {[
                            { num: '1,200+', label: 'Plots Sold', color: '#1B4F8A' },
                            { num: '25+', label: 'Years of Trust', color: '#E63329' },
                            { num: '98%', label: 'Client Satisfaction', color: '#2C9BE8' },
                            { num: '10+', label: 'Areas Covered', color: '#D4A843' },
                        ].map((s, i) => (
                            <div key={s.label} style={{ textAlign: 'center', padding: '32px 16px', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                                <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: s.color, lineHeight: 1 }}>{s.num}</div>
                                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 6 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
