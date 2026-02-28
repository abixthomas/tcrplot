'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Maximize2, ArrowRight, Eye } from 'lucide-react';
import { plots } from '@/lib/data';
import FadeIn from '@/components/FadeIn';

const purposeColors = {
    residential: { bg: '#1B4F8A', label: 'Residential' },
    commercial: { bg: '#E63329', label: 'Commercial' },
    investment: { bg: '#D4A843', label: 'Investment' },
};

const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
};

function PlotCard({ plot }) {
    const p = purposeColors[plot.purpose];
    return (
        <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="card relative overflow-hidden group"
            style={{ height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer', background: '#fff', borderRadius: 16, boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
        >
            {/* Image */}
            <div style={{ position: 'relative', height: 240, overflow: 'hidden', borderRadius: '16px 16px 0 0' }}>
                <motion.img
                    variants={{ hover: { scale: 1.05 } }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    src={plot.images[0]}
                    alt={plot.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 6 }}>
                    <span className="badge" style={{ background: p.bg, color: '#fff' }}>{p.label}</span>
                    {plot.featured && <span className="badge badge-gold">Featured</span>}
                </div>
                <div style={{ position: 'absolute', top: 12, right: 12, display: 'flex', alignItems: 'center', gap: 4, background: 'rgba(0,0,0,0.45)', borderRadius: 4, padding: '3px 8px' }}>
                    <Eye size={11} style={{ color: '#fff' }} />
                    <span style={{ fontSize: 11, color: '#fff' }}>{plot.views}</span>
                </div>

                {/* View Details Slide Up */}
                <motion.div
                    variants={{ hover: { y: 0, opacity: 1 } }}
                    initial={{ y: 20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(27,79,138,0.7) 0%, transparent 60%)', display: 'flex', alignItems: 'flex-end', padding: 20 }}
                >
                    <div style={{ width: '100%', background: '#fff', color: '#1B4F8A', padding: '10px', textAlign: 'center', borderRadius: 8, fontWeight: 700, fontSize: 13, transform: 'translateY(10px)', opacity: 0.9 }}>
                        View Full Details
                    </div>
                </motion.div>
            </div>

            {/* Content */}
            <div style={{ padding: '20px 20px 24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#6B7280', fontSize: 13, marginBottom: 8 }}>
                    <MapPin size={13} style={{ color: '#E63329', flexShrink: 0 }} />
                    {plot.location}, Thrissur
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#111827', lineHeight: 1.3, marginBottom: 12, flex: 1 }}>{plot.title}</h3>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 16 }}>
                    <span style={{ fontSize: 26, fontWeight: 800, color: '#1B4F8A', lineHeight: 1 }}>₹{plot.price}L</span>
                    <span style={{ fontSize: 13, color: '#9CA3AF' }}>/ cent</span>
                    <span style={{ marginLeft: 'auto', fontSize: 13, color: '#6B7280', fontWeight: 600 }}>
                        Total ≈ ₹{(plot.price * plot.size).toFixed(0)}L
                    </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 14, borderTop: '1px solid #F3F4F6' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: '#6B7280' }}>
                        <Maximize2 size={13} style={{ color: '#2C9BE8' }} />
                        {plot.size} {plot.sizeUnit}
                    </span>
                    <span style={{ fontSize: 13, color: '#6B7280' }}>{plot.roadAccess}</span>
                </div>
            </div>
        </motion.div>
    );
}

export default function FeaturedPlots() {
    const featured = plots.filter(p => p.featured).slice(0, 3);
    return (
        <section style={{ paddingTop: 96, paddingBottom: 96, background: '#F9FAFB' }}>
            <div className="container-site">
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 52, flexWrap: 'wrap', gap: 16 }}>
                    <div>
                        <FadeIn><div className="tag" style={{ marginBottom: 14 }}>Featured Listings</div></FadeIn>
                        <FadeIn delay={0.1}>
                            <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 900, color: '#111827', lineHeight: 1.2 }}>
                                Exclusive Plots,<br /><em style={{ color: '#1B4F8A', fontStyle: 'italic' }}>Handpicked for You</em>
                            </h2>
                        </FadeIn>
                    </div>
                    <FadeIn delay={0.15} direction="left">
                        <Link href="/plots" className="btn btn-outline-navy" style={{ fontWeight: 600 }}>
                            View All Plots <ArrowRight size={15} />
                        </Link>
                    </FadeIn>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}
                >
                    {featured.map((plot) => (
                        <Link key={plot.id} href={`/plots/${plot.id}`} style={{ textDecoration: 'none' }}>
                            <PlotCard plot={plot} />
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
