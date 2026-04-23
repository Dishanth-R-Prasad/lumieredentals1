import { Reveal } from "@/components/Reveal";
import {
  Sparkles, Activity, Smile, Wand2, Layers, AlignJustify,
  Scissors, CircleDot, Baby, HeartPulse, Crown, Siren,
} from "lucide-react";

const treatments = [
  { icon: Layers, title: "Dental Implants", desc: "Permanent, natural-looking tooth replacement with titanium precision." },
  { icon: Activity, title: "Root Canal", desc: "Painless single-visit therapy that saves and restores your tooth." },
  { icon: Sparkles, title: "Teeth Whitening", desc: "Safe, in-clinic brightening up to 8 shades whiter in one session." },
  { icon: Smile, title: "Smile Makeover", desc: "A custom-designed smile blending aesthetics, function and harmony." },
  { icon: Wand2, title: "Veneers", desc: "Ultra-thin porcelain shells for a flawless, lifelike finish." },
  { icon: AlignJustify, title: "Braces & Aligners", desc: "Discreet clear aligners and modern braces for perfect alignment." },
  { icon: Scissors, title: "Tooth Extraction", desc: "Gentle, minimally invasive removal with full comfort care." },
  { icon: CircleDot, title: "Wisdom Tooth Removal", desc: "Expert surgical removal with rapid, comfortable recovery." },
  { icon: Baby, title: "Pediatric Dentistry", desc: "Kind, kid-friendly care that builds healthy lifelong habits." },
  { icon: HeartPulse, title: "Gum Treatment", desc: "Advanced laser therapy for healthy gums and lasting smiles." },
  { icon: Crown, title: "Crowns & Bridges", desc: "Premium ceramic restorations crafted for strength and beauty." },
  { icon: Siren, title: "Emergency Care", desc: "Same-day urgent treatment, available when you need it most." },
];

export const Treatments = () => {
  return (
    <section id="treatments" className="py-24 lg:py-32 bg-soft">
      <div className="container">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Our Treatments</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl tracking-tight">
              Comprehensive Care, <span className="italic gradient-text">Crafted For You</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              From gentle routine cleanings to complete smile transformations — every
              treatment delivered with precision, comfort, and care.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {treatments.map((t, i) => (
            <Reveal key={t.title} delay={(i % 4) * 0.06}>
              <article className="group h-full bg-card border border-border rounded-2xl p-7 hover-lift cursor-pointer">
                <div className="w-12 h-12 rounded-xl bg-mint grid place-items-center mb-5 group-hover:scale-110 transition-transform duration-500">
                  <t.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground">{t.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                <div className="mt-5 text-xs font-medium text-primary opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  Learn more →
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
