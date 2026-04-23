import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Cpu, GraduationCap, BadgeDollarSign, Sparkles, CalendarClock } from "lucide-react";
import smileImg from "@/assets/smile-results.jpg";

const reasons = [
  { icon: Sparkles, title: "Pain-Free Procedures", desc: "Modern sedation and gentle techniques for a calm experience." },
  { icon: Cpu, title: "Digital X-Ray & Modern Tech", desc: "3D imaging, intraoral scanners and AI-assisted diagnostics." },
  { icon: GraduationCap, title: "Experienced Dentists", desc: "Board-certified specialists with 15+ years of practice." },
  { icon: BadgeDollarSign, title: "Affordable Packages", desc: "Transparent pricing and flexible monthly plans." },
  { icon: ShieldCheck, title: "Hygiene & Safety", desc: "Hospital-grade sterilization on every instrument, every visit." },
  { icon: CalendarClock, title: "Fast Scheduling", desc: "Same-week appointments and emergency slots available." },
];

export const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 lg:py-32">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative">
            <div className="rounded-[2rem] overflow-hidden shadow-elegant aspect-[4/3]">
              <img
                src={smileImg}
                alt="Beautiful smile result at Lumière Dental"
                loading="lazy"
                width={1024}
                height={768}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl px-6 py-5 shadow-elegant hidden sm:block">
              <div className="font-display text-2xl">98%</div>
              <div className="text-xs text-muted-foreground">Patient satisfaction</div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Why Lumière</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl tracking-tight">
              The clinic patients <span className="italic gradient-text">trust most</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-lg">
              We combine compassion with cutting-edge technology to deliver
              dentistry that truly feels different — from your first consultation
              to your final smile reveal.
            </p>
          </Reveal>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.05}>
                <div className="flex gap-4 p-5 rounded-2xl border border-border bg-card hover-lift">
                  <div className="w-11 h-11 rounded-xl bg-mint grid place-items-center shrink-0">
                    <r.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg">{r.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{r.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <Button asChild variant="premium" size="lg" className="mt-10">
              <a href="#book">See your smile transformation</a>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
