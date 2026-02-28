import Hero from '@/components/home/Hero';
import FeaturedPlots from '@/components/home/FeaturedPlots';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import Testimonials from '@/components/home/Testimonials';
import BlogHighlights from '@/components/home/BlogHighlights';
import CTABanner from '@/components/home/CTABanner';
import AreasGrid from '@/components/home/AreasGrid';

export const metadata = {
    title: 'TCR Plots – Buy Premium Land in Thrissur, Kerala',
    description: 'Find verified residential, commercial & investment plots across Thrissur. 25 years of trust, clear title, zero hidden costs.',
};

export default function HomePage() {
    return (
        <>
            <Hero />
            <FeaturedPlots />
            <WhyChooseUs />
            <AreasGrid />
            <Testimonials />
            <BlogHighlights />
            <CTABanner />
        </>
    );
}
