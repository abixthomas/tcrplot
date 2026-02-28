'use client';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const infraStats = [
    { num: '₹4,200 Cr', label: 'NH Development Investment', color: '#1B4F8A' },
    { num: '8%', label: 'Annual Land Appreciation', color: '#E63329' },
    { num: '3rd', label: 'Largest City in Kerala', color: '#2C9BE8' },
    { num: '12 Lakh+', label: 'District Population', color: '#D4A843' },
];

const highlights = [
    { title: 'Thrissur Pooram', emoji: '🐘', desc: 'The world\'s grandest temple festival brings half a million people annually — driving tourism, commerce, and land demand.' },
    { title: 'Vadakkumnathan Temple', emoji: '⛩️', desc: 'A UNESCO tentative listed Shiva temple at the city center, the soul of Thrissur\'s spiritual and cultural identity.' },
    { title: 'Cultural Capital', emoji: '🎭', desc: 'Kerala Sangeetha Nataka Akademi, Thrissur Sangeetholsavam, and 100+ arts institutions make it a cultural powerhouse.' },
    { title: 'Education Hub', emoji: '🎓', desc: 'IMA Thalappilly, Kerala Agricultural University, Sahrdaya Engineering College — top institutions attract migrants who boost land demand.' },
    { title: 'Healthcare Excellence', emoji: '🏥', desc: 'Amala Hospital, Jubilee Mission, PVS Memorial — Thrissur is a medical tourism hub drawing patients from across South India.' },
    { title: 'Rapid Connectivity', emoji: '🛣️', desc: 'NH-544 upgrade, new bypass, proposed Metro Rail Phase — infrastructure investments are accelerating property appreciation.' },
];

const gallery = [
    { img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600&auto=format&fit=crop', title: 'Thrissur Pooram Festival', span: 2 },
    { img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&auto=format&fit=crop', title: 'Lush Green Landscape', span: 1 },
    { img: 'https://images.unsplash.com/photo-1549517045-bc93de075e53?w=400&auto=format&fit=crop', title: 'Growing Infrastructure', span: 1 },
    { img: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=400&auto=format&fit=crop', title: 'Residential Developments', span: 1 },
    { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&auto=format&fit=crop', title: 'Agricultural Land', span: 1 },
];

export default function WhyThrissurPage() {
    return (
        <div style={{ paddingTop: 72 }}>
            {/* Hero */}
            <section style={{ position: 'relative', height: '72vh', minHeight: 500, overflow: 'hidden', display: 'flex', alignItems: 'flex-end' }}>
                <img src="https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1920&auto=format&fit=crop" alt="Thrissur" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,27,56,0.97) 0%, rgba(7,27,56,0.5) 50%, rgba(7,27,56,0.2) 100%)' }} />
                <div className="container-site" style={{ position: 'relative', zIndex: 1, paddingBottom: 80 }}>
                    <FadeIn><div className="tag" style={{ color: '#2C9BE8', marginBottom: 16 }}>Kerala's Cultural Capital</div></FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(2.5rem,6vw,4.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.18, marginBottom: 20 }}>
                            Why Invest in<br /><em style={{ color: '#2C9BE8' }}>Thrissur?</em>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 540, lineHeight: 1.8 }}>
                            Heritage, growth, connectivity and culture — Thrissur is not just a city. It's a legacy that appreciates in value every year.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Stats strip */}
            <section style={{ background: '#fff', paddingTop: 0 }}>
                <div className="container-site">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', boxShadow: '0 8px 40px rgba(27,79,138,0.12)', borderRadius: 14, overflow: 'hidden', transform: 'translateY(-40px)' }}>
                        {infraStats.map((s, i) => (
                            <div key={s.label} style={{ padding: '28px 20px', textAlign: 'center', background: '#fff', borderRight: i < 3 ? '1px solid #F3F4F6' : 'none' }}>
                                <div style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontWeight: 900, color: s.color }}>{s.num}</div>
                                <div style={{ fontSize: 12, color: '#9CA3AF', marginTop: 6, fontWeight: 500 }}>{s.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cultural highlights */}
            <section style={{ background: '#F9FAFB', padding: '64px 0 80px' }}>
                <div className="container-site">
                    <div style={{ textAlign: 'center', marginBottom: 52 }}>
                        <FadeIn><div className="tag" style={{ justifyContent: 'center', marginBottom: 14 }}>Rich Heritage</div></FadeIn>
                        <FadeIn delay={0.1}><h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 900, color: '#111827', lineHeight: 1.25 }}>
                            A City That Never Stops <em style={{ color: '#1B4F8A' }}>Growing</em>
                        </h2></FadeIn>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
                        {highlights.map((h, i) => (
                            <FadeIn key={h.title} delay={i * 0.08}>
                                <div className="card" style={{ padding: '28px 24px', display: 'flex', gap: 16 }}>
                                    <div style={{ fontSize: 36, flexShrink: 0 }}>{h.emoji}</div>
                                    <div>
                                        <h3 style={{ fontSize: 17, fontWeight: 700, color: '#111827', marginBottom: 8 }}>{h.title}</h3>
                                        <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.75 }}>{h.desc}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section style={{ background: '#fff', padding: '80px 0' }}>
                <div className="container-site">
                    <FadeIn>
                        <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 900, color: '#111827', textAlign: 'center', marginBottom: 40 }}>
                            Life in <em style={{ color: '#1B4F8A' }}>Thrissur</em>
                        </h2>
                    </FadeIn>
                    <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gridTemplateRows: '220px 220px', gap: 12 }}>
                        {gallery.map((g, i) => (
                            <FadeIn key={g.title} delay={i * 0.1}>
                                <div style={{ borderRadius: 10, overflow: 'hidden', gridColumn: i === 0 ? 'span 2' : 'span 1', position: 'relative', height: '100%', gridRow: i === 0 ? 'span 2' : 'span 1' }}>
                                    <img src={g.img} alt={g.title} className="gallery-img-hover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(7,27,56,0.8) 0%, transparent 100%)', padding: '16px 14px 12px' }}>
                                        <span style={{ fontSize: 13, color: '#fff', fontWeight: 600 }}>{g.title}</span>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ background: '#1B4F8A', padding: '72px 0', textAlign: 'center' }}>
                <FadeIn>
                    <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 900, color: '#fff', marginBottom: 20 }}>
                        Invest Where Culture Meets Growth
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 16, maxWidth: 480, margin: '0 auto 36px', lineHeight: 1.8 }}>
                        Browse verified plots in Thrissur — from residential to investment grade land.
                    </p>
                    <Link href="/plots" className="btn" style={{ background: '#E63329', color: '#fff', fontWeight: 700 }}>Explore Plots <ArrowRight size={16} /></Link>
                </FadeIn>
            </section>
        </div>
    );
}
