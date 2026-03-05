'use client';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { blogPosts } from '@/lib/data';

export default function BlogHighlights() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    // Format date string '2026-03-01' -> '01', 'MAR 2026'
    const formatDateObj = (dateStr) => {
        const d = new Date(dateStr);
        return {
            day: String(d.getDate()).padStart(2, '0'),
            my: d.toLocaleString('en-US', { month: 'short', year: 'numeric' }).toUpperCase()
        };
    };

    return (
        <section ref={ref} style={{ padding: '120px 0', background: '#F9FAFB', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
            <div className="container-site">

                {/* Minimalist Editorial Header */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 80 }}>
                    <motion.div initial={{ height: 0 }} animate={inView ? { height: 40 } : {}} transition={{ duration: 0.8 }} style={{ width: 1, background: '#D33C29', marginBottom: 24 }} />
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}
                        style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: '#111827', fontWeight: 600, letterSpacing: '-0.02em', fontStyle: 'italic' }}
                    >
                        Market Intelligence
                    </motion.h2>
                    <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} style={{ fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 700, color: '#9CA3AF', marginTop: 16 }}>
                        The Archive
                    </motion.div>
                </div>

                {/* The Archive Grid — Pure Typography */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 60 }}>
                    {blogPosts.slice(0, 3).map((post, i) => {
                        const date = formatDateObj(post.date);
                        return (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.4 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                style={{ display: 'flex', flexDirection: 'column' }}
                            >
                                {/* Date Box */}
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 24, paddingBottom: 24, borderBottom: '1px solid #E5E7EB' }}>
                                    <div style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '4.5rem', lineHeight: 0.8, fontWeight: 700, color: '#D33C29' }}>
                                        {date.day}
                                    </div>
                                    <div style={{ paddingTop: 6 }}>
                                        <div style={{ fontSize: 11, fontWeight: 800, color: '#111827', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{date.my}</div>
                                        <div style={{ fontSize: 11, fontWeight: 700, color: '#9CA3AF', textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 4 }}>{post.readTime} Read</div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontSize: 11, fontWeight: 800, color: '#0B5C8A', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 12 }}>{post.category}</div>
                                    <h3 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '1.75rem', fontWeight: 700, color: '#111827', lineHeight: 1.25, marginBottom: 16 }}>
                                        {post.title}
                                    </h3>
                                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7 }}>
                                        {post.excerpt}
                                    </p>
                                </div>

                                {/* Link */}
                                <div style={{ marginTop: 32 }}>
                                    <a href={`/blog/${post.slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#111827', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#D33C29'} onMouseOut={e => e.currentTarget.style.color = '#111827'}>
                                        Read Dispatch <span style={{ fontFamily: 'system-ui', fontSize: 16 }}>→</span>
                                    </a>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1 }} style={{ textAlign: 'center', marginTop: 80 }}>
                    <a href="/blog" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '16px 36px', border: '1px solid #111827', color: '#111827', fontWeight: 700, fontSize: 13, textTransform: 'uppercase', letterSpacing: '0.1em', transition: 'all 0.3s', textDecoration: 'none' }} onMouseOver={e => { e.currentTarget.style.background = '#111827'; e.currentTarget.style.color = '#fff'; }} onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#111827'; }}>
                        Enter The Archive
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
