import React from 'react';
import { Camera, Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Search } from 'lucide-react';

interface HeroSectionProps {
  onScanClick: () => void;
  onTrySampleClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onScanClick,
  onTrySampleClick
}) => {
  return (
    <section className="relative pt-6 pb-14 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Col */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E4F0E5] border border-[#3D7954]/25 text-[#163D2B] text-xs font-semibold">
              <Sparkles size={14} className="text-[#3D7954]" />
              <span>Gemma 4 Multimodal Intelligence</span>
              <span className="w-1 h-1 rounded-full bg-[#3D7954]"></span>
              <span>Evidence-Backed Insights</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#163D2B] leading-[1.12]">
              What’s really in <br />
              <span className="text-[#3D7954] relative inline-block">
                your food?
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-[#3D7954]/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-[#68736B] leading-relaxed max-w-2xl font-normal">
              NutriScan AI decodes complex packaging labels, hidden additives, and cooked meal portions into transparent, evidence-based nutrition intelligence and honest recommendations.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onScanClick}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#163D2B] text-white font-semibold text-base shadow-sm hover:bg-[#0F2A1E] hover:shadow-md transition-all active:scale-[0.98]"
              >
                <Camera size={19} />
                <span>Scan your food</span>
                <ArrowRight size={17} className="ml-1 opacity-80" />
              </button>

              <button
                onClick={onTrySampleClick}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white text-[#163D2B] border border-[#E2E8E0] font-semibold text-base hover:bg-[#F6F4E9] hover:border-[#3D7954]/40 transition-all shadow-2xs"
              >
                <Sparkles size={17} className="text-[#3D7954]" />
                <span>Try a sample (90s Demo)</span>
              </button>
            </div>

            {/* Key Trust Signals */}
            <div className="pt-4 border-t border-[#E2E8E0]/70 flex flex-wrap items-center gap-6 text-xs text-[#68736B]">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-[#3D7954]" />
                <span>Verified OCR extraction</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={15} className="text-[#3D7954]" />
                <span>Transparent NOVA processing levels</span>
              </div>
              <div className="flex items-center gap-2">
                <Search size={15} className="text-[#3D7954]" />
                <span>Cites original packaging text</span>
              </div>
            </div>
          </div>

          {/* Right Visual Col: Interactive Mockup Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-white rounded-2xl border border-[#E2E8E0] shadow-xl p-5 overflow-hidden transition-all duration-300 hover:shadow-2xl">
              {/* Card Header with Scan Indicator */}
              <div className="flex items-center justify-between pb-3 border-b border-[#ECEEEA]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#E4F0E5] flex items-center justify-center text-[#163D2B]">
                    <Camera size={16} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#1D2921]">Dang Toasted Coconut Chips</h3>
                    <p className="text-[11px] text-[#68736B]">Analyzed via Gemma 4 Vision</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-[#E4F0E5] text-[#163D2B]">
                  Verified
                </span>
              </div>

              {/* Visual Image with Scanning Reticle Overlay */}
              <div className="relative my-4 rounded-xl overflow-hidden aspect-16/10 bg-[#F6F4E9]">
                <img
                  src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80"
                  alt="Packaged food scan preview"
                  className="w-full h-full object-cover"
                />
                {/* HUD Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute inset-3 border border-emerald-400/70 rounded-lg pointer-events-none flex flex-col justify-between p-2">
                  <div className="flex justify-between items-center text-[10px] text-emerald-200 font-mono">
                    <span className="bg-black/60 px-1.5 py-0.5 rounded">OCR: INGREDIENTS DETECTED</span>
                    <span className="bg-black/60 px-1.5 py-0.5 rounded">CONFIDENCE: 97%</span>
                  </div>
                  <div className="flex justify-between items-center text-[10px] text-white">
                    <span className="bg-[#163D2B]/90 px-2 py-1 rounded backdrop-blur-xs font-semibold">
                      NOVA 3 • Processed
                    </span>
                    <span className="bg-amber-600/90 px-2 py-1 rounded backdrop-blur-xs font-semibold">
                      High Sat. Fat (65% DV)
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Metrics Bar */}
              <div className="grid grid-cols-3 gap-2 text-center pt-1">
                <div className="p-2.5 rounded-xl bg-[#F6F4E9] border border-[#E2E8E0]/60">
                  <span className="block text-[10px] uppercase font-bold text-[#68736B]">Calories</span>
                  <span className="text-base font-extrabold text-[#1D2921] tabular-nums">180</span>
                  <span className="block text-[9px] text-[#68736B]">per 30g</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#FEF7ED] border border-[#A65D12]/20">
                  <span className="block text-[10px] uppercase font-bold text-[#A65D12]">Sat Fat</span>
                  <span className="text-base font-extrabold text-[#A65D12] tabular-nums">13g</span>
                  <span className="block text-[9px] text-[#A65D12]/80">65% DV</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#E4F0E5] border border-[#3D7954]/20">
                  <span className="block text-[10px] uppercase font-bold text-[#163D2B]">Sodium</span>
                  <span className="text-base font-extrabold text-[#163D2B] tabular-nums">115mg</span>
                  <span className="block text-[9px] text-[#3D7954]">5% DV (Low)</span>
                </div>
              </div>

              {/* Sample Evidence Callout */}
              <div className="mt-3 p-2.5 rounded-lg bg-[#F6F4E9]/80 border border-[#E2E8E0] text-[11px] text-[#1D2921] flex items-center justify-between">
                <span className="truncate">“Contains tree nuts (coconut). Shared line: milk.”</span>
                <span className="text-[#3D7954] font-semibold text-[10px] shrink-0 ml-2">CITED</span>
              </div>
            </div>

            {/* Ambient decorative back glow */}
            <div className="absolute -inset-4 -z-10 bg-radial from-[#E4F0E5]/80 via-transparent to-transparent blur-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
