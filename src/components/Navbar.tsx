import { useState, useEffect } from "react";
import { Phone, Menu, X, Sun } from "lucide-react";
import logo from "@/assets/logo.png";

type NavbarProps = {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ setOpen }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Inquiry", action: "openInquiry" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-allduration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-md text-black"
          : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img src={logo} alt="Arkshakti Power Solutions" className="h-14" />
          <div className="hidden sm:block">
            <p className="font-bold text-sm text-foreground">
              Arkshakti Power Solutions
            </p>
            <p className="text-xs text-muted-foreground">PVT. LTD.</p>
            <div className="inline-flex items-center gap-2 py-1.5">
              <Sun className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-semibold">
                शुद्धशक्तिः सूर्यप्रदा
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) =>
            l.action === "openInquiry" ? (
              <button
                key={l.label}
                onClick={() => setOpen(true)}
                className="text-sm font-semibold text-foreground hover:text-primary transition"
              >
                {l.label}
              </button>
            ) : (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-foreground hover:text-primary transition"
              >
                {l.label}
              </a>
            ),
          )}

          <a
            href="tel:+917014118900"
            className="flex items-center gap-2 bg-gradient-solar text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold shadow-md hover:opacity-90 transition"
          >
            <Phone className="w-4 h-4" />
            +91 7014118900
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-4">
          {links.map((l) =>
            l.action === "openInquiry" ? (
              <button
                key={l.label}
                onClick={() => {
                  setOpen(true);
                  setMenuOpen(false);
                }}
                className="block w-full text-left py-3 text-sm font-semibold text-foreground hover:text-primary border-b border-border/50"
              >
                {l.label}
              </button>
            ) : (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-sm font-semibold text-foreground hover:text-primary border-b border-border/50"
              >
                {l.label}
              </a>
            ),
          )}

          <a
            href="tel:+917014118900"
            className="mt-3 flex items-center justify-center gap-2 bg-gradient-solar text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold"
          >
            <Phone className="w-4 h-4" />
            +91 7014118900
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
