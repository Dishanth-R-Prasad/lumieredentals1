import { Reveal } from "@/components/Reveal";
import { Phone, MapPin, Clock, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-soft">
      <div className="container grid lg:grid-cols-2 gap-12 items-stretch">
        <Reveal>
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Get in touch</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl tracking-tight">
              Visit our <span className="italic gradient-text">clinic</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              We're here to help every day of the week. Reach out and our team will respond within minutes.
            </p>

            <ul className="mt-10 space-y-5">
              {[
                { icon: Phone, label: "Call us", value: "+1 (000) 000-0000", href: "tel:+10000000000" },
                { icon: MessageCircle, label: "WhatsApp", value: "Chat with us instantly", href: "https://wa.me/10000000000" },
                { icon: Mail, label: "Email", value: "hello@lumieredental.com", href: "mailto:hello@lumieredental.com" },
                { icon: MapPin, label: "Address", value: "12 Aurora Avenue, Downtown, City 00000" },
                { icon: Clock, label: "Working Hours", value: "Mon–Sat: 9:00 — 20:00 · Sun: 10:00 — 16:00" },
              ].map((item) => (
                <li key={item.label} className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-mint grid place-items-center shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="font-medium text-foreground hover:text-primary transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <div className="font-medium text-foreground">{item.value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="premium" size="lg">
                <a href="https://wa.me/10000000000"><MessageCircle className="w-4 h-4" /> WhatsApp Us</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+10000000000"><Phone className="w-4 h-4" /> Call Now</a>
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-3xl overflow-hidden border border-border shadow-soft h-full min-h-[420px] bg-card">
            <iframe
              title="Lumière Dental location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.13%2C51.50%2C-0.10%2C51.52&layer=mapnik"
              className="w-full h-full min-h-[420px] border-0"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
};
