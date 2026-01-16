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
import FAQ from './components/faq';
import Footer from './footer';
import { FloatingInquiriesButton } from './components/floating-inquiries-button';

export default function KhaluiFarmClientPage() {

    return (
        <div className="bg-[#F4F4F2] text-[#141F14] selection:bg-[#D4AF37]/30 selection:text-[#141F14] min-h-screen overflow-x-hidden font-sans m-0 p-0 border-none">
            <div id="khalui-wrapper">
                <FloatingInquiriesButton />
                <Hero />
                <Standard />
                <Process />
                <Gallery />
                <Cta />
                <LeadMagnets />
                <FAQ />
                <Footer />
            </div>
        </div>
    );
}
