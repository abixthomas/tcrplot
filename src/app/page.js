import Hero from '@/components/home/Hero';
import ThrissurVideo from '@/components/home/ThrissurVideo';
import FeaturedPlots from '@/components/home/FeaturedPlots';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import Highlights from '@/components/home/Highlights';
import BlogHighlights from '@/components/home/BlogHighlights';
import ContactSection from '@/components/home/ContactSection';

export const metadata = {
    title: 'TCR Plots – Buy Premium Land in Thrissur, Kerala',
    description: 'Find verified residential, commercial & investment plots across Thrissur. 25 years of trust, clear title, zero hidden costs.',
    keywords: 'plots in thrissur, land for sale thrissur, buy land thrissur, residential plots thrissur, investment land thrissur, plot sale kerala',
    openGraph: {
        title: 'TCR Plots – Premium Land Deals in Thrissur',
        description: 'Find your perfect plot in the heart of Kerala\'s cultural capital. Verified, clear-title plots with 25 years of trust.',
        type: 'website',
        images: ['https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&auto=format&fit=crop'],
    },
};

export default function HomePage() {
    return (
        <>
            {/* 1. Hero — Cinematic slider + search panel + floating stats */}
            <Hero />

            <div className="h-32 md:h-48 lg:h-64 bg-[#FFFFFF] w-full" />

            {/* 2. Thrissur Video — Why invest in Thrissur, video + content */}
            <ThrissurVideo />

            <div className="h-32 md:h-48 lg:h-64 bg-[#FFFFFF] w-full" />

            {/* 3. Featured Plots — 3D tilt cards, unique listing design */}
            <FeaturedPlots />

            <div className="h-32 md:h-48 lg:h-64 bg-[#F9FAFB] w-full" />

            {/* 4. Why Choose Us — Dark section with numbered watermark cards */}
            <WhyChooseUs />

            <div className="h-32 md:h-48 lg:h-64 bg-[#FFFFFF] w-full" />

            {/* 5. Highlights — Animated counter numbers */}
            <Highlights />

            <div className="h-32 md:h-48 lg:h-64 bg-[#F3F4F6] w-full" />

            {/* 6. Testimonials — Review carousel with trust-building layout */}
            <Testimonials />

            <div className="h-32 md:h-48 lg:h-64 bg-[#0B5C8A] w-full" />

            {/* 7. Blog Highlights — Land intelligence articles */}
            <BlogHighlights />

            <div className="h-32 md:h-48 lg:h-64 bg-[#F9FAFB] w-full" />

            {/* 8. Contact Section — Full contact form + direct methods */}
            <ContactSection />
        </>
    );
}
