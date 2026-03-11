import SEOHead from "@/components/SEOHead";
import CallToAction from "@/components/CallToAction";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Shield, Users, Award } from "lucide-react";

const AboutPage = () => (
  <>
    <SEOHead title="About Us — Infinity WiFi Connects" description="Learn about Infinity WiFi Connects — your trusted partner for finding the best internet and TV deals nationwide." path="/about" />

    <section className="gradient-mesh py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="mb-4 font-heading text-4xl font-extrabold md:text-5xl">
          About <span className="text-primary">Infinity WiFi</span>
        </h1>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground">
          We're on a mission to simplify how America gets connected.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="space-y-6 text-muted-foreground">
          <p>
            Infinity WiFi Connects was founded with a simple belief: finding the right internet and TV service shouldn't be complicated, stressful, or confusing.
          </p>
          <p>
            We work with 50+ providers across all 50 states to bring you unbiased comparisons and expert recommendations — all at no cost to you. No sales pressure, no hidden agendas. Just honest advice from real people who want to help you get connected.
          </p>
          <p>
            Whether you're setting up your first apartment, upgrading your home office, or looking for the best entertainment bundle — we're here 7 days a week to make it happen.
          </p>
        </div>
      </div>
    </section>

    <section className="border-y border-border/50 bg-card/30 py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center font-heading text-3xl font-bold">Our Values</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Target, title: "Mission-Driven", desc: "Every recommendation is made with your best interest in mind." },
            { icon: Eye, title: "Transparency", desc: "Clear pricing, honest advice, no hidden fees or surprises." },
            { icon: Heart, title: "Customer First", desc: "Your satisfaction is our top priority — always." },
            { icon: Shield, title: "Trust", desc: "Thousands of customers trust us to find them the best deals." },
            { icon: Users, title: "Real People", desc: "Talk to real experts, not bots. We're here for you." },
            { icon: Award, title: "Excellence", desc: "We strive for the best service experience, every time." },
          ].map((val) => (
            <Card key={val.title} className="border-border/50 bg-card">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <val.icon className="mb-3 h-8 w-8 text-primary" />
                <h3 className="mb-1 font-heading font-semibold">{val.title}</h3>
                <p className="text-sm text-muted-foreground">{val.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <CallToAction />
  </>
);

export default AboutPage;
