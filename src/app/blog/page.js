'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Search, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import FadeIn from '@/components/FadeIn';

const catColors = { Investment: '#1B4F8A', 'Legal Guide': '#E63329', Culture: '#2C9BE8' };
const categories = ['All', 'Investment', 'Legal Guide', 'Culture'];

export default function BlogPage() {
    const [active, setActive] = useState('All');
    const [query, setQuery] = useState('');

    const filtered = blogPosts.filter(p =>
        (active === 'All' || p.category === active) &&
        (p.title.toLowerCase().includes(query.toLowerCase()) || p.excerpt.toLowerCase().includes(query.toLowerCase()))
    );

    return (
        <div style={{ paddingTop: 72, background: '#F9FAFB', minHeight: '100vh' }}>
            {/* Header */}
            <div style={{ background: 'linear-gradient(135deg, #071b38 0%, #1B4F8A 100%)', padding: '72px 0 56px' }}>
                <div className="container-site" style={{ textAlign: 'center' }}>
                    <FadeIn><div className="tag" style={{ color: '#2C9BE8', justifyContent: 'center', marginBottom: 14 }}>Land Intelligence</div></FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(2rem,4.5vw,3rem)', fontWeight: 900, color: '#fff', marginBottom: 16 }}>
                            Insights & <em style={{ color: '#2C9BE8' }}>Market Updates</em>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div style={{ position: 'relative', maxWidth: 440, margin: '0 auto' }}>
                            <Search size={18} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: '#9CA3AF' }} />
                            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search articles..." className="input-base" style={{ paddingLeft: 46 }} />
                        </div>
                    </FadeIn>
                </div>
            </div>

            <div className="container-site" style={{ paddingTop: 40, paddingBottom: 80 }}>
                {/* Category pills */}
                <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 36 }}>
                    {categories.map(cat => (
                        <button key={cat} onClick={() => setActive(cat)}
                            style={{ padding: '8px 20px', borderRadius: 20, border: `1.5px solid ${active === cat ? (catColors[cat] || '#1B4F8A') : '#E5E7EB'}`, background: active === cat ? (catColors[cat] || '#1B4F8A') : '#fff', color: active === cat ? '#fff' : '#374151', fontSize: 14, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit' }}>
                            {cat}
                        </button>
                    ))}
                </div>

                <AnimatePresence mode="sync">
                    {filtered.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: 80, color: '#9CA3AF' }}>
                            <p style={{ fontSize: 18 }}>No articles found.</p>
                        </div>
                    ) : (
                        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
                            {filtered.map((post, i) => (
                                <motion.div key={post.id} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: i * 0.06 }}>
                                    <Link href={`/blog/${post.slug}`}>
                                        <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'transform 0.3s' }}
                                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'}
                                            onMouseLeave={e => e.currentTarget.style.transform = 'none'}
                                        >
                                            <div style={{ height: 210, overflow: 'hidden', position: 'relative' }}>
                                                <img src={post.coverImage} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }}
                                                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.07)'}
                                                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                                />
                                                <span className="badge" style={{ position: 'absolute', top: 12, left: 12, background: catColors[post.category] || '#1B4F8A', color: '#fff' }}>
                                                    {post.category}
                                                </span>
                                            </div>
                                            <div style={{ padding: '20px 20px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                                <div style={{ display: 'flex', gap: 16, color: '#9CA3AF', fontSize: 12, marginBottom: 10 }}>
                                                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Calendar size={11} />{post.date}</span>
                                                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={11} />{post.readTime}</span>
                                                </div>
                                                <h2 style={{ fontSize: 16, fontWeight: 700, color: '#111827', lineHeight: 1.4, marginBottom: 10, flex: 1 }}>{post.title}</h2>
                                                <p style={{ fontSize: 13, color: '#6B7280', lineHeight: 1.7, marginBottom: 16 }}>{post.excerpt.substring(0, 100)}…</p>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 700, color: '#1B4F8A' }}>
                                                    Read Article <ArrowRight size={13} />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
