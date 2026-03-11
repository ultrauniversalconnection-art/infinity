import SEOHead from "@/components/SEOHead";
import CallToAction from "@/components/CallToAction";
import { Card, CardContent } from "@/components/ui/card";
import { Package, Wifi, Tv, Phone, Check, BadgePercent } from "lucide-react";
import { Button } from "@/components/ui/button";

const bundles = [
  { title: "Starter Bundle", internet: "100 Mbps", tv: "80+ Channels", price: "From $69.99/mo", savings: "Save $20/mo" },
  { title: "Family Bundle", internet: "300 Mbps", tv: "200+ Channels", price: "From $99.99/mo", savings: "Save $40/mo", popular: true },
  { title: "Ultimate Bundle", internet: "1 Gbps", tv: "300+ Channels + Streaming", price: "From $129.99/mo", savings: "Save $60/mo" },
];

const BundlesPage = () => (
  <>
    <SEOHead title="Bundle Deals — Infinity WiFi Connects" description="Save big with internet + TV bundles. Compare combo packages from 50+ providers." path="/bundles" />

    <section className="gradient-mesh py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="mb-4 font-heading text-4xl font-extrabold md:text-5xl">
          <span className="text-primary">Bundle</span> & Save
        </h1>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground">
          Combine internet and TV for the best value. One bill, maximum savings.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {bundles.map((b) => (
            <Card key={b.title} className={`relative border-border/50 bg-card transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 ${b.popular ? "border-primary/60 ring-1 ring-primary/30" : ""}`}>
              {b.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-accent-foreground">
                  Most Popular
                </div>
              )}
              <CardContent className="p-6 text-center">
                <Package className="mx-auto mb-3 h-8 w-8 text-primary" />
                <h3 className="mb-3 font-heading text-xl font-bold">{b.title}</h3>
                <div className="mb-4 space-y-2 text-sm">
                  <div className="flex items-center justify-center gap-2"><Wifi className="h-4 w-4 text-primary" /> {b.internet}</div>
                  <div className="flex items-center justify-center gap-2"><Tv className="h-4 w-4 text-primary" /> {b.tv}</div>
                </div>
                <p className="mb-1 font-heading text-2xl font-bold text-primary">{b.price}</p>
                <p className="mb-6 flex items-center justify-center gap-1 text-sm font-semibold text-accent">
                  <BadgePercent className="h-4 w-4" /> {b.savings}
                </p>
                <a href="tel:+18337086855">
                  <Button className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                    <Phone className="h-4 w-4" /> Get This Bundle
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <CallToAction title="Custom Bundles Available" subtitle="Can't find what you need? Call us and we'll create a custom bundle just for you." />
  </>
);

export default BundlesPage;
