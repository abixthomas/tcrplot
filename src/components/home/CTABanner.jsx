'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, MessageCircle } from 'lucide-react';
import FadeIn from '@/components/FadeIn';

export default function CTABanner() {
    return (
        <section style={{ background: 'linear-gradient(135deg, #0f2d57 0%, #1B4F8A 50%, #2C9BE8 100%)', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
            {/* Blobs */}
            <motion.div
                animate={{ scale: [1, 1.15, 1], opacity: [0.12, 0.22, 0.12] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: '#E63329', top: -200, right: -200, pointerEvents: 'none' }}
            />
            <motion.div
                animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: '#fff', bottom: -150, left: -100, pointerEvents: 'none' }}
            />

            <div className="container-site" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
                <FadeIn><div className="tag" style={{ color: 'rgba(255,255,255,0.7)', justifyContent: 'center', marginBottom: 16 }}>Get Started Today</div></FadeIn>
                <FadeIn delay={0.1}>
                    <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(2.2rem,5vw,3.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.2, marginBottom: 20 }}>
                        Your Perfect Plot in Thrissur<br /><em>is One Call Away.</em>
                    </h2>
                </FadeIn>
                <FadeIn delay={0.2}>
                    <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.7)', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.7 }}>
                        Talk to our experts for free. Site visits arranged 6 days a week. No brokerage confusion — just honest deals.
                    </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                            <Link href="/plots" className="btn" style={{ display: 'flex', background: '#E63329', color: '#fff', padding: '15px 32px', fontWeight: 700, fontSize: 16, boxShadow: '0 8px 32px rgba(230,51,41,0.4)' }}>
                                Browse Plots <ArrowRight size={17} />
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                            <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '15px 28px', background: '#25D366', color: '#fff', borderRadius: 6, fontWeight: 600, fontSize: 16 }}>
                                <MessageCircle size={18} /> WhatsApp Us
                            </a>
                        </motion.div>
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 400, damping: 17 }}>
                            <a href="tel:+919876543210" className="btn btn-outline-white" style={{ display: 'flex', fontWeight: 600 }}>
                                <Phone size={17} /> +91 98765 43210
                            </a>
                        </motion.div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
