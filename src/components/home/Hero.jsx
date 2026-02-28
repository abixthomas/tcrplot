'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Search, ArrowRight, Phone, MessageCircle } from 'lucide-react';

const slides = [
    {
        img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1920&auto=format&fit=crop',
        label: 'Cultural Capital of Kerala',
        title: `Own Land in\nThrissur's Heart`,
        sub: 'The city of Thrissur Pooram, rich heritage, and fast-rising real estate value.',
    },
    {
        img: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&auto=format&fit=crop',
        label: 'Premium Land Deals',
        title: 'Your Dream Plot\nAwaits Here',
        sub: 'Verified, clear-title plots across Thrissur with full legal support.',
    },
    {
        img: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=1920&auto=format&fit=crop',
        label: '25+ Years of Trust',
        title: 'Invest Smart,\nInvest in Thrissur',
        sub: 'Land here appreciates 8% annually. Backed by 25 years of local expertise.',
    },
];

const floatStats = [
    { num: '1,200+', label: 'Plots Sold' },
    { num: '25+', label: 'Years' },
    { num: '1,000+', label: 'Families' },
    { num: '98%', label: 'Satisfaction' },
];

export default function Hero() {
    const [active, setActive] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const t = setInterval(() => setActive(p => (p + 1) % slides.length), 5500);
        return () => clearInterval(t);
    }, []);

    const slide = slides[active];

    return (
        <section style={{ position: 'relative', height: '100vh', minHeight: 640, overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
            {/* Background slides */}
            {slides.map((s, i) => (
                <motion.div
                    key={i}
                    animate={{ opacity: i === active ? 1 : 0 }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                    style={{ position: 'absolute', inset: 0 }}
                >
                    <img src={s.img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,27,56,0.97) 0%, rgba(7,27,56,0.65) 45%, rgba(7,27,56,0.3) 100%)' }} />
                </motion.div>
            ))}

            {/* Content gap */}
            <div className="container-site" style={{ position: 'relative', zIndex: 10, paddingBottom: 110, paddingTop: 100 }}>
                {mounted && (
                    <>
                        {/* Slide label */}
                        <motion.div
                            key={`label-${active}`}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="tag"
                            style={{ color: '#2C9BE8', marginBottom: 20 }}
                        >
                            {slide.label}
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            key={`h1-${active}`}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(2.4rem,5.5vw,4.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.18, marginBottom: 20, whiteSpace: 'pre-line' }}
                        >
                            {slide.title}
                        </motion.h1>

                        <motion.p
                            key={`sub-${active}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            style={{ fontSize: 18, color: 'rgba(255,255,255,0.72)', maxWidth: 520, lineHeight: 1.7, marginBottom: 36 }}
                        >
                            {slide.sub}
                        </motion.p>

                        {/* CTA row */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 40 }}
                        >
                            <Link href="/plots" className="btn btn-coral" style={{ fontWeight: 700 }}>
                                Search Plots <ArrowRight size={16} />
                            </Link>
                            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 24px', background: '#25D366', color: '#fff', borderRadius: 6, fontWeight: 600, fontSize: 15 }}>
                                <MessageCircle size={17} /> WhatsApp
                            </a>
                            <a href="tel:+919876543210" className="btn btn-outline-white">
                                <Phone size={16} /> Call Now
                            </a>
                        </motion.div>

                        {/* Search bar */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(20px)', borderRadius: 12, padding: 8, display: 'flex', width: '100%', flexWrap: 'wrap', alignItems: 'center', gap: 8, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
                        >
                            {/* Location */}
                            <div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: 8, padding: '10px 16px', borderRight: '1px solid #E5E7EB', minWidth: 200 }}>
                                <MapPin size={18} style={{ color: '#1B4F8A', flexShrink: 0 }} />
                                <select className="select-base" style={{ border: 'none', padding: 0, background: 'transparent', fontSize: 15, backgroundImage: 'none', width: '100%', cursor: 'pointer', outline: 'none' }}>
                                    <option value="">All Locations</option>
                                    {['Thrissur City', 'Ollur', 'Guruvayur', 'Chalakudy', 'Irinjalakuda', 'Kodungallur', 'Kunnamkulam'].map(l => (
                                        <option key={l} value={l}>{l}</option>
                                    ))}
                                </select>
                            </div>
                            {/* Type */}
                            <div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: 8, padding: '10px 16px', borderRight: '1px solid #E5E7EB', minWidth: 160 }}>
                                <select className="select-base" style={{ border: 'none', padding: 0, background: 'transparent', fontSize: 15, backgroundImage: 'none', width: '100%', cursor: 'pointer', outline: 'none' }}>
                                    <option value="">Property Type</option>
                                    <option value="residential">Residential</option>
                                    <option value="commercial">Commercial</option>
                                    <option value="investment">Investment</option>
                                </select>
                            </div>
                            {/* Budget */}
                            <div style={{ display: 'flex', flex: 1, alignItems: 'center', gap: 8, padding: '10px 16px', minWidth: 160 }}>
                                <select className="select-base" style={{ border: 'none', padding: 0, background: 'transparent', fontSize: 15, backgroundImage: 'none', width: '100%', cursor: 'pointer', outline: 'none' }}>
                                    <option value="">Any Budget</option>
                                    <option value="0-30">Under ₹30L/cent</option>
                                    <option value="30-60">₹30L – ₹60L</option>
                                    <option value="60-100">₹60L – ₹1Cr</option>
                                    <option value="100+">Above ₹1Cr</option>
                                </select>
                            </div>
                            <Link href="/plots" className="btn btn-navy" style={{ borderRadius: 8, gap: 8, padding: '12px 32px', height: '100%', flexShrink: 0 }}>
                                <Search size={17} /> Search
                            </Link>
                        </motion.div>
                    </>
                )}
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                style={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, zIndex: 10 }}
            >
                <span style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>Scroll</span>
                <div style={{ width: 1, height: 24, background: 'linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)' }} />
            </motion.div>

            {/* Slide dots */}
            <div style={{ position: 'absolute', bottom: 28, right: 32, display: 'flex', gap: 8, zIndex: 10 }}>
                {slides.map((_, i) => (
                    <button key={i} onClick={() => setActive(i)} aria-label={`Slide ${i + 1}`}
                        style={{ width: i === active ? 28 : 8, height: 8, borderRadius: 4, background: i === active ? '#E63329' : 'rgba(255,255,255,0.4)', border: 'none', cursor: 'pointer', transition: 'all 0.4s ease' }} />
                ))}
            </div>

        </section>
    );
}
