import SEOHead from "@/components/SEOHead";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Phone, Wifi, Tv, Package, Zap, Clock, DollarSign, HeartHandshake,
  ThumbsUp, Rocket, Users, BadgeCheck, ArrowRight, Star, MapPin, Shield,
} from "lucide-react";

const PHONE = "(833) 708-6855";

const Index = () => {
  return (
    <>
      <SEOHead />

      {/* Hero */}
      <section className="relative overflow-hidden gradient-mesh py-20 md:py-32">
        {/* WiFi wave rings */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="h-[400px] w-[400px] rounded-full border border-primary/10 animate-wifi-wave" />
          <div className="absolute inset-0 h-[400px] w-[400px] rounded-full border border-primary/10 animate-wifi-wave" style={{ animationDelay: "0.8s" }} />
          <div className="absolute inset-0 h-[400px] w-[400px] rounded-full border border-primary/10 animate-wifi-wave" style={{ animationDelay: "1.6s" }} />
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <Wifi className="h-4 w-4" /> 50+ Providers • All 50 States
            </div>
            <h1 className="mb-6 font-heading text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
              Unlimited Connectivity{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Starts Here
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
              Compare the best internet, TV & streaming deals in your area. Expert advice, zero pressure — just the right plan for you.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a href="tel:+18337086855">
                <Button size="lg" className="gap-2 bg-primary px-8 py-6 font-heading text-lg font-bold text-primary-foreground glow-primary hover:bg-primary/90">
                  <Phone className="h-5 w-5" />
                  Call {PHONE}
                </Button>
              </a>
              <a href="tel:+18337086855">
                <Button size="lg" variant="outline" className="gap-2 border-accent/50 px-8 py-6 font-heading text-accent hover:bg-accent/10">
                  Get Your Free Quote
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border/50 bg-card/80 py-8">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-4 md:grid-cols-4 lg:px-8">
          {[
            { value: "50+", label: "Providers", icon: Wifi },
            { value: "10K+", label: "Happy Customers", icon: Users },
            { value: "50", label: "States Covered", icon: MapPin },
            { value: "4.8★", label: "Customer Rating", icon: Star },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center text-center">
              <stat.icon className="mb-2 h-5 w-5 text-primary" />
              <span className="font-heading text-2xl font-bold text-foreground">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-4 text-center font-heading text-3xl font-bold md:text-4xl">Our Services</h2>
          <p className="mx-auto mb-12 max-w-xl text-center text-muted-foreground">
            Whether you need lightning-fast internet, premium TV, or the best of both — we've got you covered.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Wifi, title: "Internet", desc: "High-speed plans from 100 Mbps to 1 Gbps. Fiber, cable, DSL & more from top providers.", link: "/internet" },
              { icon: Tv, title: "TV & Streaming", desc: "Live TV packages, streaming bundles, and premium channels — all in one place.", link: "/tv-streaming" },
              { icon: Package, title: "Bundles", desc: "Save big with internet + TV combos. Custom bundles tailored to your household.", link: "/bundles" },
            ].map((svc) => (
              <Card key={svc.title} className="group border-border/50 bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15">
                    <svc.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-heading text-xl font-semibold">{svc.title}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{svc.desc}</p>
                  <a href={svc.link} className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="border-y border-border/50 bg-card/30 py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold md:text-4xl">Our Promise to You</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Zap, title: "Quick Turnaround", desc: "Fast activation so you're connected in no time." },
              { icon: Clock, title: "7-Day Support", desc: "Our team is available every day of the week." },
              { icon: DollarSign, title: "Competitive Rates", desc: "We find you the best deals — no hidden fees." },
              { icon: HeartHandshake, title: "Zero Pressure", desc: "Honest advice, no hard sells. Your choice, always." },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/15">
                  <item.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="mb-1 font-heading text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold md:text-4xl">Why Choose Infinity WiFi?</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ThumbsUp, title: "Unbiased Recommendations" },
              { icon: Rocket, title: "Fast Activation" },
              { icon: Users, title: "Real People, Real Help" },
              { icon: BadgeCheck, title: "Honest Pricing" },
            ].map((item) => (
              <Card key={item.title} className="border-border/50 bg-card transition-all hover:border-primary/30">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <item.icon className="mb-3 h-8 w-8 text-primary" />
                  <h3 className="font-heading font-semibold">{item.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-y border-border/50 bg-card/30 py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold md:text-4xl">How It Works</h2>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: "1", title: "Call Us", desc: "Dial (833) 708-6855" },
              { step: "2", title: "Share Your Needs", desc: "Tell us what you're looking for" },
              { step: "3", title: "Get Matched", desc: "We compare 50+ providers for you" },
              { step: "4", title: "Get Connected", desc: "Fast activation, great savings" },
            ].map((item, i) => (
              <div key={item.step} className="relative flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary font-heading text-xl font-bold text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="mb-1 font-heading text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {i < 3 && (
                  <ArrowRight className="absolute -right-4 top-6 hidden h-5 w-5 text-primary/40 md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold md:text-4xl">What Our Customers Say</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Sarah M.", city: "Austin, TX", text: "Infinity WiFi found me a plan that was $30/month cheaper than what I was paying. Super easy process!" },
              { name: "James K.", city: "Denver, CO", text: "Called in, spoke with a real person, and had my new internet set up within 48 hours. Highly recommend!" },
              { name: "Priya R.", city: "Miami, FL", text: "They compared multiple providers for me and found the perfect bundle. No pressure, just honest help." },
            ].map((t) => (
              <Card key={t.name} className="border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="mb-3 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">"{t.text}"</p>
                  <p className="font-heading text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.city}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="border-y border-border/50 bg-card/30 py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-4 text-center font-heading text-3xl font-bold md:text-4xl">Service Areas</h2>
          <p className="mx-auto mb-10 max-w-xl text-center text-muted-foreground">We serve customers in major cities across all 50 states.</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {[
              "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia",
              "San Antonio", "San Diego", "Dallas", "Austin", "Denver", "Miami",
            ].map((city) => (
              <div key={city} className="flex items-center gap-2 rounded-lg border border-border/50 bg-card px-3 py-2.5 text-sm">
                <MapPin className="h-3.5 w-3.5 text-primary" /> {city}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="mb-12 text-center font-heading text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
          <div className="mx-auto max-w-2xl">
            <Accordion type="single" collapsible>
              {[
                { q: "Is Infinity WiFi Connects an internet provider?", a: "No, we are an authorized comparison and retail service. We help you find the best deals from 50+ providers in your area." },
                { q: "Is there a fee for your service?", a: "No! Our service is completely free for you. We're compensated by the providers, so you pay nothing extra." },
                { q: "How fast can I get connected?", a: "In most cases, we can have your service activated within 24-48 hours of your call." },
                { q: "Do you serve my area?", a: "We serve customers in all 50 states. Call us at (833) 708-6855 to check provider availability at your address." },
                { q: "Can I bundle internet and TV?", a: "Absolutely! Bundling is one of the best ways to save. We'll help you find the perfect combo for your needs." },
              ].map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
                  <AccordionTrigger className="font-heading text-left hover:no-underline hover:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              { "@type": "Question", name: "Is Infinity WiFi Connects an internet provider?", acceptedAnswer: { "@type": "Answer", text: "No, we are an authorized comparison and retail service." } },
              { "@type": "Question", name: "Is there a fee for your service?", acceptedAnswer: { "@type": "Answer", text: "No! Our service is completely free for you." } },
              { "@type": "Question", name: "How fast can I get connected?", acceptedAnswer: { "@type": "Answer", text: "In most cases, within 24-48 hours." } },
            ],
          }),
        }}
      />

      <CallToAction />
    </>
  );
};

export default Index;
