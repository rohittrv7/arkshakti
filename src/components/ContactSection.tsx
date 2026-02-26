import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Phone, Clock } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-background py-8">
    <div className="container mx-auto text-center max-w-2xl">
      <h2 className="section-heading mb-2 text-3xl text-center text-[#A18989] font-bold">Chat With Us</h2>
      <div className="w-12 h-0.5 bg-muted-foreground/30 mx-auto mb-6" />
      <p className="text-sm text-muted-foreground mb-6">
        If you need any information about solar panels or want to install solar panel systems, you can contact us through this WhatsApp.
      </p>

      <a href="https://wa.me/917014118900" target="_blank" rel="noopener noreferrer">
        <Button className="bg-[#4F6672] text-white hover:bg-secondary/90 mb-10 px-6">
          <MessageCircle className="w-4 h-4 mr-2" /> Message us on WhatsApp
        </Button>
      </a>

      <div className="space-y-2 text-sm text-muted-foreground">
        <h3 className="font-heading text-lg font-semibold text-foreground">
          Arkshakti Power Solutions PVT. LTD.
        </h3>
        <div className="flex items-center justify-center gap-2">
          <MapPin className="w-4 h-4 shrink-0" />
          <span>Pushp Enclave Pratap nagar Main Tonk Road Jaipur, Jaipur, RJ 302033</span>
        </div>
        <div className="flex items-center justify-center gap-2">
          <Phone className="w-4 h-4 shrink-0" />
          <span>+91.7014118900, +917014179901</span>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-foreground">Hours</h4>
          <div className="flex items-center justify-center gap-2 mt-1">
            <Clock className="w-4 h-4 shrink-0" />
            <span>Open today 09:00 am – 05:00 pm</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
