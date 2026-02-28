'use client';
import FadeIn from '@/components/FadeIn';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

const stats = [
    { num: '1,200+', label: 'Plots Sold', color: '#1B4F8A' },
    { num: '25+', label: 'Years Active', color: '#E63329' },
    { num: '1,000+', label: 'Happy Families', color: '#2C9BE8' },
    { num: '98%', label: 'Satisfaction Rate', color: '#D4A843' },
];

const values = [
    { icon: '🤝', title: 'Transparency', desc: 'Every deal is 100% disclosed — price, EC, taxes, disputes. No surprises ever.' },
    { icon: '⚖️', title: 'Legal Integrity', desc: 'In-house legal team verifies every property before listing. Your peace of mind is non-negotiable.' },
    { icon: '📍', title: 'Local Mastery', desc: '25 years of Thrissur market knowledge means we know the best zones, pricing, and hidden gems.' },
    { icon: '🌍', title: 'NRI Support', desc: 'Remote documentation, virtual tours, and PoA services for our clients abroad.' },
    { icon: '💎', title: 'Premium Only', desc: 'We reject 70% of submitted plots. Only verified, quality land makes our platform.' },
    { icon: '🔒', title: 'Post-Sale Support', desc: 'We stay with you until registration is complete and possession is given.' },
];

const team = [
    { name: 'Rajesh Kumar V.', role: 'Founder & Managing Director', exp: '28 years in Thrissur land market', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&facepad=3' },
    { name: 'Lakshmi Nair', role: 'Head of Legal & Documentation', exp: 'LLB, 18 years specialising in Kerala land law', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&facepad=3' },
    { name: 'Arun Menon', role: 'Senior Property Consultant', exp: '14 years in Thrissur & Guruvayur segments', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&facepad=3' },
    { name: 'Priya Thomas', role: 'NRI Services & Client Relations', exp: '10 years managing NRI investor portfolio', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&auto=format&fit=crop&facepad=3' },
];

export default function AboutPage() {
    return (
        <div style={{ paddingTop: 72 }}>
            {/* Hero */}
            <section style={{ background: 'linear-gradient(135deg, #071b38 0%, #1B4F8A 100%)', padding: '96px 0 80px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
                    <FadeIn><div className="tag" style={{ color: '#2C9BE8', marginBottom: 16 }}>Our Story</div></FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(2.2rem,5vw,3.8rem)', fontWeight: 900, color: '#fff', lineHeight: 1.2, maxWidth: 700, marginBottom: 24 }}>
                            Thrissur's Most Trusted<br /><em style={{ color: '#2C9BE8' }}>Land Partner Since 1998</em>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', maxWidth: 580, lineHeight: 1.8, marginBottom: 36 }}>
                            For 25+ years, TCR Plots has helped families and investors make life-changing land decisions in Thrissur with complete transparency, deep local expertise, and unwavering integrity.
                        </p>
                    </FadeIn>
                    <FadeIn delay={0.3}>
                        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                            <Link href="/plots" className="btn btn-coral">Browse Plots <ArrowRight size={15} /></Link>
                            <a href="tel:+919876543210" className="btn btn-outline-white"><Phone size={15} /> Call Us</a>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Stats */}
            <section style={{ background: '#fff', paddingTop: 80, paddingBottom: 80 }}>
                <div className="container-site">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
                        {stats.map((s, i) => (
                            <FadeIn key={s.label} delay={i * 0.1}>
                                <div style={{ textAlign: 'center', padding: '32px 24px', borderRadius: 12, border: `2px solid ${s.color}22`, background: `${s.color}06` }}>
                                    <div style={{ fontSize: 'clamp(2.5rem,5vw,3.8rem)', fontWeight: 900, color: s.color, lineHeight: 1 }}>{s.num}</div>
                                    <div style={{ fontSize: 14, color: '#6B7280', marginTop: 10, fontWeight: 500 }}>{s.label}</div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story */}
            <section style={{ background: '#F9FAFB', padding: '80px 0' }}>
                <div className="container-site">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
                        <FadeIn direction="right">
                            <div style={{ borderRadius: 16, overflow: 'hidden', height: 420 }}>
                                <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop" alt="About TCR Plots" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </FadeIn>
                        <FadeIn direction="left" delay={0.1}>
                            <div>
                                <div className="tag" style={{ marginBottom: 16 }}>Our Journey</div>
                                <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 900, color: '#111827', lineHeight: 1.25, marginBottom: 20 }}>
                                    Built on Trust,<br />Grown Through Results
                                </h2>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                                    {[
                                        'Founded in 1998 by Rajesh Kumar with a simple mission: make land buying in Thrissur honest and easy.',
                                        'Today we\'re the region\'s leading verified plot marketplace with over 1,200 successful transactions.',
                                        'Our in-house legal team, documentation support, and post-sale assistance make us unlike any broker.',
                                        'From first-time buyers to NRI investors — we serve every customer with the same dedication.',
                                    ].map((t, i) => (
                                        <p key={i} style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.75, paddingLeft: 16, borderLeft: '3px solid #2C9BE8' }}>{t}</p>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section style={{ background: '#071b38', padding: '80px 0' }}>
                <div className="container-site">
                    <div style={{ textAlign: 'center', marginBottom: 52 }}>
                        <FadeIn><div className="tag" style={{ color: '#2C9BE8', justifyContent: 'center', marginBottom: 14 }}>Our Core Values</div></FadeIn>
                        <FadeIn delay={0.1}><h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 900, color: '#fff' }}>What We Stand For</h2></FadeIn>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
                        {values.map((v, i) => (
                            <FadeIn key={v.title} delay={i * 0.08}>
                                <div className="dark-card-hover">
                                    <div style={{ fontSize: 36, marginBottom: 16 }}>{v.icon}</div>
                                    <h3 style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{v.title}</h3>
                                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>{v.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section style={{ background: '#fff', padding: '80px 0' }}>
                <div className="container-site">
                    <div style={{ textAlign: 'center', marginBottom: 52 }}>
                        <FadeIn><div className="tag" style={{ justifyContent: 'center', marginBottom: 14 }}>The Team</div></FadeIn>
                        <FadeIn delay={0.1}><h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 900, color: '#111827' }}>Experts You Can Trust</h2></FadeIn>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
                        {team.map((member, i) => (
                            <FadeIn key={member.name} delay={i * 0.1}>
                                <div className="card" style={{ textAlign: 'center', padding: '28px 20px' }}>
                                    <img src={member.img} alt={member.name} style={{ width: 80, height: 80, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 16px', border: '3px solid #2C9BE8' }} />
                                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', marginBottom: 4 }}>{member.name}</h3>
                                    <p style={{ fontSize: 13, fontWeight: 600, color: '#1B4F8A', marginBottom: 8 }}>{member.role}</p>
                                    <p style={{ fontSize: 12, color: '#9CA3AF', lineHeight: 1.6 }}>{member.exp}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
