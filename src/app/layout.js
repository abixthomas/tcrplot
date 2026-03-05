import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export const metadata = {
    title: 'TCR Plots – Premium Land Deals in Thrissur, Kerala',
    description: 'Find verified residential, commercial & investment plots in Thrissur. 25+ years of experience. Clear title. Zero hidden charges.',
    keywords: 'plots in thrissur, land for sale thrissur, buy land thrissur, residential plots thrissur, investment land thrissur',
    openGraph: {
        title: 'TCR Plots – Premium Land Deals in Thrissur',
        description: 'Find your perfect plot in the heart of Kerala\'s cultural capital.',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700;800&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>
                <SmoothScroll>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                    <WhatsAppFloat />
                </SmoothScroll>
            </body>
        </html>
    );
}
