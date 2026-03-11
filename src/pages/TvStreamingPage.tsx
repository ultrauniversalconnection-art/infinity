import SEOHead from "@/components/SEOHead";
import CallToAction from "@/components/CallToAction";
import { Card, CardContent } from "@/components/ui/card";
import { Tv, Film, Satellite, Play, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  { title: "Essential TV", channels: "80+ Channels", price: "From $49.99/mo", features: ["Local channels", "News & sports", "Basic DVR"] },
  { title: "Premium TV", channels: "200+ Channels", price: "From $79.99/mo", features: ["All Essential channels", "HBO, Showtime", "Premium DVR", "On-demand library"], popular: true },
  { title: "Streaming Bundle", channels: "Top Streaming Apps", price: "From $39.99/mo", features: ["Netflix, Hulu, Disney+", "No contracts", "Watch anywhere", "Multiple profiles"] },
];

const TvStreamingPage = () => (
  <>
    <SEOHead title="TV & Streaming — Infinity WiFi Connects" description="Compare live TV packages and streaming bundles. Get the best entertainment deals from top providers." path="/tv-streaming" />

    <section className="gradient-mesh py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="mb-4 font-heading text-4xl font-extrabold md:text-5xl">
          <span className="text-primary">TV</span> & Streaming Plans
        </h1>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground">
          Live TV, on-demand content, and streaming apps — all from one call.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <Card key={pkg.title} className={`relative border-border/50 bg-card transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 ${pkg.popular ? "border-primary/60 ring-1 ring-primary/30" : ""}`}>
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-accent-foreground">
                  Best Value
                </div>
              )}
              <CardContent className="p-6 text-center">
                <Tv className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h3 className="mb-1 font-heading text-xl font-bold">{pkg.title}</h3>
                <p className="mb-2 text-sm text-accent font-semibold">{pkg.channels}</p>
                <p className="mb-4 font-heading text-lg font-bold text-primary">{pkg.price}</p>
                <ul className="mb-6 space-y-2 text-left">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
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

    <CallToAction title="Find the Perfect TV Package" subtitle="Our experts will match you with the best TV and streaming options for your budget." />
  </>
);

export default TvStreamingPage;
