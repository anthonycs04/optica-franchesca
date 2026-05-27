import React, { useState, useEffect, useRef } from "react";
import logoTransparent from "@/imports/WhatsApp_Image_2026-05-18_at_4.46.52_PM-removebg-preview-1.png";
import heroImg from "@/imports/image.png";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import {
  Menu, X, Eye, Heart, Award, MessageCircle, MapPin, Clock,
  Phone, Mail, ChevronLeft, ChevronRight, Check, ArrowDown,
  Shield, Users, Gem, Wrench, Sun, Search, Droplets, Trophy,
  Sparkles, Star, Instagram, Facebook,
} from "lucide-react";

const fd: React.CSSProperties = { fontFamily: "'Playfair Display', serif" };
const fh: React.CSSProperties = { fontFamily: "'Cormorant Garamond', serif" };
const fb: React.CSSProperties = { fontFamily: "'DM Sans', sans-serif" };

const IMG = {
  hero:    "https://images.unsplash.com/photo-1748865829154-b7ebb33f9d2f?w=1400&fit=crop&auto=format&q=85",
  legacy1: "https://images.unsplash.com/photo-1752652011912-d9006dfb69b6?w=1100&fit=crop&auto=format&q=85",
  legacy2: "https://images.unsplash.com/photo-1752652011858-302f08a6dc9f?w=1100&fit=crop&auto=format&q=85",
  f1:  "https://images.unsplash.com/photo-1762337382241-054ae661c8e9?w=700&fit=crop&auto=format&q=80",
  f2:  "https://images.unsplash.com/photo-1764844463457-40b4a8657c93?w=700&fit=crop&auto=format&q=80",
  f3:  "https://images.unsplash.com/photo-1759096326676-23ea0ab3c309?w=700&fit=crop&auto=format&q=80",
  f4:  "https://images.unsplash.com/photo-1761661769253-7985a93e45f8?w=700&fit=crop&auto=format&q=80",
  f5:  "https://images.unsplash.com/photo-1749032717561-007aa5cdebcf?w=700&fit=crop&auto=format&q=80",
  f6:  "https://images.unsplash.com/photo-1764731667735-e0f8f7df971d?w=700&fit=crop&auto=format&q=80",
  g1:  "https://images.unsplash.com/photo-1747640730472-3070d5ed690d?w=700&fit=crop&auto=format&q=80",
  g2:  "https://images.unsplash.com/photo-1758552322632-ba288778c770?w=700&fit=crop&auto=format&q=80",
  g3:  "https://images.unsplash.com/photo-1759933253608-ba60cfb8dcf0?w=900&fit=crop&auto=format&q=80",
  g4:  "https://images.unsplash.com/photo-1755869980650-a021ab16279b?w=700&fit=crop&auto=format&q=80",
  g5:  "https://images.unsplash.com/photo-1760337871482-9dd93e75fa88?w=700&fit=crop&auto=format&q=80",
  g6:  "https://images.unsplash.com/photo-1746971848076-9b762bfe515e?w=900&fit=crop&auto=format&q=80",
  exam1: "https://images.unsplash.com/photo-1766310549795-dd0fc75d499f?w=900&fit=crop&auto=format&q=80",
  exam2: "https://images.unsplash.com/photo-1770221797840-8f5a095ad7ae?w=900&fit=crop&auto=format&q=80",
  before: "https://images.unsplash.com/photo-1589642380614-4a8c2147b857?w=600&fit=crop&auto=format&q=80",
  after:  "https://images.unsplash.com/photo-1660407013820-495d73d79845?w=600&fit=crop&auto=format&q=80",
  cta:    "https://images.unsplash.com/photo-1776890948428-5cb3e62cc680?w=1920&fit=crop&auto=format&q=80",
};

const WA = "https://wa.me/51999999999?text=Hola%2C+me+gustar%C3%ADa+agendar+una+evaluaci%C3%B3n+visual";

// ── Global styles ────────────────────────────────────────────
const GLOBAL_STYLES = `
  @keyframes floatY  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-16px)} }
  @keyframes floatY2 { 0%,100%{transform:translateY(0)} 50%{transform:translateY(12px)} }
  @keyframes floatY3 { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-8px) rotate(6deg)} }
  @keyframes gradShift {
    0%  { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100%{ background-position: 0% 50%; }
  }
  @keyframes shimmerSlide {
    0%  { transform: translateX(-120%) skewX(-20deg); }
    100%{ transform: translateX(250%)  skewX(-20deg); }
  }
  @keyframes pulseRing {
    0%,100%{ box-shadow: 0 0 0 0   rgba(245,197,24,0.55); }
    50%    { box-shadow: 0 0 0 14px rgba(245,197,24,0);    }
  }
  @keyframes spinSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes heroZoom { 0%{transform:scale(1)} 100%{transform:scale(1.10)} }
  @keyframes marqueeX  { from{transform:translateX(0)}   to{transform:translateX(-50%)} }
  @keyframes marqueeXR { from{transform:translateX(-50%)} to{transform:translateX(0)}   }
  @keyframes slideFromRight { from{opacity:0;transform:translateX(56px) scale(0.94)} to{opacity:1;transform:none} }
  @keyframes slideFromLeft  { from{opacity:0;transform:translateX(-56px) scale(0.94)} to{opacity:1;transform:none} }
  .slide-right{ animation:slideFromRight 0.44s cubic-bezier(0.22,1,0.36,1) both; }
  .slide-left { animation:slideFromLeft  0.44s cubic-bezier(0.22,1,0.36,1) both; }
  .float-up   { animation:floatY  6s ease-in-out infinite; }
  .float-down { animation:floatY2 8s ease-in-out infinite; }
  .float-tilt { animation:floatY3 7s ease-in-out infinite; }
  .spin-slow  { animation:spinSlow 20s linear infinite; }
  .pulse-ring { animation:pulseRing 2.5s ease-in-out infinite; }
  .hero-zoom  { animation:heroZoom 14s ease-in-out infinite alternate; }
  .marquee-fwd{ animation:marqueeX  44s linear infinite; }
  .marquee-rev{ animation:marqueeXR 44s linear infinite; }
  .grad-text {
    background: linear-gradient(90deg,#8B1A4A 0%,#D4366A 35%,#F5C518 65%,#C49010 100%);
    background-size: 200% auto;
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
    animation:gradShift 4s linear infinite;
  }
  .grad-text-white {
    background: linear-gradient(135deg,#ffffff 30%,rgba(245,197,24,0.95) 100%);
    -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
  }
  .shimmer-btn::after {
    content:''; position:absolute; inset:0;
    background:linear-gradient(90deg,transparent 0%,rgba(255,255,255,0.45) 50%,transparent 100%);
    animation:shimmerSlide 2.8s ease-in-out infinite; pointer-events:none;
  }
  .card-glow:hover { box-shadow:0 20px 60px rgba(139,26,74,0.22),0 0 0 1px rgba(245,197,24,0.2); }
`;

// ── useCounter ───────────────────────────────────────────────
function useCounter(target: number, duration = 1800) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el || target === 0) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      const t0 = Date.now();
      const tick = () => {
        const p = Math.min((Date.now() - t0) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        setCount(Math.floor(eased * target));
        if (p < 1) requestAnimationFrame(tick); else setCount(target);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.6 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return { ref, count };
}

// ── Reveal ───────────────────────────────────────────────────
type RevealDir = "up" | "left" | "right" | "scale";
function Reveal({
  children, delay = 0, className = "", immediate = false,
  from = "up" as RevealDir, style: extra,
}: {
  children: React.ReactNode; delay?: number; className?: string;
  immediate?: boolean; from?: RevealDir; style?: React.CSSProperties;
}) {
  const domRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (immediate) { const t = setTimeout(() => setVisible(true), delay); return () => clearTimeout(t); }
    const el = domRef.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.08 });
    obs.observe(el); return () => obs.disconnect();
  }, []); // eslint-disable-line
  const init: Record<RevealDir, string> = { up: "translateY(36px)", left: "translateX(-44px)", right: "translateX(44px)", scale: "scale(0.88) translateY(20px)" };
  const s: React.CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? "none" : init[from],
    transition: visible ? `opacity 0.75s ease-out ${immediate ? 0 : delay}ms, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${immediate ? 0 : delay}ms` : "none",
    ...extra,
  };
  return <div ref={immediate ? undefined : domRef} className={className} style={s}>{children}</div>;
}

// ── Icons ────────────────────────────────────────────────────
const WaIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.103 1.522 5.826L.057 23.5l5.835-1.451A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.01-1.374l-.358-.213-3.72.924.985-3.595-.235-.374A9.818 9.818 0 0112 2.182c5.426 0 9.818 4.392 9.818 9.818 0 5.427-4.392 9.818-9.818 9.818z"/>
  </svg>
);
const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.75a8.16 8.16 0 004.77 1.52V6.82a4.85 4.85 0 01-1-.13z"/>
  </svg>
);

function Dots({ count, active, onChange }: { count: number; active: number; onChange: (i: number) => void }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {Array.from({ length: count }).map((_, i) => (
        <button key={i} onClick={() => onChange(i)} className="rounded-full transition-all duration-300"
          style={{ width: active === i ? 28 : 8, height: 8, background: active === i ? "#F5C518" : "rgba(139,26,74,0.25)" }} />
      ))}
    </div>
  );
}

function Logo({ light = false }: { light?: boolean }) {
  return <ImageWithFallback src={logoTransparent} alt="Óptica Franchesca" className={`h-16 w-auto object-contain ${light ? "brightness-0 invert" : ""}`} />;
}

// ══════════════════════════════════════════════════════════════
// HEADER
// ══════════════════════════════════════════════════════════════
function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const links = ["Inicio", "Nosotros", "Servicios", "Monturas", "Diferenciales", "Testimonios", "Contacto"];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.92)",
        backdropFilter: "blur(18px)",
        borderBottom: scrolled ? "1px solid rgba(245,197,24,0.35)" : "1px solid rgba(245,197,24,0.2)",
        boxShadow: scrolled ? "0 4px 32px rgba(139,26,74,0.12)" : "none",
      }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[80px] flex items-center justify-between gap-4">
        <a href="#inicio" className="flex-shrink-0"><Logo /></a>
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="relative text-[13px] xl:text-[13.5px] text-[#1A1A1A] hover:text-[#8B1A4A] transition-colors duration-200 group whitespace-nowrap"
              style={fb}>
              {l}
              <span className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-gradient-to-r from-[#F5C518] to-[#8B1A4A] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 rounded-[8px] border border-[#25D366] text-[#25D366] text-[12.5px] font-medium hover:bg-[#25D366] hover:text-white transition-all duration-200"
            style={fb}><WaIcon size={14} /> WhatsApp</a>
          <a href="#contacto"
            className="relative overflow-hidden shimmer-btn px-4 py-2.5 rounded-[8px] bg-[#F5C518] text-[#1A1A1A] text-[13px] font-semibold hover:bg-[#E0B010] hover:-translate-y-px transition-all duration-200 shadow-sm"
            style={fb}>Agendar evaluación</a>
        </div>
        <button className="lg:hidden p-2 text-[#1A1A1A]" onClick={() => setOpen(v => !v)} aria-label="Menú">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <div className="lg:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? 480 : 0, background: "rgba(255,255,255,0.98)" }}>
        <div className="px-5 pt-2 pb-5 flex flex-col">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`}
              className="py-3 text-[15px] text-[#1A1A1A] border-b border-black/5 last:border-0 hover:text-[#8B1A4A] transition-colors"
              style={fb} onClick={() => setOpen(false)}>{l}</a>
          ))}
          <a href="#contacto"
            className="mt-4 py-3.5 text-center rounded-[8px] bg-[#F5C518] text-[#1A1A1A] text-[15px] font-semibold"
            style={fb} onClick={() => setOpen(false)}>Agendar evaluación visual</a>
        </div>
      </div>
    </header>
  );
}

// ══════════════════════════════════════════════════════════════
// HERO — Full-screen cinematic with ken-burns zoom
// ══════════════════════════════════════════════════════════════
function HeroSection() {
  return (
    <section id="inicio" className="relative overflow-hidden" style={{ minHeight: "100vh" }}>
      {/* Full-bleed image with zoom animation */}
      <div className="absolute inset-0 overflow-hidden">
        <img src={heroImg} alt="Óptica Franchesca"
          className="w-full h-full object-cover object-center hero-zoom" />
      </div>
      {/* Dark gradient overlay — heavier at bottom */}
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(to top, rgba(14,4,10,0.92) 0%, rgba(14,4,10,0.55) 45%, rgba(14,4,10,0.2) 75%, rgba(14,4,10,0.05) 100%)" }} />
      {/* Side gradient for breathing room */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block"
        style={{ background: "linear-gradient(to right, rgba(14,4,10,0.6) 0%, transparent 55%)" }} />

      {/* Floating orbs */}
      <div className="absolute top-[20%] right-[15%] w-56 h-56 rounded-full pointer-events-none float-up hidden lg:block"
        style={{ background: "radial-gradient(circle, rgba(245,197,24,0.18) 0%, transparent 70%)", filter: "blur(12px)" }} />
      <div className="absolute bottom-[35%] right-[35%] w-32 h-32 rounded-full pointer-events-none float-down hidden lg:block"
        style={{ background: "radial-gradient(circle, rgba(139,26,74,0.22) 0%, transparent 70%)", filter: "blur(8px)" }} />

      {/* Content — pinned to bottom-left */}
      <div className="relative z-10 h-full flex items-end pb-16 lg:pb-20 pt-[80px]" style={{ minHeight: "100vh" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div className="max-w-[640px]">
            <Reveal immediate delay={200}>
              <span className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-[#1A1A1A] text-[11px] font-semibold uppercase tracking-widest pulse-ring"
                style={{ ...fb, background: "linear-gradient(90deg, #F5C518, #F0A500)" }}>
                <Sparkles size={11} /> +24 años en Tacna
              </span>
            </Reveal>
            <Reveal immediate delay={350}>
              <h1 className="text-[52px] sm:text-[68px] lg:text-[80px] xl:text-[92px] leading-[1.0] text-white mb-5" style={fd}>
                Ver mejor,<br />
                vivir con <span className="grad-text">estilo</span>
              </h1>
            </Reveal>
            <Reveal immediate delay={520} from="left">
              <p className="text-[17px] sm:text-[19px] text-white/75 leading-[1.6] max-w-[500px] mb-8" style={fb}>
                Óptica Franchesca — legado familiar, optometrista profesional y las monturas más modernas de Tacna.
              </p>
            </Reveal>
            <Reveal immediate delay={680}>
              <div className="flex flex-wrap gap-3">
                <a href="#contacto"
                  className="relative overflow-hidden shimmer-btn px-8 py-4 rounded-[8px] text-[#1A1A1A] text-[15px] font-semibold hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
                  style={{ ...fb, background: "linear-gradient(135deg, #F5C518, #F0A500)", boxShadow: "0 4px 24px rgba(245,197,24,0.45)" }}>
                  Agendar evaluación visual
                </a>
                <a href="#nosotros"
                  className="px-8 py-4 rounded-[8px] border-[1.5px] border-white/50 text-white text-[15px] font-medium hover:bg-white/10 transition-all duration-200"
                  style={fb}>
                  Nuestra historia
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-50"
        style={{ animation: "floatY2 3s ease-in-out infinite" }}>
        <div className="w-px h-10 bg-white/60" />
        <ArrowDown size={14} className="text-white" />
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════
// PHOTO MARQUEE — dual-row auto-scroll strip
// ══════════════════════════════════════════════════════════════
function PhotoMarquee() {
  const row1 = [IMG.f1, IMG.g1, IMG.f2, IMG.g2, IMG.f3, IMG.g3, IMG.f4, IMG.g4];
  const row2 = [IMG.g5, IMG.f5, IMG.g6, IMG.f6, IMG.exam1, IMG.legacy1, IMG.exam2, IMG.legacy2];
  return (
    <div style={{ background: "#0C0308", paddingTop: 10, paddingBottom: 10, overflow: "hidden" }}>
      {[{ photos: row1, cls: "marquee-fwd" }, { photos: row2, cls: "marquee-rev" }].map(({ photos, cls }, ri) => (
        <div key={ri} style={{ overflow: "hidden", margin: "4px 0" }}>
          <div className={cls} style={{ display: "flex", width: "max-content" }}>
            {[...photos, ...photos].map((src, i) => (
              <div key={i} style={{ width: 220, height: 148, flexShrink: 0, margin: "0 4px", borderRadius: 6, overflow: "hidden" }}>
                <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ══════════════════════════════════════════════════════════════
// NOSOTROS — Full-bleed visual story split + Before/After
// ══════════════════════════════════════════════════════════════
function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const move = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos(Math.max(4, Math.min(96, ((clientX - rect.left) / rect.width) * 100)));
  };
  useEffect(() => {
    const up = () => { dragging.current = false; };
    const mm = (e: MouseEvent) => { if (dragging.current) move(e.clientX); };
    const tm = (e: TouchEvent) => { if (dragging.current) move(e.touches[0].clientX); };
    window.addEventListener("mouseup", up); window.addEventListener("mousemove", mm);
    window.addEventListener("touchend", up); window.addEventListener("touchmove", tm, { passive: true });
    return () => {
      window.removeEventListener("mouseup", up); window.removeEventListener("mousemove", mm);
      window.removeEventListener("touchend", up); window.removeEventListener("touchmove", tm);
    };
  }, []);
  return (
    <div ref={containerRef}
      className="relative overflow-hidden rounded-[20px] cursor-ew-resize select-none"
      style={{ height: "clamp(280px,42vw,440px)", boxShadow: "0 20px 60px rgba(139,26,74,0.15)" }}
      onMouseDown={() => { dragging.current = true; }}
      onTouchStart={() => { dragging.current = true; }}>
      <img src={IMG.before} alt="Nuestros orígenes" className="absolute inset-0 w-full h-full object-cover" style={{ filter: "sepia(40%) contrast(0.9)" }} />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <img src={IMG.after} alt="Hoy, más que nunca" className="w-full h-full object-cover" />
      </div>
      <div className="absolute top-0 bottom-0 z-10" style={{ left: `${pos}%`, width: 2, background: "linear-gradient(to bottom, #F5C518, #D4366A, #F5C518)" }} />
      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center shadow-xl"
        style={{ left: `${pos}%`, background: "linear-gradient(135deg, #F5C518, #F0A500)", boxShadow: "0 0 0 3px white, 0 4px 16px rgba(245,197,24,0.5)" }}>
        <ChevronLeft size={13} className="text-[#1A1A1A]" /><ChevronRight size={13} className="text-[#1A1A1A]" />
      </div>
      <span className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full text-[11px] font-semibold text-[#1A1A1A]"
        style={{ ...fb, background: "linear-gradient(90deg, #F5C518, #F0A500)" }}>Nuestros orígenes</span>
      <span className="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full text-[11px] font-semibold text-white"
        style={{ ...fb, background: "linear-gradient(90deg, #8B1A4A, #C4306B)" }}>Hoy, más que nunca</span>
    </div>
  );
}

function NosotrosSection() {
  return (
    <section id="nosotros" className="bg-white overflow-hidden">
      {/* ── Part 1: Full-bleed visual split ── */}
      <div className="flex flex-col lg:flex-row" style={{ minHeight: "88vh" }}>
        {/* Left: cinematic photo */}
        <div className="relative flex-1 min-h-[55vw] lg:min-h-0 overflow-hidden">
          <Reveal immediate delay={80} className="absolute inset-0">
            <img src={IMG.legacy2} alt="El legado familiar de Óptica Franchesca"
              className="w-full h-full object-cover object-center hero-zoom" />
          </Reveal>
          {/* Gradient blends photo into white panel */}
          <div className="absolute inset-0 pointer-events-none hidden lg:block"
            style={{ background: "linear-gradient(to right, transparent 55%, rgba(255,255,255,0.5) 76%, white 96%)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none lg:hidden"
            style={{ background: "linear-gradient(to bottom, transparent, white)" }} />
        </div>

        {/* Right: minimal text */}
        <div className="flex-shrink-0 lg:w-[44%] flex flex-col justify-center px-8 sm:px-12 lg:px-14 xl:px-20 py-16 lg:py-0">
          <Reveal delay={0} from="right">
            <span className="text-[11px] uppercase tracking-widest font-semibold block mb-6 text-[#8B1A4A]"
              style={{ ...fb, borderLeft: "3px solid #F5C518", paddingLeft: 12 }}>Nuestra historia</span>
          </Reveal>
          <Reveal delay={120} from="right">
            <h2 className="text-[40px] lg:text-[52px] xl:text-[58px] text-[#1A1A1A] leading-[1.1] mb-6" style={fd}>
              Una historia<br />familiar que<br />sigue <span className="grad-text">creciendo</span>
            </h2>
          </Reveal>
          <Reveal delay={240} from="right">
            <p className="text-[17px] text-[#6B6B6B] leading-[1.7] mb-4 max-w-[400px]" style={fb}>
              Más de 24 años cuidando la visión de Tacna. Una madre que sembró la semilla, una hija que lleva el legado con nueva visión.
            </p>
          </Reveal>
          <Reveal delay={320} from="right">
            <blockquote className="italic text-[#8B1A4A] text-[20px] leading-[1.5] mb-8 max-w-[380px]"
              style={{ ...fh, borderLeft: "3px solid #F5C518", paddingLeft: 16 }}>
              "La confianza de siempre, con una nueva visión para el futuro."
            </blockquote>
          </Reveal>
          <Reveal delay={420} from="right">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="relative overflow-hidden shimmer-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-[8px] text-[#1A1A1A] text-[15px] font-semibold w-fit"
              style={{ ...fb, background: "linear-gradient(135deg, #F5C518, #F0A500)", boxShadow: "0 4px 20px rgba(245,197,24,0.35)" }}>
              <WaIcon size={16} /> Contáctanos hoy
            </a>
          </Reveal>
        </div>
      </div>

      {/* ── Part 2: Before/After slider ── */}
      <div style={{ background: "#FDF8F0", padding: "80px 0" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal delay={0} className="text-center mb-10">
            <h3 className="text-[30px] lg:text-[38px] text-[#1A1A1A] mb-2" style={fd}>Antes y después</h3>
            <p className="text-[15px] text-[#6B6B6B]" style={fb}>Desliza para comparar nuestra evolución</p>
          </Reveal>
          <Reveal delay={120}><BeforeAfter /></Reveal>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════
// SERVICIOS — Visual photo card grid (Opticalia-style)
// ══════════════════════════════════════════════════════════════
const serviceCards = [
  { img: IMG.exam1, icon: <Eye size={20} />, title: "Atención por optometrista", sub: "Evaluación profesional y personalizada" },
  { img: IMG.f3,   icon: <Sparkles size={20} />, title: "Asesoría en monturas", sub: "Tu estilo, tu elección" },
  { img: IMG.g3,   icon: <Shield size={20} />, title: "Lentes oftálmicos", sub: "Anti-reflex, filtro azul, fotocromático" },
  { img: IMG.exam2, icon: <Search size={20} />, title: "Medida de vista", sub: "Diagnóstico visual preciso" },
  { img: IMG.g1,   icon: <Sun size={20} />, title: "Lentes de sol", sub: "Protección UV con estilo" },
  { img: IMG.g2,   icon: <Droplets size={20} />, title: "Lentes de contacto", sub: "Diarios, quincenales y mensuales" },
];

function ServiciosSection() {
  const [hov, setHov] = useState<number | null>(null);
  return (
    <section id="servicios" className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal delay={0} className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-widest font-semibold mb-3" style={{ ...fb, color: "#8B1A4A" }}>Lo que ofrecemos</p>
          <h2 className="text-[36px] lg:text-[46px] text-[#1A1A1A] mb-3" style={fd}>Nuestros servicios</h2>
          <p className="text-[16px] text-[#6B6B6B] max-w-[500px] mx-auto leading-relaxed" style={fb}>
            Te acompañamos desde la evaluación visual hasta la elección perfecta de tus lentes.
          </p>
        </Reveal>

        {/* 3-column photo grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {serviceCards.map((card, i) => (
            <Reveal key={i} delay={i * 70} from="scale"
              className="relative overflow-hidden rounded-xl cursor-pointer"
              style={{ aspectRatio: "3/4" }}
              >
              <img src={card.img} alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                style={{ transform: hov === i ? "scale(1.08)" : "scale(1)" }}
                onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)} />
              <div className="absolute inset-0 transition-all duration-400 pointer-events-none"
                style={{ background: hov === i
                  ? "linear-gradient(to top, rgba(139,26,74,0.9) 0%, rgba(26,10,20,0.35) 60%, transparent 100%)"
                  : "linear-gradient(to top, rgba(14,4,10,0.88) 0%, rgba(14,4,10,0.2) 55%, transparent 100%)" }} />
              {hov === i && (
                <div className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
                  style={{ background: "linear-gradient(90deg, #F5C518, #D4366A)" }} />
              )}
              <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-5 pointer-events-none">
                <div className="mb-1.5" style={{ color: "#F5C518" }}>{card.icon}</div>
                <h3 className="text-white text-[17px] lg:text-[19px] leading-snug" style={fh}>{card.title}</h3>
                <p className="text-white/70 text-[12px] mt-1 transition-all duration-300"
                  style={{ ...fb, opacity: hov === i ? 1 : 0, transform: hov === i ? "translateY(0)" : "translateY(6px)" }}>
                  {card.sub}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={440} className="flex flex-wrap gap-4 justify-center mt-10">
          <a href="#contacto"
            className="relative overflow-hidden shimmer-btn px-8 py-4 rounded-[8px] text-[#1A1A1A] text-[15px] font-semibold hover:-translate-y-0.5 transition-all duration-200"
            style={{ ...fb, background: "linear-gradient(135deg, #F5C518, #F0A500)", boxShadow: "0 4px 20px rgba(245,197,24,0.35)" }}>
            Agendar evaluación visual
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-[8px] border-[1.5px] border-[#8B1A4A] text-[#8B1A4A] text-[15px] font-semibold hover:bg-[#8B1A4A] hover:text-white transition-all duration-200"
            style={fb}>
            <WaIcon size={16} /> Consultar por WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════
// LOOKBOOK / MONTURAS — Editorial photo grid
// ══════════════════════════════════════════════════════════════
type LBItem = { img: string; cat: string; title: string };
const lookbookItems: LBItem[] = [
  { img: IMG.g3,  cat: "Monturas oftálmicas", title: "Para uso diario, trabajo y estudio" },
  { img: IMG.f1,  cat: "Monturas de tendencia", title: "Diseños modernos para renovar tu imagen" },
  { img: IMG.g4,  cat: "Marcas exclusivas", title: "Selección premium para cada estilo" },
  { img: IMG.f2,  cat: "Lentes de sol", title: "Protección visual con diseño" },
  { img: IMG.g6,  cat: "Lunas oftálmicas", title: "Filtro azul, UV, descanso y más" },
];
function LookbookCard({ item, tall = false }: { item: LBItem; tall?: boolean }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative overflow-hidden rounded-2xl cursor-pointer h-full min-h-[280px]"
      style={{ minHeight: tall ? 500 : 280 }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <img src={item.img} alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        style={{ transform: hovered ? "scale(1.07)" : "scale(1)" }} />
      <div className="absolute inset-0 transition-all duration-500"
        style={{ background: hovered
          ? "linear-gradient(to top, rgba(139,26,74,0.85) 0%, rgba(26,10,20,0.25) 65%, transparent 100%)"
          : "linear-gradient(to top, rgba(14,4,10,0.82) 0%, transparent 58%)" }} />
      <div className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300"
        style={{ background: "linear-gradient(90deg, #F5C518, #D4366A)", opacity: hovered ? 1 : 0 }} />
      <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
        <span className="inline-block px-2.5 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-[10px] uppercase tracking-wider font-semibold mb-2" style={fb}>
          {item.cat}
        </span>
        <h3 className="text-white text-[20px] leading-snug" style={fh}>{item.title}</h3>
      </div>
      <div className="absolute bottom-5 right-5 z-10 transition-all duration-300"
        style={{ opacity: hovered ? 1 : 0, transform: hovered ? "translateY(0)" : "translateY(10px)" }}>
        <a href={WA} target="_blank" rel="noopener noreferrer"
          className="inline-block px-4 py-2 rounded-[6px] text-[#1A1A1A] text-[12px] font-semibold"
          style={{ ...fb, background: "linear-gradient(90deg, #F5C518, #F0A500)" }}
          onClick={e => e.stopPropagation()}>Consultar</a>
      </div>
    </div>
  );
}
function LookbookSection() {
  return (
    <section id="monturas" style={{ background: "#0C0308", paddingTop: 80, paddingBottom: 80 }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal delay={0} className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-widest font-semibold mb-3" style={{ ...fb, color: "#F5C518" }}>Nuestra colección</p>
          <h2 className="text-[38px] lg:text-[50px] mb-4 grad-text-white" style={fd}>Lookbook de monturas</h2>
          <p className="text-[16px] max-w-[520px] mx-auto leading-relaxed" style={{ ...fb, color: "rgba(255,255,255,0.6)" }}>
            Explora monturas que combinan estilo, comodidad y calidad visual.
          </p>
        </Reveal>
        {/* Row 1: big left + 2 right */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <Reveal delay={80} from="left" className="sm:col-span-2">
            <LookbookCard item={lookbookItems[0]} tall />
          </Reveal>
          <div className="flex flex-col gap-4">
            <Reveal delay={140} from="right" className="flex-1"><LookbookCard item={lookbookItems[1]} /></Reveal>
            <Reveal delay={200} from="right" className="flex-1"><LookbookCard item={lookbookItems[2]} /></Reveal>
          </div>
        </div>
        {/* Row 2: 2 equal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Reveal delay={260} from="scale"><LookbookCard item={lookbookItems[3]} /></Reveal>
          <Reveal delay={320} from="scale"><LookbookCard item={lookbookItems[4]} /></Reveal>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════
// DIFERENCIALES — icon-only grid, sin texto descriptivo
// ══════════════════════════════════════════════════════════════
const diffItems = [
  { icon: <Trophy size={36} />,      label: "+24 años" },
  { icon: <Eye size={36} />,         label: "Optometrista" },
  { icon: <Heart size={36} />,       label: "Legado familiar" },
  { icon: <MessageCircle size={36}/>, label: "Asesoría" },
  { icon: <Sparkles size={36} />,    label: "Tendencia" },
  { icon: <Gem size={36} />,         label: "Premium" },
];

function DiferencialesSection() {
  const [hov, setHov] = useState<number | null>(null);
  return (
    <section id="diferenciales" className="relative overflow-hidden" style={{ background: "#1A0A14" }}>
      {/* Photo backdrop */}
      <div className="absolute inset-0 opacity-[0.10]">
        <img src={IMG.g6} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #1A0A14 0%, rgba(26,10,20,0.6) 50%, #1A0A14 100%)" }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(245,197,24,0.08) 0%, transparent 70%)" }} />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <Reveal delay={0} className="text-center mb-14">
          <p className="text-[11px] uppercase tracking-widest font-semibold mb-3" style={{ ...fb, color: "#F5C518" }}>Por qué elegirnos</p>
          <h2 className="text-[36px] lg:text-[50px] grad-text-white" style={fd}>¿Por qué Óptica Franchesca?</h2>
        </Reveal>

        {/* Icon grid */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-4 mb-16">
          {diffItems.map((item, i) => (
            <Reveal key={i} delay={i * 60} from="scale">
              <div className="flex flex-col items-center gap-3 cursor-default"
                onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}>
                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: hov === i
                      ? "linear-gradient(135deg, #F5C518, #F0A500)"
                      : "rgba(245,197,24,0.1)",
                    border: hov === i ? "none" : "1px solid rgba(245,197,24,0.2)",
                    color: hov === i ? "#1A1A1A" : "#F5C518",
                    transform: hov === i ? "scale(1.12)" : "scale(1)",
                    boxShadow: hov === i ? "0 8px 28px rgba(245,197,24,0.35)" : "none",
                  }}>
                  {item.icon}
                </div>
                <span className="text-[12px] lg:text-[13px] text-center uppercase tracking-wider font-medium"
                  style={{ ...fb, color: hov === i ? "#F5C518" : "rgba(255,255,255,0.55)" }}>
                  {item.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Stats strip */}
        <Reveal delay={400}>
          <div className="grid grid-cols-3 pt-10" style={{ borderTop: "1px solid rgba(245,197,24,0.18)" }}>
            {[
              { num: "24+", label: "Años" },
              { num: "Miles", label: "Familias" },
              { num: "100%", label: "Personalizado" },
            ].map(({ num, label }, i) => (
              <div key={i} className="text-center px-4 py-2"
                style={{ borderRight: i < 2 ? "1px solid rgba(245,197,24,0.15)" : "none" }}>
                <p className="text-[44px] lg:text-[56px] text-white leading-none" style={fd}>{num}</p>
                <p className="text-[10px] uppercase tracking-widest mt-2" style={{ ...fb, color: "rgba(255,255,255,0.4)" }}>{label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════
// TESTIMONIOS — Video testimonials
// ══════════════════════════════════════════════════════════════
const videoTestimonials = [
  { thumb: IMG.f4, name: "María R.", detail: "Cliente desde 2015 · Tacna", quote: "La mejor óptica de Tacna" },
  { thumb: IMG.f6, name: "Lucía F.", detail: "Cliente frecuente", quote: "Atención increíble" },
  { thumb: IMG.f2, name: "Carmen V.", detail: "Familia tacneña", quote: "Confío en ellas siempre" },
  { thumb: IMG.f1, name: "Sandra M.", detail: "Cliente nueva", quote: "Superaron mis expectativas" },
];

function VideoCard({ v, delay = 0 }: { v: typeof videoTestimonials[0]; delay?: number }) {
  const [playing, setPlaying] = useState(false);
  const [hov, setHov] = useState(false);
  return (
    <Reveal delay={delay} from="scale" className="relative overflow-hidden rounded-2xl cursor-pointer"
      style={{ aspectRatio: "9/16" }}>
      {/* Thumbnail */}
      <img src={v.thumb} alt={v.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        style={{ transform: hov && !playing ? "scale(1.06)" : "scale(1)" }} />

      {/* Dark overlay */}
      <div className="absolute inset-0 transition-all duration-400"
        style={{ background: playing
          ? "rgba(0,0,0,0.85)"
          : hov
            ? "linear-gradient(to top, rgba(14,4,10,0.9) 0%, rgba(14,4,10,0.3) 50%, transparent 100%)"
            : "linear-gradient(to top, rgba(14,4,10,0.85) 0%, rgba(14,4,10,0.15) 55%, transparent 100%)" }} />

      {/* Play button */}
      {!playing && (
        <button
          className="absolute inset-0 flex items-center justify-center z-10"
          onClick={() => setPlaying(true)}
          onMouseEnter={() => setHov(true)}
          onMouseLeave={() => setHov(false)}
          aria-label="Reproducir testimonio">
          <div className="w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: hov ? "linear-gradient(135deg,#F5C518,#F0A500)" : "rgba(255,255,255,0.92)",
              transform: hov ? "scale(1.15)" : "scale(1)",
              boxShadow: hov ? "0 8px 32px rgba(245,197,24,0.5)" : "0 4px 20px rgba(0,0,0,0.3)",
            }}>
            {/* Play triangle */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill={hov ? "#1A1A1A" : "#1A1A1A"}>
              <polygon points="5,3 19,12 5,21" />
            </svg>
          </div>
        </button>
      )}

      {/* Playing state: simulated player */}
      {playing && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 p-6"
          onClick={() => setPlaying(false)}>
          <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
            style={{ background: "linear-gradient(135deg,#F5C518,#F0A500)" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#1A1A1A">
              <rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>
            </svg>
          </div>
          <p className="text-white/70 text-[12px] text-center" style={fb}>Toca para pausar</p>
          {/* Fake progress bar */}
          <div className="absolute bottom-16 left-4 right-4 h-[3px] rounded-full bg-white/20">
            <div className="h-full rounded-full w-1/3"
              style={{ background: "linear-gradient(90deg,#F5C518,#F0A500)", animation: "marqueeX 8s linear infinite" }} />
          </div>
        </div>
      )}

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 pointer-events-none">
        <div className="flex gap-0.5 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={12} className="fill-[#F5C518] text-[#F5C518]" />
          ))}
        </div>
        <p className="text-white text-[15px] italic mb-1" style={fh}>"{v.quote}"</p>
        <p className="text-white/90 text-[13px] font-semibold" style={fb}>{v.name}</p>
        <p className="text-white/55 text-[11px]" style={fb}>{v.detail}</p>
      </div>

      {/* Top gradient accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-300 pointer-events-none"
        style={{ background: "linear-gradient(90deg,#F5C518,#D4366A)", opacity: hov ? 1 : 0 }} />
    </Reveal>
  );
}

function TestimoniosSection() {
  return (
    <section id="testimonios" className="py-20 lg:py-28 overflow-hidden"
      style={{ background: "#0C0308" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal delay={0} className="text-center mb-12">
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-[#1A1A1A] text-[11px] font-semibold uppercase tracking-widest"
            style={{ ...fb, background: "linear-gradient(90deg,#F5C518,#F0A500)" }}>
            Nuestros clientes hablan
          </span>
          <h2 className="text-[34px] lg:text-[46px] mt-2 grad-text-white" style={fd}>
            Historias reales,<br />confianza de verdad
          </h2>
        </Reveal>

        {/* Video grid — 4 portrait cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {videoTestimonials.map((v, i) => (
            <VideoCard key={i} v={v} delay={i * 80} />
          ))}
        </div>

        <Reveal delay={400} className="text-center mt-10">
          <a href={WA} target="_blank" rel="noopener noreferrer"
            className="relative overflow-hidden shimmer-btn inline-flex items-center gap-2 px-7 py-3.5 rounded-[8px] text-[#1A1A1A] text-[15px] font-semibold hover:-translate-y-0.5 transition-all duration-200"
            style={{ ...fb, background: "linear-gradient(135deg,#F5C518,#F0A500)", boxShadow: "0 4px 20px rgba(245,197,24,0.35)" }}>
            <WaIcon size={16} /> Agenda tu cita hoy
          </a>
        </Reveal>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════
// CTA — Full-screen cinematic
// ══════════════════════════════════════════════════════════════
function StatNumber({ raw }: { raw: string }) {
  const match = raw.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const { ref, count } = useCounter(target, 1800);
  if (!match) return <span style={fd} className="text-[44px] text-white font-semibold leading-tight">{raw}</span>;
  return <span ref={ref} style={fd} className="text-[44px] text-white font-semibold leading-tight">{count}{suffix}</span>;
}

function CTASection() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ minHeight: "90vh" }}>
      <div className="absolute inset-0 overflow-hidden">
        <img src={IMG.cta} alt="" className="w-full h-full object-cover hero-zoom" />
        <div className="absolute inset-0"
          style={{ background: "linear-gradient(145deg,rgba(139,26,74,0.93) 0%,rgba(80,10,45,0.88) 50%,rgba(26,10,20,0.92) 100%)" }} />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "linear-gradient(rgba(245,197,24,1) 1px,transparent 1px),linear-gradient(90deg,rgba(245,197,24,1) 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
      </div>

      <div className="absolute top-1/4 left-[10%] w-48 h-48 rounded-full pointer-events-none float-up"
        style={{ background: "radial-gradient(circle,rgba(245,197,24,0.15) 0%,transparent 70%)", filter: "blur(20px)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <Reveal delay={0}>
          <span className="inline-block mb-8 px-5 py-2 rounded-full text-white text-[11px] font-semibold uppercase tracking-widest"
            style={{ ...fb, background: "rgba(245,197,24,0.18)", border: "1px solid rgba(245,197,24,0.45)" }}>
            Agenda hoy tu evaluación
          </span>
        </Reveal>
        <Reveal delay={150}>
          <h2 className="text-[44px] sm:text-[56px] lg:text-[68px] text-white leading-[1.05] mb-6" style={fd}>
            Cuida tu visión con<br />atención <span className="grad-text">profesional</span><br />y personalizada
          </h2>
        </Reveal>
        <Reveal delay={300}>
          <p className="text-[17px] max-w-[520px] mx-auto leading-[1.65] mb-10"
            style={{ ...fb, color: "rgba(255,255,255,0.75)" }}>
            Agenda tu evaluación visual en Óptica Franchesca y encuentra los lentes ideales para ti.
          </p>
        </Reveal>
        <Reveal delay={440}>
          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 rounded-[8px] text-white text-[15px] font-medium hover:bg-white/15 transition-all duration-200"
              style={{ ...fb, border: "1.5px solid rgba(255,255,255,0.55)" }}>
              <WaIcon /> Agendar por WhatsApp
            </a>
            <a href="#contacto"
              className="relative overflow-hidden shimmer-btn px-8 py-4 rounded-[8px] text-[#1A1A1A] text-[15px] font-medium transition-all duration-200 hover:-translate-y-0.5"
              style={{ ...fb, background: "linear-gradient(135deg,#F5C518,#F0A500)", boxShadow: "0 4px 24px rgba(245,197,24,0.4)" }}>
              Enviar consulta
            </a>
          </div>
        </Reveal>
        <Reveal delay={560}>
          <div className="flex flex-wrap justify-center gap-8 pt-8" style={{ borderTop: "1px solid rgba(245,197,24,0.25)" }}>
            {[{ num: "24+", label: "Años de experiencia" }, { num: "Miles", label: "Familias atendidas" }, { num: "100%", label: "Atención personalizada" }].map(({ num, label }, i) => (
              <React.Fragment key={i}>
                {i > 0 && <div className="hidden sm:block w-px self-stretch" style={{ background: "linear-gradient(to bottom,transparent,rgba(245,197,24,0.4),transparent)" }} />}
                <div className="text-center px-4">
                  <StatNumber raw={num} />
                  <p className="text-[11px] uppercase tracking-wider mt-1" style={{ ...fb, color: "rgba(255,255,255,0.5)" }}>{label}</p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════
// CONTACTO
// ══════════════════════════════════════════════════════════════
function ContactoSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ nombre: "", telefono: "", email: "", motivo: "", mensaje: "" });
  const inputBase: React.CSSProperties = {
    ...fb, width: "100%", padding: "12px 16px", borderRadius: 8,
    border: "1.5px solid #E8D5A3", background: "#FAFAFA",
    fontSize: 14, color: "#1A1A1A", outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
  };
  const onFocus = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "#F5C518"; e.target.style.boxShadow = "0 0 0 3px rgba(245,197,24,0.18)";
  };
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = "#E8D5A3"; e.target.style.boxShadow = "none";
  };
  return (
    <section id="contacto" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal delay={0} className="text-center mb-12">
          <p className="text-[11px] uppercase tracking-widest font-semibold mb-3" style={{ ...fb, color: "#8B1A4A" }}>Estamos aquí para ti</p>
          <h2 className="text-[34px] lg:text-[42px] text-[#1A1A1A] mb-4" style={fd}>Contáctanos o visítanos en Tacna</h2>
          <p className="text-[16px] text-[#6B6B6B] max-w-[520px] mx-auto leading-relaxed" style={fb}>
            Agenda tu evaluación visual o visítanos para recibir atención personalizada.
          </p>
        </Reveal>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <Reveal delay={100} from="left">
            <div className="bg-white rounded-[20px] p-7 lg:p-10" style={{ boxShadow: "0 4px 32px rgba(139,26,74,0.08)", border: "1px solid rgba(245,197,24,0.15)" }}>
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                    <Check size={30} className="text-green-600" />
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#1A1A1A] text-center" style={fd}>¡Gracias por contactarte!</h3>
                  <p className="text-[14px] text-[#6B6B6B] text-center max-w-[300px] leading-relaxed" style={fb}>
                    Nos comunicaremos contigo pronto para ayudarte con tu consulta visual.
                  </p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[13px] font-medium text-[#1A1A1A] mb-1.5" style={fb}>Nombre completo</label>
                      <input type="text" required placeholder="Tu nombre" style={inputBase} value={form.nombre}
                        onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} onFocus={onFocus} onBlur={onBlur} />
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-[#1A1A1A] mb-1.5" style={fb}>Teléfono / WhatsApp</label>
                      <input type="tel" placeholder="+51 999 999 999" style={inputBase} value={form.telefono}
                        onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))} onFocus={onFocus} onBlur={onBlur} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-[#1A1A1A] mb-1.5" style={fb}>Correo electrónico</label>
                    <input type="email" placeholder="tu@correo.com" style={inputBase} value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))} onFocus={onFocus} onBlur={onBlur} />
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-[#1A1A1A] mb-1.5" style={fb}>Motivo de consulta</label>
                    <select required style={{ ...inputBase, cursor: "pointer" }} value={form.motivo}
                      onChange={e => setForm(f => ({ ...f, motivo: e.target.value }))} onFocus={onFocus} onBlur={onBlur}>
                      <option value="">Selecciona un motivo</option>
                      <option>Quiero agendar una evaluación visual</option>
                      <option>Quiero consultar por monturas</option>
                      <option>Quiero información sobre lentes de sol</option>
                      <option>Quiero renovar mis lentes</option>
                      <option>Quiero consultar por precios</option>
                      <option>Otro motivo</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[13px] font-medium text-[#1A1A1A] mb-1.5" style={fb}>Mensaje (opcional)</label>
                    <textarea placeholder="Cuéntanos en qué podemos ayudarte..."
                      style={{ ...inputBase, minHeight: 100, resize: "vertical" }}
                      value={form.mensaje}
                      onChange={e => setForm(f => ({ ...f, mensaje: e.target.value }))}
                      onFocus={onFocus} onBlur={onBlur} />
                  </div>
                  <button type="submit"
                    className="relative overflow-hidden shimmer-btn w-full py-4 rounded-[8px] text-[#1A1A1A] text-[15px] font-semibold"
                    style={{ ...fb, background: "linear-gradient(135deg,#F5C518,#F0A500)" }}>
                    Enviar consulta
                  </button>
                </form>
              )}
            </div>
          </Reveal>
          <Reveal delay={200} from="right" className="flex flex-col gap-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60587.27!2d-70.2996!3d-18.0146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915a24eca9df2523%3A0x19f94eb7cac7c29b!2sTacna%2C+Per%C3%BA!5e0!3m2!1ses!2spe!4v1622000000000"
              width="100%" height="280" style={{ border: 0, borderRadius: 16, boxShadow: "0 4px 24px rgba(139,26,74,0.08)" }}
              allowFullScreen loading="lazy" title="Ubicación Óptica Franchesca, Tacna" />
            <div className="bg-white rounded-2xl p-5" style={{ boxShadow: "0 4px 24px rgba(139,26,74,0.06)", border: "1px solid rgba(245,197,24,0.15)" }}>
              {[
                { icon: <MapPin size={16} />, text: "Calle Comercio 450, Tacna, Perú" },
                { icon: <Clock size={16} />, text: "Lun–Sáb: 9:00–20:00 · Dom: 10:00–14:00" },
                { icon: <Phone size={16} />, text: "+51 999 999 999" },
                { icon: <Mail size={16} />, text: "opticafranchesca@gmail.com" },
              ].map(({ icon, text }, i) => (
                <div key={i} className="flex items-center gap-3 py-2.5 border-b border-black/5 last:border-0">
                  <span style={{ color: "#8B1A4A" }} className="flex-shrink-0">{icon}</span>
                  <span className="text-[14px] text-[#1A1A1A]" style={fb}>{text}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a href="https://maps.google.com/?q=Tacna,Peru" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-[8px] border-[1.5px] border-[#8B1A4A] text-[#8B1A4A] text-[14px] font-medium hover:bg-[#8B1A4A] hover:text-white transition-all duration-200"
                style={fb}>
                <MapPin size={15} /> Cómo llegar
              </a>
              <a href={WA} target="_blank" rel="noopener noreferrer"
                className="relative overflow-hidden shimmer-btn flex items-center gap-2 px-5 py-3 rounded-[8px] text-[#1A1A1A] text-[14px] font-medium"
                style={{ ...fb, background: "linear-gradient(135deg,#F5C518,#F0A500)" }}>
                <WaIcon size={15} /> Escribir por WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ══════════════════════════════════════════════════════════════
// FOOTER
// ══════════════════════════════════════════════════════════════
function FooterSection() {
  const navLinks = ["Inicio", "Nosotros", "Servicios", "Monturas", "Diferenciales", "Testimonios", "Contacto"];
  return (
    <footer style={{ background: "#0E040A" }}>
      <div className="h-[3px]" style={{ background: "linear-gradient(90deg,#F5C518,#D4366A,#8B1A4A,#F5C518)" }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Logo light />
            <div className="w-10 h-[2px] my-4" style={{ background: "linear-gradient(90deg,#F5C518,#D4366A)" }} />
            <p className="italic text-[15px] leading-[1.6] max-w-[220px]" style={{ ...fh, color: "rgba(255,255,255,0.6)" }}>
              Más de 24 años cuidando la visión de las familias tacneñas.
            </p>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-wider font-semibold mb-5 text-[#F5C518]" style={fb}>Navegación</h4>
            <div className="flex flex-col gap-2.5">
              {navLinks.map(l => (
                <a key={l} href={`#${l.toLowerCase()}`}
                  className="text-[14px] hover:text-white transition-colors duration-200 group flex items-center gap-1"
                  style={{ ...fb, color: "rgba(255,255,255,0.6)" }}>
                  <span className="w-0 group-hover:w-3 h-[1px] bg-[#F5C518] transition-all duration-200 overflow-hidden" />
                  {l}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-wider font-semibold mb-5 text-[#F5C518]" style={fb}>Visítanos</h4>
            <div className="flex flex-col gap-3">
              {[
                { icon: <MapPin size={14} />, text: "Calle Comercio 450, Tacna, Perú" },
                { icon: <Clock size={14} />, text: "Lun–Sáb: 9:00–20:00 · Dom: 10:00–14:00" },
                { icon: <Phone size={14} />, text: "+51 999 999 999" },
                { icon: <Mail size={14} />, text: "opticafranchesca@gmail.com" },
              ].map(({ icon, text }, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <span className="text-[#F5C518] flex-shrink-0 mt-0.5">{icon}</span>
                  <span className="text-[13px] leading-snug" style={{ ...fb, color: "rgba(255,255,255,0.6)" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-wider font-semibold mb-5 text-[#F5C518]" style={fb}>Síguenos</h4>
            <div className="flex gap-3 mb-6">
              {[
                { icon: <Instagram size={18} />, label: "Instagram" },
                { icon: <TikTokIcon size={18} />, label: "TikTok" },
                { icon: <Facebook size={18} />, label: "Facebook" },
              ].map(({ icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:-translate-y-1"
                  style={{ border: "1px solid rgba(245,197,24,0.25)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "linear-gradient(135deg,#F5C518,#F0A500)"; (e.currentTarget as HTMLElement).style.color = "#1A1A1A"; (e.currentTarget as HTMLElement).style.borderColor = "transparent"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = ""; (e.currentTarget as HTMLElement).style.color = "white"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(245,197,24,0.25)"; }}>
                  {icon}
                </a>
              ))}
            </div>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-[8px] text-[#1A1A1A] text-[13px] font-semibold w-fit transition-all duration-200 hover:-translate-y-0.5"
              style={{ ...fb, background: "linear-gradient(135deg,#F5C518,#F0A500)" }}>
              <WaIcon size={15} /> WhatsApp
            </a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p className="text-[12px]" style={{ ...fb, color: "rgba(255,255,255,0.35)" }}>
            © 2025 Óptica Franchesca. Todos los derechos reservados. · Tacna, Perú
          </p>
          <div className="w-8 h-[1px]" style={{ background: "linear-gradient(90deg,#F5C518,#D4366A)" }} />
        </div>
      </div>
    </footer>
  );
}

// ══════════════════════════════════════════════════════════════
// WHATSAPP FAB
// ══════════════════════════════════════════════════════════════
function WhatsAppFAB() {
  return (
    <a href={WA} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
      className="lg:hidden fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl transition-transform duration-200 hover:scale-110 pulse-ring"
      style={{ background: "linear-gradient(135deg,#25D366,#1aad54)" }}>
      <WaIcon size={24} />
    </a>
  );
}

// ══════════════════════════════════════════════════════════════
// APP ROOT
// ══════════════════════════════════════════════════════════════
export default function App() {
  return (
    <div className="overflow-x-hidden" style={fb}>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_STYLES }} />
      <Header />
      <HeroSection />
      <PhotoMarquee />
      <NosotrosSection />
      <ServiciosSection />
      <LookbookSection />
      <DiferencialesSection />
      <TestimoniosSection />
      <CTASection />
      <ContactoSection />
      <FooterSection />
      <WhatsAppFAB />
    </div>
  );
}
