'use client';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Maximize2, Road, ChevronLeft, ChevronRight, Phone, MessageCircle, Check, ArrowLeft, Eye } from 'lucide-react';
import { plots } from '@/lib/data';
import FadeIn from '@/components/FadeIn';

function GallerySwiper({ images }) {
    const [idx, setIdx] = useState(0);
    const [dir, setDir] = useState(1);

    const go = (d) => {
        setDir(d);
        setIdx(p => (p + d + images.length) % images.length);
    };

    return (
        <div style={{ position: 'relative', height: 460, background: '#111', borderRadius: 14, overflow: 'hidden' }}>
            <AnimatePresence mode="wait" custom={dir}>
                <motion.img
                    key={idx}
                    src={images[idx]}
                    alt={`Plot image ${idx + 1}`}
                    custom={dir}
                    initial={{ opacity: 0, x: dir * 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -dir * 50 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }}
                />
            </AnimatePresence>
            {images.length > 1 && (
                <>
                    <button onClick={() => go(-1)} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', width: 42, height: 42, borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                        <ChevronLeft size={20} color="#1B4F8A" />
                    </button>
                    <button onClick={() => go(1)} style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', width: 42, height: 42, borderRadius: '50%', background: 'rgba(255,255,255,0.9)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}>
                        <ChevronRight size={20} color="#1B4F8A" />
                    </button>
                    <div style={{ position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6, zIndex: 2 }}>
                        {images.map((_, i) => (
                            <button key={i} onClick={() => { setDir(i > idx ? 1 : -1); setIdx(i); }}
                                style={{ width: i === idx ? 24 : 8, height: 8, borderRadius: 4, background: i === idx ? '#E63329' : 'rgba(255,255,255,0.6)', border: 'none', cursor: 'pointer', transition: 'all 0.4s' }} />
                        ))}
                    </div>
                </>
            )}
            <div style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(0,0,0,0.5)', borderRadius: 6, padding: '4px 12px', fontSize: 13, color: '#fff' }}>
                {idx + 1} / {images.length}
            </div>
        </div>
    );
}

export default function PlotDetailPage({ params }) {
    const plot = plots.find(p => p.id === params.id);
    if (!plot) notFound();

    const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '', siteVisit: false });
    const [submitted, setSubmitted] = useState(false);

    const similar = plots.filter(p => p.id !== plot.id && p.purpose === plot.purpose).slice(0, 3);

    const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };

    return (
        <div style={{ paddingTop: 72, background: '#F9FAFB', minHeight: '100vh' }}>
            {/* Breadcrumb */}
            <div style={{ background: '#fff', borderBottom: '1px solid #E5E7EB', padding: '12px 0' }}>
                <div className="container-site" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#6B7280' }}>
                    <Link href="/plots" style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#1B4F8A', fontWeight: 600 }}>
                        <ArrowLeft size={14} /> All Plots
                    </Link>
                    <span>›</span>
                    <span>{plot.location}</span>
                    <span>›</span>
                    <span style={{ color: '#111827' }}>{plot.title}</span>
                </div>
            </div>

            <div className="container-site" style={{ paddingTop: 36, paddingBottom: 80 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: 36, alignItems: 'flex-start' }}>

                    {/* LEFT */}
                    <div>
                        {/* Gallery */}
                        <FadeIn>
                            <GallerySwiper images={plot.images} />
                        </FadeIn>

                        {/* Info header */}
                        <FadeIn delay={0.1} style={{ marginTop: 28 }}>
                            <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap' }}>
                                <span className="badge" style={{ background: plot.purpose === 'residential' ? '#1B4F8A' : plot.purpose === 'commercial' ? '#E63329' : '#D4A843', color: '#fff' }}>
                                    {plot.purpose}
                                </span>
                                {plot.featured && <span className="badge badge-gold">Featured</span>}
                                <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: '#9CA3AF', marginLeft: 'auto' }}>
                                    <Eye size={13} />{plot.views} views
                                </span>
                            </div>
                            <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 900, color: '#111827', lineHeight: 1.25, marginBottom: 12 }}>{plot.title}</h1>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#6B7280', fontSize: 15, marginBottom: 20 }}>
                                <MapPin size={15} style={{ color: '#E63329' }} /> {plot.location}, Thrissur
                            </div>

                            {/* Specs grid */}
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 28 }}>
                                {[
                                    { label: 'Price/Cent', value: `₹${plot.price}L`, icon: '💰' },
                                    { label: 'Total Size', value: `${plot.size} ${plot.sizeUnit}`, icon: '📐' },
                                    { label: 'Dimensions', value: plot.dimensions, icon: '📏' },
                                    { label: 'Road Access', value: plot.roadAccess, icon: '🛣️' },
                                ].map(s => (
                                    <div key={s.label} style={{ background: '#fff', borderRadius: 10, padding: '16px 14px', textAlign: 'center', boxShadow: '0 2px 8px rgba(27,79,138,0.06)', border: '1px solid #E5E7EB' }}>
                                        <div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div>
                                        <div style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginBottom: 2 }}>{s.value}</div>
                                        <div style={{ fontSize: 11, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        {/* Description */}
                        <FadeIn delay={0.15}>
                            <div style={{ background: '#fff', borderRadius: 12, padding: '24px', marginBottom: 24, boxShadow: '0 2px 8px rgba(27,79,138,0.06)', border: '1px solid #E5E7EB' }}>
                                <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 14 }}>About This Plot</h2>
                                <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.85 }}>{plot.description}</p>
                            </div>
                        </FadeIn>

                        {/* Nearby Landmarks */}
                        <FadeIn delay={0.2}>
                            <div style={{ background: '#fff', borderRadius: 12, padding: '24px', marginBottom: 24, boxShadow: '0 2px 8px rgba(27,79,138,0.06)', border: '1px solid #E5E7EB' }}>
                                <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 16 }}>Nearby Landmarks</h2>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                                    {plot.nearbyPlaces.map(place => (
                                        <div key={place.name} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: '#F9FAFB', borderRadius: 8 }}>
                                            <MapPin size={14} style={{ color: '#2C9BE8', flexShrink: 0 }} />
                                            <div>
                                                <div style={{ fontSize: 14, fontWeight: 600, color: '#111827' }}>{place.name}</div>
                                                <div style={{ fontSize: 12, color: '#9CA3AF' }}>{place.distance} away</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>

                        {/* Legal highlights */}
                        <FadeIn delay={0.25}>
                            <div style={{ background: '#EBF5FD', borderRadius: 12, padding: '24px', border: '1px solid rgba(27,79,138,0.15)' }}>
                                <h2 style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 16 }}>✅ Legal & Documentation Highlights</h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                                    {plot.legalHighlights.map((h) => (
                                        <div key={h} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                            <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#1B4F8A', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                <Check size={13} color="#fff" strokeWidth={3} />
                                            </div>
                                            <span style={{ fontSize: 14, color: '#374151' }}>{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* RIGHT – Sticky enquiry form */}
                    <div style={{ position: 'sticky', top: 90 }}>
                        {/* Price card */}
                        <div style={{ background: '#1B4F8A', borderRadius: 14, padding: '20px 24px', marginBottom: 16, color: '#fff' }}>
                            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', marginBottom: 6 }}>Price per Cent</div>
                            <div style={{ fontSize: 36, fontWeight: 900, marginBottom: 4 }}>₹{plot.price}L</div>
                            <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)' }}>Total ≈ ₹{(plot.price * plot.size).toFixed(0)}L for {plot.size} {plot.sizeUnit}</div>
                        </div>

                        {/* Quick actions */}
                        <div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
                            <a href="tel:+919876543210" className="btn btn-outline-navy" style={{ flex: 1, justifyContent: 'center', fontSize: 14 }}>
                                <Phone size={15} /> Call
                            </a>
                            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '12px 10px', background: '#25D366', color: '#fff', borderRadius: 6, fontSize: 14, fontWeight: 600 }}>
                                <MessageCircle size={15} /> WhatsApp
                            </a>
                        </div>

                        {/* Enquiry form */}
                        <div style={{ background: '#fff', borderRadius: 14, padding: '24px', boxShadow: '0 8px 32px rgba(27,79,138,0.1)', border: '1px solid #E5E7EB' }}>
                            {submitted ? (
                                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                                    <div style={{ fontSize: 48, marginBottom: 12 }}>🎉</div>
                                    <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Enquiry Sent!</h3>
                                    <p style={{ fontSize: 14, color: '#6B7280' }}>We'll call you back within 2 hours.</p>
                                </div>
                            ) : (
                                <>
                                    <h3 style={{ fontSize: 17, fontWeight: 700, color: '#111827', marginBottom: 16 }}>Enquire About This Plot</h3>
                                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                                        <input required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} placeholder="Your Name" className="input-base" />
                                        <input required type="tel" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} placeholder="Phone Number" className="input-base" />
                                        <input type="email" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} placeholder="Email (optional)" className="input-base" />
                                        <textarea value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} placeholder="Any specific questions?" rows={3} className="input-base" style={{ resize: 'vertical' }} />
                                        <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                                            <input type="checkbox" checked={formData.siteVisit} onChange={e => setFormData(p => ({ ...p, siteVisit: e.target.checked }))} style={{ accentColor: '#1B4F8A', width: 16, height: 16 }} />
                                            <span style={{ fontSize: 13, color: '#374151' }}>Request a free site visit</span>
                                        </label>
                                        <button type="submit" className="btn btn-coral" style={{ justifyContent: 'center', marginTop: 4 }}>Send Enquiry</button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Similar plots */}
                {similar.length > 0 && (
                    <div style={{ marginTop: 64 }}>
                        <FadeIn>
                            <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 900, color: '#111827', marginBottom: 28 }}>
                                Similar <em style={{ color: '#1B4F8A' }}>Plots Near You</em>
                            </h2>
                        </FadeIn>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
                            {similar.map((p, i) => (
                                <FadeIn key={p.id} delay={i * 0.1}>
                                    <Link href={`/plots/${p.id}`}>
                                        <div className="card" style={{ cursor: 'pointer' }}
                                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                                            onMouseLeave={e => e.currentTarget.style.transform = 'none'}
                                        >
                                            <div style={{ height: 180, overflow: 'hidden' }}>
                                                <img src={p.images[0]} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <div style={{ padding: '14px 16px' }}>
                                                <div style={{ fontSize: 12, color: '#9CA3AF', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
                                                    <MapPin size={11} style={{ color: '#E63329' }} />{p.location}
                                                </div>
                                                <h3 style={{ fontSize: 14, fontWeight: 700, color: '#111827', marginBottom: 6, lineHeight: 1.35 }}>{p.title}</h3>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <span style={{ fontSize: 18, fontWeight: 800, color: '#1B4F8A' }}>₹{p.price}L</span>
                                                    <span style={{ fontSize: 12, color: '#9CA3AF' }}>{p.size} {p.sizeUnit}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
