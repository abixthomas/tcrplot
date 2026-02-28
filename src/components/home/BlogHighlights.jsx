'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import FadeIn from '@/components/FadeIn';

const catColors = { Investment: '#1B4F8A', 'Legal Guide': '#E63329', Culture: '#2C9BE8' };

const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 15 } }
};

export default function BlogHighlights() {
    return (
        <section style={{ background: '#fff', paddingTop: 96, paddingBottom: 96 }}>
            <div className="container-site">
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 52, flexWrap: 'wrap', gap: 16 }}>
                    <div>
                        <FadeIn><div className="tag" style={{ marginBottom: 14 }}>Land Intelligence</div></FadeIn>
                        <FadeIn delay={0.1}>
                            <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 900, color: '#111827', lineHeight: 1.25 }}>
                                Insights to Help You<br /><em style={{ color: '#1B4F8A' }}>Invest Smarter</em>
                            </h2>
                        </FadeIn>
                    </div>
                    <FadeIn delay={0.15} direction="left">
                        <Link href="/blog" className="btn btn-ghost" style={{ fontWeight: 600 }}>
                            All Articles <ArrowRight size={15} />
                        </Link>
                    </FadeIn>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}
                >
                    {blogPosts.map((post) => (
                        <motion.div key={post.id} variants={itemVariants}>
                            <Link href={`/blog/${post.slug}`} style={{ display: 'block', height: '100%', textDecoration: 'none' }}>
                                <motion.div
                                    className="card group"
                                    whileHover="hover"
                                    style={{ height: '100%', display: 'flex', flexDirection: 'column', overflow: 'hidden', borderRadius: 16, background: '#fff', boxShadow: '0 4px 20px rgba(0,0,0,0.06)' }}
                                >
                                    <div style={{ height: 220, overflow: 'hidden', position: 'relative' }}>
                                        <motion.img
                                            variants={{ hover: { scale: 1.05 } }}
                                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                            src={post.coverImage}
                                            alt={post.title}
                                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        />
                                        <span className="badge" style={{ position: 'absolute', top: 12, left: 12, background: catColors[post.category] || '#1B4F8A', color: '#fff' }}>
                                            {post.category}
                                        </span>
                                    </div>
                                    <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                                        <div style={{ display: 'flex', gap: 16, color: '#9CA3AF', fontSize: 12, marginBottom: 12 }}>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Calendar size={11} />{post.date}</span>
                                            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}><Clock size={11} />{post.readTime}</span>
                                        </div>
                                        <h3 style={{ fontSize: 18, fontWeight: 700, color: '#111827', lineHeight: 1.4, marginBottom: 10, flex: 1 }}>{post.title}</h3>
                                        <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.7, marginBottom: 16 }}>{post.excerpt.slice(0, 100)}…</p>

                                        <motion.div
                                            variants={{ hover: { x: 6 } }}
                                            transition={{ duration: 0.3 }}
                                            style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 700, color: '#1B4F8A', marginTop: 'auto' }}
                                        >
                                            Read Article <ArrowRight size={14} />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
