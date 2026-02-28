'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { areas } from '@/lib/data';
import FadeIn from '@/components/FadeIn';

const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 60, damping: 15 } }
};

export default function AreasGrid() {
    return (
        <section style={{ padding: '96px 0', background: '#fff' }}>
            <div className="container-site">
                <div style={{ textAlign: 'center', marginBottom: 52 }}>
                    <FadeIn><div className="tag" style={{ justifyContent: 'center', marginBottom: 14 }}>Where We Operate</div></FadeIn>
                    <FadeIn delay={0.1}>
                        <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 900, color: '#111827', lineHeight: 1.25 }}>
                            Premium Plots Across <em style={{ color: '#1B4F8A' }}>Greater Thrissur</em>
                        </h2>
                    </FadeIn>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}
                >
                    {areas.map((area) => (
                        <motion.div key={area.name} variants={itemVariants}>
                            <Link href={`/plots?location=${encodeURIComponent(area.name)}`} style={{ textDecoration: 'none' }}>
                                <motion.div
                                    style={{ position: 'relative', height: 180, borderRadius: 12, overflow: 'hidden', cursor: 'pointer' }}
                                    whileHover={{ scale: 1.03 }}
                                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <img src={area.img} alt={area.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,27,56,0.88) 0%, rgba(7,27,56,0.2) 60%, transparent 100%)' }} />
                                    <div style={{ position: 'absolute', bottom: 0, left: 0, padding: '16px 16px', display: 'flex', flexDirection: 'column', gap: 3 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                            <MapPin size={13} style={{ color: '#2C9BE8' }} />
                                            <span style={{ fontSize: 15, fontWeight: 700, color: '#fff' }}>{area.name}</span>
                                        </div>
                                        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)' }}>{area.plots} plots available</span>
                                    </div>
                                    <div style={{ position: 'absolute', top: 12, right: 12 }}>
                                        <ArrowRight size={16} style={{ color: 'rgba(255,255,255,0.7)' }} />
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
