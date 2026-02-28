'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Maximize2, Filter, SortDesc, ArrowRight, X, Eye } from 'lucide-react';
import { plots } from '@/lib/data';
import FadeIn from '@/components/FadeIn';

const purposes = ['All', 'Residential', 'Commercial', 'Investment'];
const locations = ['All', 'Thrissur City', 'Ollur', 'Guruvayur', 'Chalakudy', 'Irinjalakuda', 'Kunnamkulam'];
const purposeColors = { residential: '#1B4F8A', commercial: '#E63329', investment: '#D4A843' };

export default function PlotsPage() {
    const [filterPurpose, setFilterPurpose] = useState('All');
    const [filterLocation, setFilterLocation] = useState('All');
    const [maxPrice, setMaxPrice] = useState(200);
    const [sort, setSort] = useState('latest');
    const [search, setSearch] = useState('');
    const [showFilters, setShowFilters] = useState(false);

    const filtered = useMemo(() => {
        let list = [...plots];
        if (filterPurpose !== 'All') list = list.filter(p => p.purpose === filterPurpose.toLowerCase());
        if (filterLocation !== 'All') list = list.filter(p => p.location === filterLocation || p.area === filterLocation);
        list = list.filter(p => p.price <= maxPrice);
        if (search) list = list.filter(p => p.title.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase()));
        if (sort === 'price-low') list.sort((a, b) => a.price - b.price);
        if (sort === 'price-high') list.sort((a, b) => b.price - a.price);
        if (sort === 'latest') list.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
        return list;
    }, [filterPurpose, filterLocation, maxPrice, sort, search]);

    return (
        <div style={{ paddingTop: 72, background: '#F9FAFB', minHeight: '100vh' }}>
            {/* Header */}
            <div style={{ background: 'linear-gradient(135deg, #071b38 0%, #1B4F8A 100%)', padding: '64px 0 48px' }}>
                <div className="container-site">
                    <FadeIn>
                        <div className="tag" style={{ color: '#2C9BE8', marginBottom: 12 }}>Property Listings</div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: 'clamp(2rem,4.5vw,3rem)', fontWeight: 900, color: '#fff', marginBottom: 12 }}>
                            All Plots in Thrissur
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15 }}>{filtered.length} verified plots matching your criteria</p>
                    </FadeIn>
                </div>
            </div>

            <div className="container-site" style={{ paddingTop: 32, paddingBottom: 80 }}>
                {/* Filter bar */}
                <div style={{ background: '#fff', borderRadius: 12, padding: '16px 20px', marginBottom: 28, boxShadow: '0 2px 12px rgba(27,79,138,0.08)', display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center' }}>
                    {/* Search */}
                    <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name or location..." className="input-base" style={{ flex: '1 1 200px', maxWidth: 260 }} />

                    {/* Purpose tabs */}
                    <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                        {purposes.map(p => (
                            <button key={p} onClick={() => setFilterPurpose(p)}
                                style={{ padding: '7px 16px', borderRadius: 6, border: `1.5px solid ${filterPurpose === p ? '#1B4F8A' : '#E5E7EB'}`, background: filterPurpose === p ? '#1B4F8A' : '#fff', color: filterPurpose === p ? '#fff' : '#374151', fontSize: 13, fontWeight: 600, cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit' }}>
                                {p}
                            </button>
                        ))}
                    </div>

                    {/* Location */}
                    <select value={filterLocation} onChange={e => setFilterLocation(e.target.value)} className="select-base" style={{ width: 'auto', flex: '0 1 160px' }}>
                        {locations.map(l => <option key={l} value={l}>{l}</option>)}
                    </select>

                    {/* Sort */}
                    <select value={sort} onChange={e => setSort(e.target.value)} className="select-base" style={{ width: 'auto', flex: '0 1 170px' }}>
                        <option value="latest">Sort: Latest</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                    </select>

                    {/* Price range */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flex: '1 1 200px' }}>
                        <span style={{ fontSize: 13, color: '#6B7280', whiteSpace: 'nowrap' }}>Max ₹{maxPrice}L</span>
                        <input type="range" min={10} max={200} value={maxPrice} onChange={e => setMaxPrice(Number(e.target.value))}
                            style={{ flex: 1, accentColor: '#1B4F8A' }} />
                    </div>
                </div>

                {/* Grid */}
                <AnimatePresence mode="sync">
                    {filtered.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '80px 20px', color: '#9CA3AF' }}>
                            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
                            <p style={{ fontSize: 18, fontWeight: 600 }}>No plots match your filters.</p>
                            <button onClick={() => { setFilterPurpose('All'); setFilterLocation('All'); setMaxPrice(200); setSearch(''); }} className="btn btn-outline-navy" style={{ marginTop: 20 }}>
                                <X size={16} /> Clear Filters
                            </button>
                        </div>
                    ) : (
                        <motion.div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }} layout>
                            {filtered.map((plot, i) => (
                                <motion.div key={plot.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.35, delay: Math.min(i * 0.06, 0.3) }}>
                                    <Link href={`/plots/${plot.id}`}>
                                        <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer' }}
                                            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(27,79,138,0.18)'; }}
                                            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = ''; }}
                                        >
                                            <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                                                <img src={plot.images[0]} alt={plot.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }} />
                                                <div style={{ position: 'absolute', top: 12, left: 12, display: 'flex', gap: 6 }}>
                                                    <span className="badge" style={{ background: purposeColors[plot.purpose] || '#1B4F8A', color: '#fff' }}>{plot.purpose}</span>
                                                    {plot.featured && <span className="badge badge-gold">Featured</span>}
                                                </div>
                                                <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(0,0,0,0.45)', borderRadius: 4, padding: '3px 8px', display: 'flex', alignItems: 'center', gap: 4 }}>
                                                    <Eye size={11} color="#fff" />
                                                    <span style={{ fontSize: 11, color: '#fff' }}>{plot.views}</span>
                                                </div>
                                            </div>
                                            <div style={{ padding: '18px 20px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                                <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#9CA3AF', fontSize: 13, marginBottom: 8 }}>
                                                    <MapPin size={12} style={{ color: '#E63329' }} />{plot.location}
                                                </div>
                                                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#111827', lineHeight: 1.35, marginBottom: 12, flex: 1 }}>{plot.title}</h3>
                                                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 12 }}>
                                                    <span style={{ fontSize: 24, fontWeight: 800, color: '#1B4F8A' }}>₹{plot.price}L</span>
                                                    <span style={{ fontSize: 13, color: '#9CA3AF' }}>/ cent</span>
                                                    <span style={{ marginLeft: 'auto', fontSize: 12, color: '#6B7280', background: '#F3F4F6', borderRadius: 4, padding: '2px 8px' }}>
                                                        {plot.size} {plot.sizeUnit}
                                                    </span>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, borderTop: '1px solid #F3F4F6' }}>
                                                    <span style={{ fontSize: 12, color: '#9CA3AF' }}>{plot.roadAccess}</span>
                                                    <span style={{ fontSize: 13, fontWeight: 700, color: '#1B4F8A', display: 'flex', alignItems: 'center', gap: 4 }}>View Details <ArrowRight size={13} /></span>
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
