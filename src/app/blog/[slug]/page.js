import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, Share2, Tag } from 'lucide-react';
import { blogPosts } from '@/lib/data';
import FadeIn from '@/components/FadeIn';

export async function generateStaticParams() {
    return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
    const post = blogPosts.find(p => p.slug === params.slug);
    if (!post) return {};
    return { title: `${post.title} – TCR Plots Blog`, description: post.excerpt };
}

export default function BlogPostPage({ params }) {
    const post = blogPosts.find(p => p.slug === params.slug);
    if (!post) notFound();

    const related = blogPosts.filter(p => p.slug !== params.slug).slice(0, 2);

    const content = [
        `The land market in Thrissur has consistently outperformed the Kerala average for the past five years. Here's a detailed look at what's driving the demand and why smart investors are increasing their exposure to Thrissur real estate.`,
        `<h2>1. Strategic Location in Kerala</h2>Thrissur sits at the geographic centre of Kerala, giving it unmatched connectivity to Kochi, Palakkad, and Calicut. The city serves as a transit hub for both road and rail, which fundamentally supports long-term land value.`,
        `<h2>2. Infrastructure Boom</h2>The ongoing NH-544 four-laning project, the proposed Thrissur Metro Rail corridor, and the expansion of the Thrissur bypass are together attracting ₹4,200+ crore in public investment. Infrastructure spends are the most reliable long-term driver of surrounding property prices.`,
        `<h2>3. Cultural and Economic Significance</h2>As the cultural capital of Kerala, Thrissur benefits from year-round tourism driven by Thrissur Pooram and other festivals. Tourism creates a multiplier effect on the local economy — hospitality, retail, and real estate all benefit.`,
        `<h2>4. Educational and Medical Hubs</h2>The presence of premier engineering colleges, Amala Cancer Institute, and PVS Memorial Hospital means skilled professionals constantly migrate to and settle in Thrissur. This sustained demand for housing keeps residential land prices elevated.`,
        `<h2>Our Investment Recommendation</h2>For NRI investors or first-time land buyers, the sweet spot in 2026 is Ollur–Thrissur City corridor and Chalakudy NH frontage. Both are showing 10–12% year-on-year appreciation and still have attainable entry prices compared to Kochi.`,
        `Always buy through a verified broker like TCR Plots who performs full EC checks, tax verification, and plot measurement before listing. This protects you from the most common pitfalls of land buying in Kerala.`,
    ];

    return (
        <div style={{ paddingTop: 72 }}>
            {/* Hero */}
            <div style={{ position: 'relative', height: 440, overflow: 'hidden' }}>
                <img src={post.coverImage} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(7,27,56,0.97) 0%, rgba(7,27,56,0.5) 50%, transparent 100%)' }} />
                <div className="container-site" style={{ position: 'absolute', bottom: 48, left: '50%', transform: 'translateX(-50%)', width: '100%' }}>
                    <Link href="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.7)', fontSize: 14, marginBottom: 16, fontWeight: 500 }}>
                        <ArrowLeft size={14} /> All Articles
                    </Link>
                    <span className="badge" style={{ background: '#1B4F8A', color: '#fff', display: 'inline-block', marginBottom: 14 }}>{post.category}</span>
                    <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.8rem,4vw,2.8rem)', fontWeight: 900, color: '#fff', lineHeight: 1.25, maxWidth: 800 }}>{post.title}</h1>
                    <div style={{ display: 'flex', gap: 20, marginTop: 16, color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Calendar size={13} />{post.date}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}><Clock size={13} />{post.readTime}</span>
                        <span>By {post.author}</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div style={{ background: '#fff', paddingTop: 60, paddingBottom: 80 }}>
                <div className="container-site" style={{ maxWidth: 780 }}>
                    <FadeIn>
                        <p style={{ fontSize: 18, color: '#374151', lineHeight: 2, marginBottom: 32, fontWeight: 500, borderLeft: '4px solid #2C9BE8', paddingLeft: 20 }}>
                            {post.excerpt}
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                            {content.map((para, i) => (
                                para.startsWith('<h2>') ? (
                                    <h2 key={i} style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontWeight: 900, color: '#111827', marginTop: 16, marginBottom: -8 }}
                                        dangerouslySetInnerHTML={{ __html: para.replace(/<h2>(.*?)<\/h2>/, '$1') }} />
                                ) : (
                                    <p key={i} style={{ fontSize: 16, color: '#4B5563', lineHeight: 1.95 }}>{para}</p>
                                )
                            ))}
                        </div>
                    </FadeIn>

                    {/* Tags */}
                    <FadeIn delay={0.15}>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 40, paddingTop: 24, borderTop: '1px solid #E5E7EB' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: '#9CA3AF', fontWeight: 600 }}>
                                <Tag size={13} /> Tags:
                            </span>
                            {post.tags.map(tag => (
                                <span key={tag} className="badge badge-gray" style={{ borderRadius: 12 }}>{tag}</span>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Share */}
                    <FadeIn delay={0.2}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 28, padding: '20px 24px', background: '#F9FAFB', borderRadius: 10 }}>
                            <Share2 size={18} style={{ color: '#1B4F8A' }} />
                            <span style={{ fontSize: 14, fontWeight: 600, color: '#374151' }}>Share this article:</span>
                            {['WhatsApp', 'Facebook', 'LinkedIn', 'Twitter'].map(s => (
                                <a key={s} href="#" style={{ fontSize: 13, color: '#1B4F8A', fontWeight: 600, transition: 'color 0.2s' }}
                                    onMouseEnter={e => e.currentTarget.style.color = '#E63329'}
                                    onMouseLeave={e => e.currentTarget.style.color = '#1B4F8A'}>
                                    {s}
                                </a>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Related posts */}
            {related.length > 0 && (
                <div style={{ background: '#F9FAFB', padding: '64px 0' }}>
                    <div className="container-site">
                        <FadeIn><h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 900, color: '#111827', marginBottom: 28 }}>Related Articles</h2></FadeIn>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
                            {related.map((p, i) => (
                                <FadeIn key={p.id} delay={i * 0.1}>
                                    <Link href={`/blog/${p.slug}`}>
                                        <div className="card" style={{ cursor: 'pointer', transition: 'transform 0.3s' }}
                                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                                            onMouseLeave={e => e.currentTarget.style.transform = 'none'}
                                        >
                                            <div style={{ height: 180, overflow: 'hidden' }}>
                                                <img src={p.coverImage} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                            </div>
                                            <div style={{ padding: '16px 18px' }}>
                                                <div style={{ fontSize: 12, color: '#9CA3AF', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 4 }}><Calendar size={11} />{p.date}</div>
                                                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#111827', lineHeight: 1.4 }}>{p.title}</h3>
                                            </div>
                                        </div>
                                    </Link>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
