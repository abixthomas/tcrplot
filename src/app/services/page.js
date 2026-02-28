'use client';
import FadeIn from '@/components/FadeIn';
import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

const services = [
    {
        icon: '🏡',
        title: 'Land Buying Assistance',
        desc: 'We guide you through the entire buying process — from identifying the right plot to registration day.',
        steps: ['Understand your requirement & budget', 'Curate shortlist of verified plots', 'Arrange site visits', 'Legal & EC verification', 'Price negotiation', 'Registration support'],
        color: '#1B4F8A',
    },
    {
        icon: '🏷️',
        title: 'Land Selling Services',
        desc: 'Get maximum value for your land with our premium listing, photography, and qualified buyer network.',
        steps: ['Property valuation & assessment', 'Premium photography & listing', 'Qualified buyer matching', 'Legal document review', 'Price negotiation on your behalf', 'Smooth handover process'],
        color: '#E63329',
    },
    {
        icon: '📈',
        title: 'Investment Consultation',
        desc: 'Expert analysis on where and when to invest in Thrissur land for maximum appreciation.',
        steps: ['Portfolio goal assessment', 'Market trend analysis', 'Zone-wise growth projections', 'ROI calculation', 'Risk evaluation', 'Long-term monitoring'],
        color: '#2C9BE8',
    },
    {
        icon: '📋',
        title: 'Documentation Support',
        desc: 'Our in-house legal team handles full documentation — EC, patta, sale deed, and registration.',
        steps: ['Encumbrance certificate (EC)', 'Patta & chitta verification', 'Tax receipt verification', 'Sale deed preparation', 'Sub-registrar coordination', 'Post-registration assistance'],
        color: '#D4A843',
    },
    {
        icon: '🚗',
        title: 'Site Visit Arrangement',
        desc: 'We arrange guided, vehicle-assisted site visits 6 days a week at zero cost.',
        steps: ['Book preferred date & time', 'Pickup from your location', 'Expert-guided plot walkthrough', 'Neighbourhood assessment', 'Q&A with our consultant', 'Follow-up report provided'],
        color: '#1B4F8A',
    },
    {
        icon: '🌍',
        title: 'NRI Property Services',
        desc: 'Complete remote buying support for NRIs — virtual tours, PoA, and trusted local representation.',
        steps: ['Remote requirement consultation', 'Virtual site tour via video call', 'Power of Attorney processing', 'Remote legal verification', 'Coordination with your local contact', 'Post-purchase management'],
        color: '#E63329',
    },
];

const processSteps = [
    { num: '01', title: 'Share Your Requirements', desc: 'Tell us your budget, preferred location, land type, and purpose. We listen first.' },
    { num: '02', title: 'Curated Shortlist', desc: 'Our team handpicks verified plots matching your exact criteria within 24 hours.' },
    { num: '03', title: 'Site Visits', desc: 'Visit shortlisted properties with our expert consultant. Transport provided free.' },
    { num: '04', title: 'Legal Verification', desc: 'Full EC check, patta verification, and title search by our in-house lawyers.' },
    { num: '05', title: 'Agreement & Registration', desc: 'We coordinate with sub-registrar office and prepare all sale documents.' },
    { num: '06', title: 'Possession & After-Care', desc: 'You receive keys and we stay in touch for any further property needs.' },
];

export default function ServicesPage() {
    return (
        <div style={{ paddingTop: 72 }}>
            {/* Hero */}
            <section style={{ background: 'linear-gradient(135deg, #071b38 0%, #1B4F8A 100%)', padding: '88px 0 72px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
                    <FadeIn><div className="tag" style={{ color: '#2C9BE8', marginBottom: 16 }}>What We Do</div></FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(2.2rem,5vw,3.6rem)', fontWeight: 900, color: '#fff', lineHeight: 1.2, maxWidth: 700, marginBottom: 20 }}>
                            Complete Land Services<br /><em style={{ color: '#2C9BE8' }}>Under One Roof</em>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.65)', maxWidth: 560, lineHeight: 1.8 }}>
                            From finding the right plot to handing over the keys — TCR Plots handles every step so you can focus on your dream.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* Services grid */}
            <section style={{ background: '#F9FAFB', padding: '80px 0' }}>
                <div className="container-site">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
                        {services.map((s, i) => (
                            <FadeIn key={s.title} delay={i * 0.08}>
                                <div className="card" style={{ padding: '32px 28px', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ fontSize: 44, marginBottom: 16 }}>{s.icon}</div>
                                    <h2 style={{ fontSize: 20, fontWeight: 800, color: '#111827', marginBottom: 12, lineHeight: 1.3 }}>{s.title}</h2>
                                    <p style={{ fontSize: 14, color: '#6B7280', lineHeight: 1.75, marginBottom: 20 }}>{s.desc}</p>
                                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
                                        {s.steps.map((step) => (
                                            <li key={step} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: '#374151' }}>
                                                <CheckCircle size={15} style={{ color: s.color, flexShrink: 0, marginTop: 2 }} />
                                                {step}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process timeline */}
            <section style={{ background: '#071b38', padding: '80px 0' }}>
                <div className="container-site">
                    <div style={{ textAlign: 'center', marginBottom: 56 }}>
                        <FadeIn><div className="tag" style={{ color: '#2C9BE8', justifyContent: 'center', marginBottom: 14 }}>How It Works</div></FadeIn>
                        <FadeIn delay={0.1}>
                            <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.8rem,3.5vw,2.6rem)', fontWeight: 900, color: '#fff' }}>
                                Your Journey From <em style={{ color: '#2C9BE8' }}>Search to Keys</em>
                            </h2>
                        </FadeIn>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
                        {processSteps.map((step, i) => (
                            <FadeIn key={step.num} delay={i * 0.08}>
                                <div style={{ textAlign: 'center', padding: '28px 20px', position: 'relative' }}>
                                    <div style={{ width: 56, height: 56, borderRadius: '50%', background: i % 2 === 0 ? '#1B4F8A' : '#E63329', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontWeight: 800, fontSize: 18, color: '#fff' }}>
                                        {step.num}
                                    </div>
                                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{step.title}</h3>
                                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{step.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ background: '#fff', padding: '64px 0', textAlign: 'center' }}>
                <FadeIn>
                    <h2 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 900, color: '#111827', marginBottom: 16 }}>Ready to Find Your Perfect Plot?</h2>
                    <p style={{ fontSize: 16, color: '#6B7280', marginBottom: 32 }}>Book a free consultation with our experts today.</p>
                    <Link href="/contact" className="btn btn-coral" style={{ fontWeight: 700 }}>Book Free Consultation <ArrowRight size={16} /></Link>
                </FadeIn>
            </section>
        </div>
    );
}
