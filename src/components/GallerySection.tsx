import { useEffect, useState } from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import solarPanel from "@/assets/solar-panel-product.jpg";
import gallery1 from "@/assets/img20.webp";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroSolar from "@/assets/hero-solar.jpg";

const images = [gallery1, gallery2, solarPanel, gallery3, heroSolar, gallery4];

const GallerySection = () => {
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

  // Manual autoplay
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3500);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Fullscreen Carousel */}
      <Carousel
        setApi={setApi}
        opts={{ loop: true }}
        className="absolute inset-0"
      >
        <CarouselContent>
          {images.map((img, i) => (
            <CarouselItem key={i} className="basis-full">
              <div className="h-screen w-full">
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Optional Dark Overlay for Premium Feel */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Title */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 z-20 text-center text-white">
        <h2 className="text-3xl md:text-5xl font-bold">
          Solar Panel Installation
        </h2>
        <p className="text-sm mt-2 opacity-80">
          {current + 1} / {images.length}
        </p>
      </div>

      {/* Thumbnails Floating Bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3 flex-wrap justify-center px-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => api?.scrollTo(i)}
            className={`w-20 h-14 md:w-24 md:h-16 rounded-lg overflow-hidden border-2 transition-all ${
              i === current
                ? "border-white scale-110"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={img}
              alt={`Thumb ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
