import { useEffect, useState } from "react";
import { Phone, X, Shield, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallNowPopup = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), 8000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-background/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-6 shadow-2xl">
        <button
          onClick={() => { setVisible(false); setDismissed(true); }}
          className="absolute right-3 top-3 rounded-full p-1 text-muted-foreground hover:text-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mb-4 flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/20">
            <Phone className="h-8 w-8 text-primary" />
          </div>
        </div>

        <h3 className="mb-2 text-center font-heading text-2xl font-bold">
          Get the Best Deal <span className="text-accent">Today!</span>
        </h3>
        <p className="mb-5 text-center text-sm text-muted-foreground">
          Speak with our experts to find the perfect internet & TV plan for your home. No pressure, just great options.
        </p>

        <a href="tel:+18337086855" className="block">
          <Button className="w-full gap-2 bg-primary py-6 font-heading text-lg font-bold text-primary-foreground glow-primary hover:bg-primary/90">
            <Phone className="h-5 w-5" />
            Call (833) 708-6855
          </Button>
        </a>

        <div className="mt-4 flex items-center justify-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><Shield className="h-3 w-3 text-primary" /> No Pressure</span>
          <span className="flex items-center gap-1"><Star className="h-3 w-3 text-accent" /> 4.8★ Rated</span>
          <span className="flex items-center gap-1"><Clock className="h-3 w-3 text-primary" /> 7-Day Support</span>
        </div>
      </div>
    </div>
  );
};

export default CallNowPopup;
