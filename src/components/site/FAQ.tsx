import { Reveal } from "@/components/Reveal";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Is dental treatment really painless?", a: "Yes. We use modern numbing techniques, sedation options, and gentle micro-instruments so most patients feel only mild pressure — never pain." },
  { q: "How much do treatments cost?", a: "We offer transparent pricing with no surprises. Routine check-ups start affordably and we offer flexible monthly payment plans for major treatments." },
  { q: "How quickly can I get an appointment?", a: "Most patients are seen within 24–72 hours. For dental emergencies, we keep same-day slots available every day." },
  { q: "How long does a typical treatment take?", a: "Cleanings take 30–45 minutes, whitening about an hour, and most implants or root canals can now be completed in a single visit." },
  { q: "Do you handle dental emergencies?", a: "Absolutely. Call our emergency line anytime and we will arrange immediate care, including evenings and weekends." },
  { q: "Is the clinic safe and hygienic?", a: "We follow hospital-grade sterilization protocols, use single-use disposables wherever possible, and maintain strict infection control standards." },
];

export const FAQ = () => {
  return (
    <section className="py-24 lg:py-32 bg-soft">
      <div className="container max-w-3xl">
        <Reveal>
          <div className="text-center mb-12">
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">FAQ</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl tracking-tight">
              Questions, <span className="italic gradient-text">answered</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card border border-border rounded-2xl px-6 data-[state=open]:shadow-soft"
              >
                <AccordionTrigger className="text-left font-display text-lg hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
};
