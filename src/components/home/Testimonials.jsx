'use client';
import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play } from 'lucide-react';

const VLOGS = [
    { id: 1, name: 'Rahul & Priya', role: 'NRI Investors', video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', poster: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80', description: 'Bought a 20-cent premium plot in Ollur remotely.' },
    { id: 2, name: 'Dr. Mathews', role: 'Surgeon', video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', poster: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80', description: 'Invested in the Cultural Corridor for a future clinic.' },
    { id: 3, name: 'Sneha Menon', role: 'Tech Entrepreneur', video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', poster: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80', description: 'Found the perfect generational wealth asset.' },
    { id: 4, name: 'Anil Kumar', role: 'Business Owner', video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', poster: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80', description: 'Secured a high-ROI commercial space.' },
];

function VlogCard({ vlog }) {
    const videoRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!videoRef.current) return;
        if (isHovered) {
            videoRef.current.play().catch(() => { });
        } else {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [isHovered]);

    return (
        <motion.div
            className="flex-shrink-0 w-[85vw] max-w-[320px] md:max-w-none md:w-[380px] group cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* High-end streaming thumbnail */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#042e4b] mb-6 shadow-[0_10px_40px_rgba(0,0,0,0.3)] group-hover:shadow-[0_20px_60px_rgba(211,60,41,0.2)] transition-shadow duration-500">
                {/* Poster Image */}
                <motion.div
                    animate={{ opacity: isHovered ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 z-10"
                >
                    <img src={vlog.poster} alt={vlog.name} className="w-full h-full object-cover" />
                </motion.div>

                {/* Autoplaying muted video on hover */}
                <video
                    ref={videoRef}
                    muted loop playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0"
                >
                    <source src={vlog.video} type="video/mp4" />
                </video>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B5C8A] via-transparent to-transparent opacity-80 z-20" />

                {/* Play Button Icon */}
                <div className="absolute inset-0 flex items-center justify-center z-30">
                    <motion.div
                        animate={{ scale: isHovered ? 1.1 : 1, backgroundColor: isHovered ? '#D33C29' : 'rgba(255,255,255,0.2)' }}
                        className="w-16 h-16 rounded-full backdrop-blur-md flex items-center justify-center border border-white/30 transition-colors duration-300"
                    >
                        <Play fill="#fff" color="#fff" size={24} className="ml-1" />
                    </motion.div>
                </div>

                {/* Inner Text content resting on the bottom of the card */}
                <div className="absolute bottom-6 left-6 right-6 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <h3 className="text-white text-2xl font-bold font-['Plus_Jakarta_Sans']">{vlog.name}</h3>
                    <p className="text-[#D33C29] text-xs font-bold uppercase tracking-wider mt-1">{vlog.role}</p>
                    <motion.p
                        animate={{ opacity: isHovered ? 1 : 0, height: isHovered ? 'auto' : 0, marginTop: isHovered ? 12 : 0 }}
                        className="text-white/80 text-sm font-medium leading-relaxed"
                    >
                        {vlog.description}
                    </motion.p>
                </div>
            </div>
        </motion.div>
    );
}

export default function Testimonials() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-10% 0px' });

    return (
        <section ref={ref} className="py-40 md:py-48 lg:py-56 bg-[#0B5C8A] overflow-hidden">
            <div className="container-site mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-8"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[2px] bg-[#D33C29]" />
                            <span className="text-[#D33C29] text-[11px] font-bold uppercase tracking-[0.2em]">The Social Proof</span>
                        </div>
                        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold font-['Plus_Jakarta_Sans'] leading-tight">
                            Client Journals
                        </h2>
                    </div>
                    <p className="text-white/70 max-w-sm font-medium leading-relaxed">
                        Hear directly from the individuals and families who trusted us to find their legacy in Thrissur.
                    </p>
                </motion.div>
            </div>

            {/* Horizontal Streaming Carousel */}
            <div className="pl-[max(24px,calc((100vw-1200px)/2))] pb-10 overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                    className="flex gap-8 pr-[20vw]"
                >
                    {VLOGS.map(vlog => (
                        <VlogCard key={vlog.id} vlog={vlog} />
                    ))}
                </motion.div>
            </div>

            <style>{`
                .hide-scrollbar::-webkit-scrollbar { display: none; }
                .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </section>
    );
}
