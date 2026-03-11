import { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Menu, X, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Internet", to: "/internet" },
  { label: "TV & Streaming", to: "/tv-streaming" },
  { label: "Bundles", to: "/bundles" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-primary/20">
            <Wifi className="h-5 w-5 text-primary" />
          </div>
          <div className="font-heading text-lg font-bold leading-tight">
            <span className="text-primary">Infinity</span>{" "}
            <span className="text-foreground">WiFi</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Phone + CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+18337086855" className="flex items-center gap-2 text-sm font-semibold text-accent">
            <Phone className="h-4 w-4" />
            (833) 708-6855
          </a>
          <a href="tel:+18337086855">
            <Button className="glow-primary bg-primary font-heading font-semibold text-primary-foreground hover:bg-primary/90">
              Call Now
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl lg:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+18337086855"
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-heading font-semibold text-primary-foreground glow-primary"
            >
              <Phone className="h-4 w-4" />
              Call (833) 708-6855
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
