import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CallToActionProps {
  title?: string;
  subtitle?: string;
}

const CallToAction = ({
  title = "Ready to Get Connected?",
  subtitle = "Speak with our experts today and find the perfect plan for your home.",
}: CallToActionProps) => {
  return (
    <section className="relative overflow-hidden border-y border-border/50 bg-card/50 py-16">
      <div className="container mx-auto px-4 text-center lg:px-8">
        <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mb-8 max-w-xl text-muted-foreground">{subtitle}</p>
        <a href="tel:+18337086855">
          <Button size="lg" className="gap-2 bg-primary px-8 py-6 font-heading text-lg font-bold text-primary-foreground glow-primary hover:bg-primary/90">
            <Phone className="h-5 w-5" />
            Call (833) 708-6855
          </Button>
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
