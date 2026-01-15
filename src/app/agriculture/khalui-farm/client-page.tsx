'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X as XIcon, Menu, Sprout, MapPin, 
  ArrowRight, ArrowLeft, Leaf, Sun, Droplets,
  CheckCircle2, XCircle, FileText, Download,
  Calendar, ShoppingBasket, Phone, PlayCircle,
  AlertCircle, ChevronDown, Utensils, Scissors, Package, ThermometerSnowflake, ChefHat
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { HERO_VIDEO_URL, LOGO_URL, LOGO_TEXT, GALLERY_IMAGES, WHATSAPP_LINK } from './config';
import { Hero } from './components/hero';
import { Standard } from './components/standard';
import { Process } from './components/process';
import { Gallery } from './components/gallery';
import { Cta } from './components/cta';
import { LeadMagnets } from './components/lead-magnets';
import { Faq } from './components/faq';
import { Footer } from './components/footer';
import { FloatingInquiriesButton } from './components/floating-inquiries-button';

export default function KhaluiFarmClientPage() {

    return (
        <div className="bg-[#F4F4F2] text-[#141F14] selection:bg-[#D4AF37]/30 selection:text-[#141F14] min-h-screen overflow-x-hidden font-sans m-0 p-0 border-none">
            {/* Structural Styles */}
            <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Manrope:wght@200;300;400;500;600&display=swap" rel="stylesheet" />
            <style dangerouslySetInnerHTML={{ __html: `
                html, body { 
                    background-color: #F4F4F2 !important; 
                    margin: 0 !important; 
                    padding: 0 !important; 
                    border: none !important;
                    overscroll-behavior: none; 
                }
                .font-serif { font-family: 'Cinzel', serif; }
                .font-sans { font-family: 'Manrope', sans-serif; }
                ::-webkit-scrollbar { width: 4px; }
                ::-webkit-scrollbar-track { background: #F4F4F2; }
                ::-webkit-scrollbar-thumb { background: rgba(20, 31, 20, 0.2); border-radius: 10px; }
                body > header, body > footer, body > nav { display: none !important; }
                #khalui-wrapper { position: relative; z-index: 1; background: #F4F4F2; width: 100%; }
            `}} />

            <div id="khalui-wrapper">
                <FloatingInquiriesButton />
                <Hero />
                <Standard />
                <Process />
                <Gallery />
                <Cta />
                <LeadMagnets />
                <Faq />
                <Footer />
            </div>
        </div>
    );
}
