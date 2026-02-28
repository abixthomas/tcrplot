'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/lib/data';
import FadeIn from '@/components/FadeIn';

export default function Testimonials() {
    const [active, setActive] = useState(0);
    const [dir, setDir] = useState(1);

    useEffect(() => {
        const t = setInterval(() => { setDir(1); setActive(p => (p + 1) % testimonials.length); }, 5000);
        return () => clearInterval(t);
    }, []);

    const go = (d) => {
        setDir(d);
        setActive(p => (p + d + testimonials.length) % testimonials.length);
    };

    const handleDragEnd = (e, { offset, velocity }) => {
        const swipe = offset.x;
        // If they drag far enough or fast enough
        if (swipe < -40 || velocity.x < -400) {
            go(1); // Swipe left -> next
        } else if (swipe > 40 || velocity.x > 400) {
            go(-1); // Swipe right -> prev
        }
    };

    const t = testimonials[active];

    return (
        <section style={{ background: '#F9FAFB', paddingTop: 96, paddingBottom: 96 }}>
            <div className="container-site">
                {/* Header */}
                <div style={{ textAlign: 'center', marginBottom: 56 }}>
                    <FadeIn><div className="tag" style={{ justifyContent: 'center', marginBottom: 14 }}>Client Stories</div></FadeIn>
                    <FadeIn delay={0.1}>
                        <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 900, color: '#111827', lineHeight: 1.25 }}>
                            What Our Clients <em style={{ color: '#1B4F8A' }}>Say About Us</em>
                        </h2>
                    </FadeIn>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 32, alignItems: 'center', maxWidth: 960, margin: '0 auto' }}>
                    {/* Avatar column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        {testimonials.map((tes, i) => (
                            <button
                                key={tes.id}
                                onClick={() => { setDir(i > active ? 1 : -1); setActive(i); }}
                                style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', borderRadius: 10, border: `2px solid ${i === active ? '#1B4F8A' : 'transparent'}`, background: i === active ? '#EBF5FD' : '#fff', cursor: 'pointer', transition: 'all 0.2s', textAlign: 'left', boxShadow: i === active ? '0 4px 16px rgba(27,79,138,0.12)' : 'none' }}
                            >
                                <img src={tes.avatar} alt={tes.name} style={{ width: 44, height: 44, borderRadius: '50%', objectFit: 'cover', flexShrink: 0, border: `2px solid ${i === active ? '#1B4F8A' : '#E5E7EB'}` }} />
                                <div>
                                    <div style={{ fontSize: 14, fontWeight: 700, color: i === active ? '#1B4F8A' : '#374151' }}>{tes.name}</div>
                                    <div style={{ fontSize: 12, color: '#9CA3AF' }}>{tes.role}</div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Testimonial card */}
                    <div style={{ position: 'relative', minHeight: 280, overflow: 'hidden' }}>
                        <AnimatePresence mode="wait" custom={dir}>
                            <motion.div
                                key={active}
                                custom={dir}
                                initial={{ opacity: 0, x: dir * 60 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -dir * 60 }}
                                transition={{ duration: 0.42, ease: [0.25, 0.46, 0.45, 0.94] }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={0.8}
                                onDragEnd={handleDragEnd}
                                whileTap={{ cursor: 'grabbing' }}
                                style={{ background: '#fff', borderRadius: 16, padding: 36, boxShadow: '0 4px 32px rgba(27,79,138,0.1)', border: '1px solid #E5E7EB', cursor: 'grab', touchAction: 'none' }}
                            >
                                {/* Quote icon */}
                                <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#EBF5FD', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                                    <Quote size={22} style={{ color: '#1B4F8A' }} />
                                </div>

                                {/* Stars */}
                                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                                    {Array(5).fill(0).map((_, i) => (
                                        <Star key={i} size={16} style={{ color: '#D4A843', fill: '#D4A843' }} />
                                    ))}
                                </div>

                                <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.85, marginBottom: 24, fontStyle: 'italic' }}>"{t.text}"</p>

                                <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                                    <img src={t.avatar} alt={t.name} style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', border: '3px solid #1B4F8A' }} />
                                    <div>
                                        <div style={{ fontSize: 16, fontWeight: 700, color: '#111827' }}>{t.name}</div>
                                        <div style={{ fontSize: 13, color: '#9CA3AF' }}>{t.role} · {t.location}</div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Prev/Next */}
                        <div style={{ position: 'absolute', bottom: 24, right: 20, display: 'flex', gap: 8 }}>
                            {[{ d: -1, Icon: ChevronLeft }, { d: 1, Icon: ChevronRight }].map(({ d, Icon }) => (
                                <button key={d} onClick={() => go(d)}
                                    style={{ width: 38, height: 38, borderRadius: '50%', border: '1.5px solid #E5E7EB', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
                                    onMouseEnter={e => { e.currentTarget.style.background = '#1B4F8A'; e.currentTarget.style.borderColor = '#1B4F8A'; e.currentTarget.querySelector('svg').setAttribute('color', '#fff'); }}
                                    onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#E5E7EB'; e.currentTarget.querySelector('svg').setAttribute('color', '#374151'); }}
                                >
                                    <Icon size={18} color="#374151" />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
