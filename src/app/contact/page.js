'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Mail, Send, Check, Clock, Star } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', phone: '', email: '', purpose: '', location: '', message: '', siteVisit: false, date: '' });
    const [submitted, setSubmitted] = useState(false);

    const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

    const submit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const contacts = [
        { icon: Phone, label: 'Call Us', value: '+91 98765 43210', sub: 'Mon–Sat, 9am–7pm', href: 'tel:+919876543210', color: '#1B4F8A' },
        { icon: MessageCircle, label: 'WhatsApp', value: '+91 98765 43210', sub: 'Quick replies within 1hr', href: 'https://wa.me/919876543210', color: '#25D366' },
        { icon: Mail, label: 'Email Us', value: 'info@tcrplots.com', sub: 'We reply within 24hrs', href: 'mailto:info@tcrplots.com', color: '#E63329' },
        { icon: MapPin, label: 'Visit Us', value: 'Near Round South, Thrissur – 680001', sub: 'Open 6 days a week', href: '#', color: '#2C9BE8' },
    ];

    return (
        <div style={{ paddingTop: 72 }}>
            {/* Header */}
            <section style={{ background: 'linear-gradient(135deg, #071b38 0%, #1B4F8A 100%)', padding: '80px 0 64px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
                    <FadeIn><div className="tag" style={{ color: '#2C9BE8', marginBottom: 16 }}>Get In Touch</div></FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(2.2rem,5vw,3.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.2, maxWidth: 600, marginBottom: 16 }}>
                            Let's Find Your<br /><em style={{ color: '#2C9BE8' }}>Dream Plot Together</em>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', maxWidth: 480, lineHeight: 1.8 }}>
                            Whether you're buying, selling, or just exploring — our experts are here 6 days a week.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Contact cards */}
            <section style={{ background: '#fff', padding: '60px 0' }}>
                <div className="container-site">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 64 }}>
                        {contacts.map((c, i) => (
                            <FadeIn key={c.label} delay={i * 0.08}>
                                <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                                    <div className="card" style={{ padding: '24px 20px', textAlign: 'center', cursor: 'pointer', transition: 'transform 0.3s, box-shadow 0.3s' }}
                                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderTop = `3px solid ${c.color}`; }}
                                        onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderTop = 'none'; }}
                                    >
                                        <div style={{ width: 56, height: 56, borderRadius: '50%', background: `${c.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                                            <c.icon size={24} style={{ color: c.color }} />
                                        </div>
                                        <div style={{ fontSize: 14, fontWeight: 600, color: '#9CA3AF', marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{c.label}</div>
                                        <div style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginBottom: 4 }}>{c.value}</div>
                                        <div style={{ fontSize: 12, color: '#9CA3AF' }}>{c.sub}</div>
                                    </div>
                                </a>
                            </FadeIn>
                        ))}
                    </div>

                    {/* Form + Map grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'flex-start' }}>
                        {/* Form */}
                        <FadeIn direction="right">
                            <div style={{ background: '#F9FAFB', borderRadius: 16, padding: '36px 32px' }}>
                                <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 22, fontWeight: 900, color: '#111827', marginBottom: 6 }}>Send Us an Enquiry</h2>
                                <p style={{ fontSize: 14, color: '#6B7280', marginBottom: 28 }}>Fill in the form and we'll get back within 2 hours on working days.</p>

                                {submitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        style={{ textAlign: 'center', padding: '40px 20px' }}
                                    >
                                        <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                                            <Check size={32} color="#fff" strokeWidth={3} />
                                        </div>
                                        <h3 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 8 }}>Message Received! 🎉</h3>
                                        <p style={{ color: '#6B7280' }}>Our team will reach you within 2 hours. Thank you!</p>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                                            <input required value={form.name} onChange={e => set('name', e.target.value)} placeholder="Full Name *" className="input-base" />
                                            <input required type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="Phone Number *" className="input-base" />
                                        </div>
                                        <input type="email" value={form.email} onChange={e => set('email', e.target.value)} placeholder="Email Address" className="input-base" />
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                                            <select value={form.purpose} onChange={e => set('purpose', e.target.value)} className="select-base">
                                                <option value="">Purpose</option>
                                                <option>Buying a Plot</option>
                                                <option>Selling a Plot</option>
                                                <option>Investment Query</option>
                                                <option>Legal Help</option>
                                                <option>General Enquiry</option>
                                            </select>
                                            <select value={form.location} onChange={e => set('location', e.target.value)} className="select-base">
                                                <option value="">Preferred Area</option>
                                                {['Thrissur City', 'Ollur', 'Guruvayur', 'Chalakudy', 'Irinjalakuda', 'Kunnamkulam'].map(l => <option key={l}>{l}</option>)}
                                            </select>
                                        </div>
                                        <textarea value={form.message} onChange={e => set('message', e.target.value)} placeholder="Your message or question..." rows={3} className="input-base" style={{ resize: 'vertical' }} />

                                        <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', padding: '12px 14px', background: '#EBF5FD', borderRadius: 8 }}>
                                            <input type="checkbox" checked={form.siteVisit} onChange={e => set('siteVisit', e.target.checked)} style={{ accentColor: '#1B4F8A', width: 16, height: 16 }} />
                                            <span style={{ fontSize: 14, color: '#374151', fontWeight: 500 }}>📅 I'd like to schedule a free site visit</span>
                                        </label>

                                        {form.siteVisit && (
                                            <motion.input
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                type="date"
                                                value={form.date}
                                                onChange={e => set('date', e.target.value)}
                                                className="input-base"
                                                min={new Date().toISOString().split('T')[0]}
                                            />
                                        )}

                                        <button type="submit" className="btn btn-coral" style={{ justifyContent: 'center', gap: 8 }}>
                                            <Send size={16} /> Send Message
                                        </button>
                                    </form>
                                )}
                            </div>
                        </FadeIn>

                        {/* Info + Map */}
                        <FadeIn direction="left" delay={0.1}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                                {/* Quick facts */}
                                <div style={{ background: '#071b38', borderRadius: 14, padding: '24px' }}>
                                    <h3 style={{ color: '#fff', fontWeight: 700, fontSize: 16, marginBottom: 16 }}>⚡ We're Known For Fast Response</h3>
                                    {[
                                        { icon: Clock, text: 'Average callback time: Under 2 hours', color: '#2C9BE8' },
                                        { icon: Star, text: '98% client satisfaction rate', color: '#D4A843' },
                                        { icon: Check, text: 'Zero hidden fees – no brokerage', color: '#22C55E' },
                                        { icon: MapPin, text: 'Site visits arranged 6 days a week', color: '#E63329' },
                                    ].map(({ icon: Icon, text, color }) => (
                                        <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                                            <div style={{ width: 34, height: 34, borderRadius: 8, background: `${color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                <Icon size={16} style={{ color }} />
                                            </div>
                                            <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>{text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Map embed */}
                                <div style={{ borderRadius: 14, overflow: 'hidden', height: 320, border: '1px solid #E5E7EB' }}>
                                    <iframe
                                        title="TCR Plots Office Location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.9302!2d76.2144!3d10.5276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7ef5eba04e46b%3A0x4bd1c98ba4c0f88b!2sThrissur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
                                        width="100%" height="100%"
                                        style={{ border: 0 }}
                                        loading="lazy"
                                        allowFullScreen
                                        referrerPolicy="no-referrer-when-downgrade"
                                    />
                                </div>

                                <div style={{ background: '#F9FAFB', borderRadius: 12, padding: '18px 20px', border: '1px solid #E5E7EB' }}>
                                    <p style={{ fontSize: 14, fontWeight: 700, color: '#111827', marginBottom: 6 }}>📍 Office Address</p>
                                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7 }}>Near Round South, Museum Road,<br />Thrissur, Kerala – 680001</p>
                                    <p style={{ fontSize: 13, color: '#9CA3AF', marginTop: 8 }}>Office Hours: Mon–Sat, 9:00am – 7:00pm</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>
        </div>
    );
}
