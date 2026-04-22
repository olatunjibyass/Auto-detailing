/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { 
  Car, 
  ShieldCheck, 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  ArrowRight, 
  Menu, 
  X, 
  CheckCircle2, 
  Zap,
  Droplets,
  Sparkles,
  Calendar,
  Mail,
  Smartphone
} from "lucide-react";

const LOGO_URL = "https://cdn.imagetourl.cloud/uploads/o1clwsnk.png";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const PHONE_NUMBER = "3432976514";
  const PHONE_HREF = `tel:${PHONE_NUMBER}`;
  const BOOKING_URL = "https://shineautozonedetailing.setmore.com/yousef";

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Fixed Top Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-dark/95 backdrop-blur-sm border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img 
              src={LOGO_URL} 
              alt="Shine Auto Logo" 
              className="h-14 w-auto drop-shadow-md"
              referrerPolicy="no-referrer"
            />
            <span className="font-heading text-xl sm:text-2xl tracking-tighter text-brand">Shine Auto</span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-heading text-lg tracking-widest">
            <a href="#services" className="hover:text-brand transition-colors">Services</a>
            <a href="#how-it-works" className="hover:text-brand transition-colors text-nowrap">How It Works</a>
            <a href="#reviews" className="hover:text-brand transition-colors">Reviews</a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-brand text-dark px-6 py-2 hover:bg-white transition-all transform hover:scale-105 active:scale-95 whitespace-nowrap uppercase">Book Now</a>
          </div>

          <button className="md:hidden text-brand" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-dark flex flex-col p-8 md:hidden">
          <div className="flex justify-end mb-8">
            <button onClick={() => setMobileMenuOpen(false)} className="text-brand">
              <X size={40} />
            </button>
          </div>
          <div className="flex flex-col gap-8 items-center font-heading text-4xl mt-12">
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand">Services</a>
            <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand">How It Works</a>
            <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="hover:text-brand">Reviews</a>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)} className="bg-brand text-dark px-12 py-4 mt-4 uppercase">Book Now</a>
            <a href={PHONE_HREF} onClick={() => setMobileMenuOpen(false)} className="text-brand border-b border-brand pb-2 uppercase text-2xl mt-4">Or Call To Book</a>
          </div>
        </div>
      )}

      {/* 2. Full-Screen Hero */}
      <header className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1601362840469-51e4d8d59085?q=80&w=2070&auto=format&fit=crop" 
            alt="Car detailing" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 w-full relative z-10 py-12 text-white">
          <div className="animate-fade-in stagger-1">
            <img 
              src={LOGO_URL} 
              alt="Brand Identity" 
              className="h-32 w-auto mb-10 drop-shadow-[0_0_25px_rgba(16,185,129,0.3)] bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10"
              referrerPolicy="no-referrer"
            />
            <h1 className="text-7xl md:text-[140px] leading-[0.8] mb-8 font-heading">
              Your Car.<br/><span className="text-brand">Spotless.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-lg font-light leading-relaxed">
              Ottawa & Gatineau's premier mobile detailing service. Professional care delivered directly to your driveway.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-brand text-dark border-2 border-brand px-10 py-4 font-heading text-xl tracking-widest hover:bg-transparent hover:text-brand transition-all uppercase">Book Now</a>
              <a href={PHONE_HREF} className="border-2 border-white px-10 py-4 font-heading text-xl tracking-widest hover:border-brand hover:text-brand transition-all uppercase">Call Us</a>
            </div>
          </div>

          <div className="hidden md:flex flex-col justify-center items-end gap-16 animate-fade-in stagger-3">
            {[
              { val: "500+", label: "Vehicles" },
              { val: "5-Star", label: "Rating" },
              { val: "100%", label: "Mobile" }
            ].map((stat, i) => (
              <div key={i} className="text-right border-r-4 border-brand pr-8">
                <span className="block text-6xl font-heading text-brand leading-none">{stat.val}</span>
                <span className="block text-xl uppercase tracking-widest text-white/40">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* 3. Gold Announcement Strip */}
      <div className="bg-brand text-dark py-3 px-6 overflow-hidden">
        <div className="flex whitespace-nowrap gap-12 font-heading text-xl tracking-[0.2em] animate-marquee uppercase italic">
          {[1,2,3,4].map(n => (
            <span key={n}>Mobile Service · Ottawa, Gatineau & Surrounding Area · Eco-Friendly Products · Satisfaction Guaranteed</span>
          ))}
        </div>
      </div>

      {/* 4. About Section */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative group p-12 bg-white/10 border border-white/20 flex items-center justify-center animate-fade-in stagger-1 overflow-hidden rounded-2xl shadow-2xl">
             <div className="absolute top-0 left-0 w-24 h-24 border-l-2 border-t-2 border-brand -translate-x-1 -translate-y-1" />
             <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-brand translate-x-1 translate-y-1" />
             <img 
               src={LOGO_URL} 
               alt="Shine Auto Premium Logo" 
               className="w-full max-w-md h-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 relative z-10 p-6"
               referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </div>
          <div className="flex flex-col gap-12 animate-fade-in stagger-2">
             <div>
                <h2 className="text-6xl md:text-8xl mb-8 leading-tight font-heading">Precision in<br/><span className="text-brand">Every Pixel.</span></h2>
                <div className="space-y-6 text-lg text-white/60 font-light leading-relaxed max-w-xl">
                  <p>
                    Founded on a passion for automotive excellence, Shine Auto was built to serve vehicle owners who demand a standard beyond the ordinary. We don't just wash cars; we curate them.
                  </p>
                  <p>
                    Based right here in Ottawa & Gatineau, our mobile unit is self-sufficient with onboard power and ultra-purified water, allowing us to perform high-tier restorations anywhere your day takes you. 
                  </p>
                </div>
             </div>
             <div className="space-y-4">
                {[
                  { icon: ShieldCheck, text: "Ceramic Pro Certified" },
                  { icon: Zap, text: "Rapid Response Scheduling" },
                  { icon: Droplets, text: "Eco-Friendly Processes" }
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-6 border-l-2 border-brand pl-6 py-2 group-hover:bg-brand/5 transition-colors">
                    <f.icon className="text-brand" size={32} />
                    <span className="font-heading text-2xl tracking-widest uppercase">{f.text}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 5. Services Section */}
      <section id="services" className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-6xl md:text-8xl mb-4">The <span className="text-brand">Packages</span></h2>
            <p className="tracking-[0.5em] text-white/40 uppercase font-bold text-sm">Professional Care Options</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: "01", title: "Exterior Wash", desc: "Hand wash, wheel clean, tire dressing, and spray sealant protection.", price: "30" },
              { id: "02", title: "Interior Detail", desc: "Steam clean, shampoo extraction, leather conditioning, and deep vacuum.", price: "120" },
              { id: "03", title: "Full Detail", desc: "Our most popular combo. The best of both interior and exterior care.", price: "180" },
              { id: "04", title: "Pet Hair Removal", desc: "Deep elimination of stubborn pet hair from carpets, seats, and crevices.", price: "30" },
              { id: "05", title: "Ceramic Coating", desc: "9H nanotechnology coating for long-term depth and hydrophobics.", price: "699" },
              { id: "06", title: "Engine Detail", desc: "Safe degreasing and cosmetic dressing of the engine bay area.", price: "50" },
            ].map((s, i) => (
              <div key={i} className="service-card group animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="block font-heading text-8xl text-white/5 absolute -top-4 -right-2 leading-none group-hover:text-brand/10 transition-colors">{s.id}</span>
                <h3 className="text-4xl text-brand mb-4">{s.title}</h3>
                <p className="text-white/50 mb-8 font-light leading-relaxed">{s.desc}</p>
                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="uppercase tracking-[0.2em] font-bold text-xs text-white/30">Good Price</span>
                  <span className="font-heading text-3xl">From <span className="text-brand">${s.price}</span></span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How It Works */}
      <section id="how-it-works" className="py-24 bg-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-8xl">The <span className="text-brand">Flow</span></h2>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Connecting line (Desktop only) */}
            <div className="absolute top-10 left-[15%] right-[15%] h-px bg-secondary/20 hidden md:block" />
            
            {[
              { id: "01", title: "Call Us", desc: "Give us a call or text at 343-297-6514 to secure your slot." },
              { id: "02", title: "We Come to You", desc: "Our mobile unit arrives at your home or office." },
              { id: "03", title: "We Get to Work", desc: "Professional technicians handle every detail." },
              { id: "04", title: "You're Good to Go", desc: "Enjoy your vehicle looking brand new again." }
            ].map((step, i) => (
              <div key={i} className="relative z-10 text-center animate-fade-in" style={{ animationDelay: `${i * 0.2}s` }}>
                <div className="w-20 h-20 rounded-full border-2 border-secondary bg-dark flex items-center justify-center mx-auto mb-8">
                  <span className="font-heading text-3xl text-secondary">{step.id}</span>
                </div>
                <h4 className="text-2xl mb-4 text-secondary">{step.title}</h4>
                <p className="text-white/40 font-light text-sm px-4 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Reviews Section */}
      <section id="reviews" className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                name: "Sarah E", 
                quote: "My SUV has never looked so clean. He did a great job cleaning up the backseat where my 2 toddlers sit with their snacks and muddy boots all over everything. Highly recommend!",
                image: "https://cdn.imagetourl.cloud/anonymous/remm2ubr.jpg"
              },
              { 
                name: "Shahira G", 
                quote: "Personable, hard working, and consistently excellent quality and price. What a treat to have our family van detailed in our own driveway. Recommend over bigger shops any day!",
                image: "https://cdn.imagetourl.cloud/anonymous/8bpn07xt.jpg"
              },
              { 
                name: "Graham V", 
                quote: "10/10 would recommend for your vehicle detailing needs. Incredibly thorough, professional and easy to work with.",
                image: "https://cdn.imagetourl.cloud/uploads/78ml13gb.jpg"
              }
            ].map((r, i) => (
              <div key={i} className="animate-fade-in bg-dark p-10 relative overflow-hidden flex flex-col" style={{ animationDelay: `${i * 0.1}s` }}>
                {r.image && (
                  <div className="mb-8 rounded-lg overflow-hidden border border-white/10 group">
                    <img 
                      src={r.image} 
                      alt={`Review by ${r.name}`} 
                      className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                <div className="flex mb-6 text-brand">
                  {[1,2,3,4,5].map(n => <Star key={n} size={20} fill="currentColor" />)}
                </div>
                <p className="text-xl italic text-white/80 font-light leading-relaxed mb-8">"{r.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-px bg-brand" />
                  <span className="font-heading text-2xl tracking-widest text-brand">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Contact Section (Replaced Booking) */}
      <section id="contact" className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-7xl md:text-[100px] leading-none mb-8">Ready for a<br/><span className="text-brand">Wash?</span></h2>
            <p className="text-2xl text-white/50 mb-12 max-w-2xl mx-auto font-light">Skip the forms. One call gets your car professionally detailed at your driveway.</p>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-20 animate-fade-in stagger-2 text-white">
              <div className="flex flex-col items-center gap-4">
                <Calendar className="text-brand" size={48} />
                <span className="font-heading text-3xl tracking-widest text-brand uppercase">Online Booking</span>
                <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="text-4xl font-bold hover:text-brand transition-colors tracking-tighter">Book Slot</a>
              </div>
              <div className="hidden md:block w-px h-24 bg-white/10" />
              <div className="flex flex-col items-center gap-4">
                <Smartphone className="text-brand" size={48} />
                <span className="font-heading text-3xl tracking-widest text-brand uppercase">Call or Text</span>
                <a href={PHONE_HREF} className="text-4xl font-bold hover:text-brand transition-colors tracking-tighter text-nowrap">343-297-6514</a>
              </div>
              <div className="hidden md:block w-px h-24 bg-white/10" />
              <div className="flex flex-col items-center gap-4 text-white">
                <Mail className="text-brand" size={48} />
                <span className="font-heading text-3xl tracking-widest text-brand uppercase">Email Us</span>
                <a href="mailto:yousif.esb@gmail.com" className="text-2xl font-light hover:text-brand transition-colors tracking-tight text-white">yousif.esb@gmail.com</a>
              </div>
            </div>

            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-block bg-brand text-dark px-16 py-6 font-heading text-4xl tracking-widest hover:bg-white transition-all transform hover:scale-105 active:scale-95 uppercase">Secure Your Slot Now</a>
        </div>
      </section>

      <footer className="py-20 bg-dark border-t border-white/5 text-center">
         <img 
            src={LOGO_URL} 
            alt="Shine Auto Logo" 
            className="h-32 mx-auto mb-8 drop-shadow-xl opacity-90 hover:opacity-100 transition-opacity"
            referrerPolicy="no-referrer"
          />
         <p className="font-heading text-lg tracking-[0.3em] text-white/20">
           © 2024 Shine Auto · CRAFTED IN OTTAWA & GATINEAU
         </p>
      </footer>
    </div>
  );
}
