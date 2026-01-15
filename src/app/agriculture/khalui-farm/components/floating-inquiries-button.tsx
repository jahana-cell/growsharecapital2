'use client';

import { Sprout } from 'lucide-react';
import { cn } from '@/lib/utils';
import { WHATSAPP_LINK } from '../config';

export function FloatingInquiriesButton() {
    return (
        <div className="fixed bottom-8 right-6 z-[60] group">
            <div className="absolute bottom-3 right-16 bg-[#F4F4F2] text-[#141F14] text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-sm border border-[#141F14]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-xl font-sans">
                Partnership Inquiry
            </div>
            <a 
                href={WHATSAPP_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className={cn(
                    "relative flex items-center justify-center w-14 h-14 rounded-full transition-all duration-500 ease-out",
                    "bg-[#F4F4F2]/90 backdrop-blur-md border border-[#D4AF37]/50",
                    "shadow-[0_8px_30px_rgba(20,31,20,0.15)]",
                    "hover:scale-110 hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]",
                    "active:scale-95"
                )}
            >
                <span className="absolute top-0 right-0 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4AF37] border-2 border-[#F4F4F2]"></span>
                </span>
                <Sprout className="w-6 h-6 text-[#141F14] group-hover:text-[#D4AF37] transition-colors duration-300" />
            </a>
        </div>
    );
}