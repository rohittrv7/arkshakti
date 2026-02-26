import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

import heroVideo from "@/assets/arkshakti.mp4"; // <-- apna video yaha import karo

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    const els = sectionRef.current?.querySelectorAll(".animate-on-scroll");
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-2xl space-y-6 text-white">
          <h1 className="font-bold text-4xl md:text-6xl leading-tight">
            Arkshakti Trusted{" "}
            <span className="text-yellow-400">Solar Installation</span> Services
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-lg">
            Affordable And Reliable Solar Energy Solutions For All.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <a href="#about">
          <ArrowDown className="w-6 h-6 text-white" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
