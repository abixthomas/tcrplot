'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Twitter, ArrowRight } from 'lucide-react';

const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'All Plots', href: '/plots' },
    { label: 'Services', href: '/services' },
    { label: 'Why Thrissur', href: '/why-thrissur' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
];

const plotLinks = [
    { label: 'Residential Plots', href: '/plots?purpose=residential' },
    { label: 'Commercial Plots', href: '/plots?purpose=commercial' },
    { label: 'Investment Land', href: '/plots?purpose=investment' },
    { label: 'Featured Plots', href: '/plots?featured=true' },
];

const areas = ['Thrissur City', 'Ollur', 'Guruvayur', 'Chalakudy', 'Irinjalakuda', 'Kodungallur', 'Kunnamkulam'];

const socials = [
    { Icon: Facebook, label: 'Facebook', href: '#' },
    { Icon: Instagram, label: 'Instagram', href: '#' },
    { Icon: Youtube, label: 'Youtube', href: '#' },
    { Icon: Twitter, label: 'Twitter', href: '#' },
];

export default function Footer() {
    const [mounted, setMounted] = useState(false);
    useEffect(() => setMounted(true), []);

    return (
        <footer style={{ background: '#071b38', color: '#fff' }}>
            {/* Top gradient line */}
            <div style={{ height: 3, background: 'linear-gradient(90deg, #E63329, #1B4F8A, #2C9BE8)' }} />

            <div className="container-site" style={{ paddingTop: 80, paddingBottom: 60 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px 40px' }}>

                    {/* Brand */}
                    <div style={{ gridColumn: 'span 1' }}>
                        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                            <div style={{ width: 40, height: 40, flexShrink: 0 }}>
                                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                                    <circle cx="50" cy="50" r="47" stroke="#2C9BE8" strokeWidth="3" fill="none" />
                                    <path d="M50 18 L74 42 L74 72 L26 72 L26 42 Z" fill="#1B4F8A" />
                                    <path d="M35 72 L35 85 L65 85 L65 72" fill="#1B4F8A" />
                                    <rect x="44" y="54" width="12" height="18" fill="#2C9BE8" />
                                    <path d="M50 18 L74 42 L26 42 Z" fill="#2C9BE8" />
                                    <path d="M43 14 L57 14 L57 25 L50 18 Z" fill="#E63329" />
                                    <path d="M18 61 Q35 68 50 64 Q65 60 82 67" stroke="#E63329" strokeWidth="3" fill="none" strokeLinecap="round" />
                                    <path d="M16 72 Q36 81 50 77 Q64 73 84 80" stroke="#2C9BE8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div>
                                <div style={{ fontWeight: 800, fontSize: 20, color: '#fff', lineHeight: 1.1 }}>TCR<span style={{ color: '#E63329' }}>plots</span></div>
                                <div style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>Thrissur Premium Land</div>
                            </div>
                        </Link>
                        <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: 24 }}>
                            Your most trusted partner for premium land in Thrissur. Transparent deals, verified plots, end-to-end support since 1998.
                        </p>
                        <div style={{ display: 'flex', gap: 10 }}>
                            {socials.map(({ Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    style={{ width: 36, height: 36, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.55)', transition: 'all 0.2s' }}
                                    onMouseEnter={e => { e.currentTarget.style.color = '#D4A843'; e.currentTarget.style.borderColor = '#D4A843'; }}
                                    onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2C9BE8', marginBottom: 20 }}>Quick Links</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s' }}
                                        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                                    >
                                        <ArrowRight size={12} style={{ color: '#E63329' }} />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Areas */}
                    <div>
                        <h3 style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2C9BE8', marginBottom: 20 }}>Areas We Cover</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                            {areas.map((area) => (
                                <li key={area}>
                                    <Link href={`/plots?location=${encodeURIComponent(area)}`}
                                        style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', display: 'flex', alignItems: 'center', gap: 6, transition: 'color 0.2s' }}
                                        onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                                        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                                    >
                                        <MapPin size={12} style={{ color: '#2C9BE8', flexShrink: 0 }} />
                                        {area}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact + Newsletter */}
                    <div>
                        <h3 style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#2C9BE8', marginBottom: 20 }}>Contact Us</h3>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
                            <li style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                                <MapPin size={15} style={{ color: '#2C9BE8', flexShrink: 0, marginTop: 2 }} />
                                <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>Near Round South, Museum Road, Thrissur – 680001</span>
                            </li>
                            <li>
                                <a href="tel:+919876543210" style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14, color: 'rgba(255,255,255,0.55)', transition: 'color 0.2s' }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}>
                                    <Phone size={15} style={{ color: '#2C9BE8' }} />+91 98765 43210
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@tcrplots.com" style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 14, color: 'rgba(255,255,255,0.55)', transition: 'color 0.2s' }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}>
                                    <Mail size={15} style={{ color: '#2C9BE8' }} />info@tcrplots.com
                                </a>
                            </li>
                        </ul>

                        {/* Newsletter */}
                        <div>
                            <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 10 }}>Plot Alerts</p>
                            <div style={{ display: 'flex', gap: 6 }}>
                                <div style={{ flex: 1, position: 'relative' }}>
                                    {mounted ? (
                                        <motion.input
                                            whileFocus={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.4)', boxShadow: '0 0 15px rgba(255,255,255,0.1)' }}
                                            transition={{ duration: 0.2 }}
                                            type="email" placeholder="Your email" style={{ width: '100%', padding: '10px 14px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.06)', color: '#fff', fontSize: 13, outline: 'none', fontFamily: 'inherit' }}
                                        />
                                    ) : (
                                        <div style={{ width: '100%', height: 38, borderRadius: 6, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.06)' }} />
                                    )}
                                </div>
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn btn-sky" style={{ padding: '10px 16px', fontSize: 13, cursor: 'pointer', border: 'none' }}>→</motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="container-site" style={{ padding: '20px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)' }}>© {new Date().getFullYear()} TCR Plots. All rights reserved.</p>
                    <div style={{ display: 'flex', gap: 20 }}>
                        {['Privacy Policy', 'Terms of Use', 'Sitemap'].map((t) => (
                            <a key={t} href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', transition: 'color 0.2s' }}
                                onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.35)'}>
                                {t}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
