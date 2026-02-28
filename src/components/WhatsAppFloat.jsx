'use client';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
    return (
        <motion.a
            href="https://wa.me/919876543210?text=Hi! I'm interested in plots from TCR Plots."
            target="_blank"
            rel="noopener noreferrer"
            className="wa-float"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', delay: 2, stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={26} fill="white" stroke="none" />
        </motion.a>
    );
}
