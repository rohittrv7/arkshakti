import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => (
  <footer className="bg-black text-white py-16">
    <div className="container mx-auto px-4 text-center space-y-8">
      {/* Social Icons */}
      <div className="flex justify-center gap-5">
        <a
          href="https://www.facebook.com/share/16nCrkombt/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-solar-gold hover:text-black transition"
        >
          <Facebook className="w-5 h-5" />
        </a>

        <a
          href="https://www.instagram.com/ark.shakti8"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-solar-gold hover:text-black transition"
        >
          <Instagram className="w-5 h-5" />
        </a>

        <a
          href="https://www.youtube.com/@arkshaktipowersolutions"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-solar-gold hover:text-black transition"
        >
          <Youtube className="w-5 h-5" />
        </a>

        <a
          href="https://x.com/Arkshaktipower"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-solar-gold hover:text-black transition"
        >
          <Twitter className="w-5 h-5" />
        </a>
      </div>

      {/* Description */}
      <p className="text-sm text-white/70 max-w-2xl mx-auto leading-relaxed">
        If you need any information about solar panels or want to install solar
        panel systems, you can contact us through this Social Media.
      </p>

      {/* Policy Links */}
      <div className="flex justify-center gap-6 text-sm font-semibold tracking-wide">
        <a href="/privacy-policy" className="hover:text-solar-gold transition">
          PRIVACY POLICY
        </a>
        <a
          href="/terms-and-conditions"
          className="hover:text-solar-gold transition"
        >
          TERMS AND CONDITIONS
        </a>
      </div>

      {/* Divider Line */}
      <div className="w-16 h-[1px] bg-white/20 mx-auto mt-6"></div>

      {/* Copyright */}
      <p className="text-xs text-white/40">
        © 2025 Arkshakti Power Solutions Pvt. Ltd. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
