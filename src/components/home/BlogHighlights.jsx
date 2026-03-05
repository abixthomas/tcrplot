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
        <section ref={ref} className="py-24 md:py-32 bg-[#F9FAFB] border-y border-gray-200">
            <div className="container-site">

                {/* Minimalist Editorial Header */}
                <div className="flex flex-col items-center text-center mb-16 md:mb-24">
                    <motion.div initial={{ height: 0 }} animate={inView ? { height: 40 } : {}} transition={{ duration: 0.8 }} className="w-[1px] bg-[#D33C29] mb-6" />
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }}
                        className="font-['Cormorant_Garamond'] text-4xl md:text-5xl lg:text-6xl text-gray-900 font-semibold tracking-tight italic"
                    >
                        Market Intelligence
                    </motion.h2>
                    <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }} className="text-[13px] uppercase tracking-[0.15em] font-bold text-gray-400 mt-4">
                        The Archive
                    </motion.div>
                </div>

                {/* The Archive Grid — Pure Typography */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                    {blogPosts.slice(0, 3).map((post, i) => {
                        const date = formatDateObj(post.date);
                        return (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.8, delay: 0.4 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-col"
                            >
                                {/* Date Box */}
                                <div className="flex items-start gap-4 mb-6 pb-6 border-b border-gray-200">
                                    <div className="font-['Cormorant_Garamond'] text-5xl md:text-[4.5rem] leading-[0.8] font-bold text-[#D33C29]">
                                        {date.day}
                                    </div>
                                    <div className="pt-1 md:pt-2">
                                        <div className="text-[11px] font-extrabold text-gray-900 uppercase tracking-widest">{date.my}</div>
                                        <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mt-1">{post.readTime.replace(/read/i, '').trim()} Read</div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <div className="text-[11px] font-extrabold text-[#0B5C8A] uppercase tracking-widest mb-3">{post.category}</div>
                                    <h3 className="font-['Cormorant_Garamond'] text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4">
                                        {post.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                </div>

                                {/* Link */}
                                <div className="mt-8">
                                    <a href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-[12px] font-extrabold uppercase tracking-widest text-gray-900 hover:text-[#D33C29] transition-colors">
                                        Read Dispatch <span className="font-sans text-base">→</span>
                                    </a>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1 }} className="text-center mt-16 md:mt-24">
                    <a href="/blog" className="inline-flex items-center justify-center px-8 py-4 border border-gray-900 text-gray-900 font-bold text-[13px] uppercase tracking-widest hover:bg-gray-900 hover:text-white transition-colors">
                        Enter The Archive
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
