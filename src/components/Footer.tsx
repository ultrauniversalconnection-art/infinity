import { Link } from "react-router-dom";
import { Wifi, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
                <Wifi className="h-4 w-4 text-primary" />
              </div>
              <span className="font-heading text-lg font-bold">
                <span className="text-primary">Infinity</span> WiFi
              </span>
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              Connecting you with the best internet, TV & streaming deals from 50+ providers nationwide.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+18337086855" className="flex items-center gap-2 text-accent hover:text-accent/80">
                <Phone className="h-3.5 w-3.5" /> (833) 708-6855
              </a>
              <a href="tel:+18884986069" className="flex items-center gap-2 text-accent hover:text-accent/80">
                <Phone className="h-3.5 w-3.5" /> (888) 498-6069
              </a>
              <a href="mailto:support@infinitywificonnects.com" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
                <Mail className="h-3.5 w-3.5" /> support@infinitywificonnects.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-foreground">Services</h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><Link to="/internet" className="hover:text-primary">Internet Plans</Link></li>
              <li><Link to="/tv-streaming" className="hover:text-primary">TV & Streaming</Link></li>
              <li><Link to="/bundles" className="hover:text-primary">Bundle Deals</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-foreground">Company</h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-foreground">Legal</h4>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><Link to="/disclaimer" className="hover:text-primary">Disclaimer</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-primary">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-primary">Terms & Conditions</Link></li>
              <li><Link to="/refund-policy" className="hover:text-primary">Refund Policy</Link></li>
              <li><Link to="/advertising-disclosure" className="hover:text-primary">Advertising Disclosure</Link></li>
              <li><Link to="/cookies-policy" className="hover:text-primary">Cookies Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border/50 pt-6">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} INFINITY CONNECT ENTERPRISES. All rights reserved. Infinity WiFi Connects is an authorized retailer
            and comparison service operated by INFINITY CONNECT ENTERPRISES. We are not the provider. Prices, packages, and availability vary by location and are subject to change.
            Call for the most current offers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
