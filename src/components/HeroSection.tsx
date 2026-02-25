import { useEffect, useRef, useState } from "react";
import { Sun, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import heroImage from "@/assets/hero-solar.jpeg";
import solarCommercial from "@/assets/img1.jpg.jpeg";
import solarResidential from "@/assets/img3.avif";

const slides = [heroImage, solarCommercial, solarResidential];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  // Track active slide
  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

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
      {/* Carousel */}
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="absolute inset-0 z-0"
      >
        <CarouselContent>
          {slides.map((src, i) => (
            <CarouselItem key={i} className="basis-full">
              <div className="h-screen w-full relative">
                <img
                  src={src}
                  alt={`Solar installation ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/60" />

      {/* Controls */}
      <button
        onClick={() => api?.scrollPrev()}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full p-2"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => api?.scrollNext()}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full p-2"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === current ? "bg-primary scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-2xl space-y-6 text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-1.5">
            <Sun className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-semibold">
              शुद्धशक्तिः सूर्यप्रदा
            </span>
          </div>

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
