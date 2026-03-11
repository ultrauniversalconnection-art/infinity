import { Wifi, Globe, Radio, Router } from "lucide-react";

const FloatingElements = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Infinity symbol */}
      <div className="absolute left-[10%] top-[15%] animate-float text-primary/10 text-6xl font-heading font-bold" style={{ animationDelay: "0s" }}>
        ∞
      </div>

      {/* WiFi icon */}
      <div className="absolute right-[8%] top-[25%] animate-float-slow text-primary/8" style={{ animationDelay: "2s" }}>
        <Wifi className="h-10 w-10" />
      </div>

      {/* Globe */}
      <div className="absolute left-[5%] top-[55%] animate-float text-accent/8" style={{ animationDelay: "4s" }}>
        <Globe className="h-8 w-8" />
      </div>

      {/* Infinity symbol 2 */}
      <div className="absolute right-[15%] top-[65%] animate-float-slow text-accent/10 text-5xl font-heading" style={{ animationDelay: "1s" }}>
        ∞
      </div>

      {/* Radio/Signal */}
      <div className="absolute left-[20%] top-[80%] animate-float text-primary/6" style={{ animationDelay: "3s" }}>
        <Radio className="h-7 w-7" />
      </div>

      {/* Router */}
      <div className="absolute right-[25%] top-[10%] animate-float-slow text-primary/6" style={{ animationDelay: "5s" }}>
        <Router className="h-8 w-8" />
      </div>
    </div>
  );
};

export default FloatingElements;
