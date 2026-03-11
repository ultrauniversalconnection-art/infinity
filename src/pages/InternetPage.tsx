import SEOHead from "@/components/SEOHead";
import CallToAction from "@/components/CallToAction";
import { Card, CardContent } from "@/components/ui/card";
import { Wifi, Zap, Gamepad2, Video, Home, ArrowRight, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  { speed: "100 Mbps", label: "Basic", desc: "Browsing, email & light streaming", price: "From $29.99/mo" },
  { speed: "300 Mbps", label: "Standard", desc: "HD streaming, video calls & smart home", price: "From $49.99/mo", popular: true },
  { speed: "500 Mbps", label: "Premium", desc: "4K streaming, gaming & multiple devices", price: "From $59.99/mo" },
  { speed: "1 Gbps", label: "Ultra", desc: "Max speed for large households & power users", price: "From $79.99/mo" },
];

const useCases = [
  { icon: Video, title: "Streaming", desc: "4K Netflix, Hulu, Disney+ without buffering" },
  { icon: Gamepad2, title: "Gaming", desc: "Low-latency connections for competitive play" },
  { icon: Wifi, title: "Video Calls", desc: "Crystal-clear Zoom, Teams & FaceTime" },
  { icon: Home, title: "Smart Home", desc: "Support dozens of connected devices" },
];

const InternetPage = () => (
  <>
    <SEOHead title="Internet Plans — Infinity WiFi Connects" description="Compare high-speed internet plans from 100 Mbps to 1 Gbps. Fiber, cable & DSL options from 50+ providers." path="/internet" />

    <section className="gradient-mesh py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="mb-4 font-heading text-4xl font-extrabold md:text-5xl">
          High-Speed <span className="text-primary">Internet</span> Plans
        </h1>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground">
          From basic browsing to gigabit speeds — find the perfect plan for your household.
        </p>
      </div>
    </section>

    {/* Speed Tiers */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center font-heading text-3xl font-bold">Choose Your Speed</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier) => (
            <Card key={tier.speed} className={`relative border-border/50 bg-card transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 ${tier.popular ? "border-primary/60 ring-1 ring-primary/30" : ""}`}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-accent-foreground">
                  Most Popular
                </div>
              )}
              <CardContent className="p-6 text-center">
                <Zap className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h3 className="font-heading text-3xl font-bold text-primary">{tier.speed}</h3>
                <p className="mb-1 font-heading text-lg font-semibold">{tier.label}</p>
                <p className="mb-4 text-sm text-muted-foreground">{tier.desc}</p>
                <p className="mb-4 font-heading text-lg font-bold text-accent">{tier.price}</p>
                <a href="tel:+18337086855">
                  <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                    <Phone className="h-4 w-4" /> Get This Plan
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    {/* Use Cases */}
    <section className="border-y border-border/50 bg-card/30 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center font-heading text-3xl font-bold">Perfect For Every Need</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((uc) => (
            <div key={uc.title} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15">
                <uc.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-1 font-heading font-semibold">{uc.title}</h3>
              <p className="text-sm text-muted-foreground">{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Fiber vs Cable */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center font-heading text-3xl font-bold">Fiber vs Cable</h2>
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {[
            { title: "Fiber Optic", features: ["Up to 1 Gbps+", "Symmetrical upload/download", "Lowest latency", "Future-proof technology"] },
            { title: "Cable Internet", features: ["Up to 1 Gbps", "Wide availability", "Great for most homes", "Often bundled with TV"] },
          ].map((type) => (
            <Card key={type.title} className="border-border/50 bg-card">
              <CardContent className="p-6">
                <h3 className="mb-4 font-heading text-xl font-bold text-primary">{type.title}</h3>
                <ul className="space-y-2">
                  {type.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <CallToAction title="Find Internet Plans in Your Area" subtitle="Call now and we'll check which providers and speeds are available at your address." />
  </>
);

export default InternetPage;
