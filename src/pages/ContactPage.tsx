import SEOHead from "@/components/SEOHead";
import CallToAction from "@/components/CallToAction";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactPage = () => (
  <>
    <SEOHead title="Contact Us — Infinity WiFi Connects" description="Get in touch with Infinity WiFi Connects. Call (877) 496-9657 or reach us online." path="/contact" />

    <section className="gradient-mesh py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="mb-4 font-heading text-4xl font-extrabold md:text-5xl">
          <span className="text-primary">Contact</span> Us
        </h1>
        <p className="mx-auto max-w-xl text-lg text-muted-foreground">
          Have questions? We're here to help 7 days a week.
        </p>
      </div>
    </section>

    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {[
            { icon: Phone, title: "Phone", info: "(833) 708-6855", sub: "Mon–Sun, 8AM–10PM EST", href: "tel:+18337086855" },
            { icon: Mail, title: "Email", info: "support@infinitywificonnects.com", sub: "Response within 24 hours", href: "mailto:support@infinitywificonnects.com" },
            { icon: Clock, title: "Hours", info: "Mon — Sun", sub: "8:00 AM — 10:00 PM EST" },
            { icon: MapPin, title: "Office", info: "United States", sub: "Serving all 50 states" },
          ].map((c) => (
            <Card key={c.title} className="border-border/50 bg-card">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                  <c.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold">{c.title}</h3>
                  {c.href ? (
                    <a href={c.href} className="text-sm text-accent hover:underline">{c.info}</a>
                  ) : (
                    <p className="text-sm text-foreground">{c.info}</p>
                  )}
                  <p className="text-xs text-muted-foreground">{c.sub}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>

    <CallToAction />
  </>
);

export default ContactPage;
