import { Phone } from "lucide-react";

const FloatingCallButton = () => {
  return (
    <a
      href="tel:+18337086855"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg glow-primary transition-transform hover:scale-110 lg:hidden"
      aria-label="Call (833) 708-6855"
    >
      <div className="absolute inset-0 rounded-full bg-primary animate-pulse-ring" />
      <Phone className="relative h-6 w-6" />
    </a>
  );
};

export default FloatingCallButton;
