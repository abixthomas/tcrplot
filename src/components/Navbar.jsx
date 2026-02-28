'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown, MapPin, Search } from 'lucide-react';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    {
        label: 'Properties',
        children: [
            { href: '/plots', label: 'All Plots' },
            { href: '/plots?purpose=residential', label: 'Residential' },
            { href: '/plots?purpose=commercial', label: 'Commercial' },
            { href: '/plots?purpose=investment', label: 'Investment' },
        ],
    },
    { href: '/services', label: 'Services' },
    { href: '/why-thrissur', label: 'Why Thrissur' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdown, setDropdown] = useState(null);
    const pathname = usePathname();
    const isHome = pathname === '/';

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => { setMenuOpen(false); setDropdown(null); }, [pathname]);

    const navStyle = {
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 900,
        transition: 'background 0.4s ease, box-shadow 0.4s ease',
        background: scrolled
            ? 'rgba(255,255,255,0.98)'
            : isHome ? 'transparent' : 'rgba(255,255,255,0.98)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
    };

    const linkColor = (scrolled || !isHome) ? '#1F2937' : '#fff';
    const logoColor = (scrolled || !isHome) ? '#1B4F8A' : '#fff';

    return (
        <>
            <nav style={navStyle}>
                <div className="container-site">
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
                        {/* Logo */}
                        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <div style={{ width: 38, height: 38, flexShrink: 0 }}>
                                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                                    <circle cx="50" cy="50" r="47" stroke="#2C9BE8" strokeWidth="3" fill="none" />
                                    <path d="M50 18 L74 42 L74 72 L26 72 L26 42 Z" fill="#1B4F8A" />
                                    <path d="M35 72 L35 85 L65 85 L65 72" fill="#1B4F8A" />
                                    <rect x="44" y="54" width="12" height="18" fill="#2C9BE8" />
                                    <path d="M50 18 L74 42 L26 42 Z" fill="#2C9BE8" />
                                    <path d="M43 14 L57 14 L57 25 L50 18 Z" fill="#E63329" />
                                    <path d="M18 61 Q35 68 50 64 Q65 60 82 67" stroke="#E63329" strokeWidth="3.5" fill="none" strokeLinecap="round" />
                                    <path d="M16 72 Q36 81 50 77 Q64 73 84 80" stroke="#2C9BE8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div>
                                <div style={{ fontWeight: 800, fontSize: 20, color: logoColor, lineHeight: 1.1, transition: 'color 0.4s' }}>
                                    TCR<span style={{ color: '#E63329' }}>plots</span>
                                </div>
                                <div style={{ fontSize: 9, letterSpacing: '0.22em', textTransform: 'uppercase', color: scrolled || !isHome ? '#9CA3AF' : 'rgba(255,255,255,0.6)', lineHeight: 1 }}>
                                    Thrissur Premium Land
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Nav */}
                        <div style={{ display: 'none', alignItems: 'center', gap: 2 }} className="lg-flex">
                            {navLinks.map((link) =>
                                link.children ? (
                                    <div
                                        key={link.label}
                                        style={{ position: 'relative' }}
                                        onMouseEnter={() => setDropdown(link.label)}
                                        onMouseLeave={() => setDropdown(null)}
                                    >
                                        <button style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '8px 14px', fontSize: 14, fontWeight: 500, color: linkColor, background: 'none', border: 'none', cursor: 'pointer', borderRadius: 6, transition: 'color 0.2s', fontFamily: 'inherit' }}>
                                            {link.label}
                                            <ChevronDown size={13} style={{ transition: 'transform 0.2s', transform: dropdown === link.label ? 'rotate(180deg)' : 'none' }} />
                                        </button>
                                        <AnimatePresence>
                                            {dropdown === link.label && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                                    exit={{ opacity: 0, y: 8, scale: 0.95 }}
                                                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                                    style={{ position: 'absolute', top: '100%', left: 0, marginTop: 4, width: 200, background: '#fff', borderRadius: 10, boxShadow: '0 10px 40px rgba(0,0,0,0.12)', overflow: 'hidden', border: '1px solid #E5E7EB', transformOrigin: 'top' }}
                                                >
                                                    {link.children.map((child) => (
                                                        <Link key={child.href} href={child.href} style={{ display: 'block', padding: '10px 18px', fontSize: 14, color: '#374151', borderBottom: '1px solid #F3F4F6', transition: 'background 0.15s, color 0.15s' }}
                                                            onMouseEnter={e => { e.currentTarget.style.background = '#EBF5FD'; e.currentTarget.style.color = '#1B4F8A'; }}
                                                            onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.color = '#374151'; }}
                                                        >{child.label}</Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        style={{ padding: '8px 14px', fontSize: 14, fontWeight: pathname === link.href ? 600 : 500, color: pathname === link.href ? '#1B4F8A' : linkColor, borderRadius: 6, transition: 'color 0.2s', display: 'block' }}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )}
                        </div>

                        {/* CTA */}
                        <div style={{ display: 'none', alignItems: 'center', gap: 12 }} className="lg-flex">
                            <a href="tel:+919876543210" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 600, color: scrolled || !isHome ? '#1B4F8A' : '#fff', transition: 'color 0.4s' }}>
                                <Phone size={15} />
                                +91 98765 43210
                            </a>
                            <Link href="/contact" className="btn btn-coral" style={{ padding: '9px 20px', fontSize: 14 }}>
                                Free Consultation
                            </Link>
                        </div>

                        {/* Hamburger */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="lg-hide"
                            style={{ padding: 8, color: scrolled || !isHome ? '#1F2937' : '#fff', background: 'none', border: 'none', cursor: 'pointer' }}
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        style={{ position: 'fixed', inset: 0, zIndex: 899, background: '#fff', paddingTop: 72, overflowY: 'auto' }}
                    >
                        <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {navLinks.map((link) =>
                                link.children ? (
                                    <div key={link.label}>
                                        <div style={{ padding: '8px 12px', fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#1B4F8A', marginTop: 8 }}>{link.label}</div>
                                        {link.children.map((child) => (
                                            <Link key={child.href} href={child.href} style={{ display: 'block', padding: '10px 20px', fontSize: 16, color: '#374151', borderBottom: '1px solid #F3F4F6' }}>{child.label}</Link>
                                        ))}
                                    </div>
                                ) : (
                                    <Link key={link.href} href={link.href} style={{ display: 'block', padding: '14px 12px', fontSize: 17, fontWeight: 500, color: '#1F2937', borderBottom: '1px solid #F3F4F6' }}>
                                        {link.label}
                                    </Link>
                                )
                            )}
                            <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 12, padding: '0 4px' }}>
                                <a href="tel:+919876543210" className="btn btn-outline-navy" style={{ justifyContent: 'center' }}>
                                    <Phone size={16} /> Call Us
                                </a>
                                <Link href="/contact" className="btn btn-coral" style={{ justifyContent: 'center' }}>
                                    Free Consultation
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media(min-width: 1024px) { .lg-flex { display: flex !important; } .lg-hide { display: none !important; } }
      `}</style>
        </>
    );
}
