import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import VideoSection from "@/components/VideoSection";
import GoingSolarSection from "@/components/GoingSolarSection";
import ContactSection from "@/components/ContactSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import InquiryModal from "@/components/InquiryForm";

const Index = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Navbar setOpen={setOpen} />
      <InquiryModal isOpen={open} setIsOpen={setOpen} />
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <VideoSection />
      <GoingSolarSection />
      <ContactSection />
      <MapSection />
      <Footer />
    </div>
  );
};

export default Index;
