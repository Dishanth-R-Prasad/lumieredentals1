import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

export const BookCTA = () => {
  return (
    <section id="book" className="py-24 lg:py-32">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary-gradient p-10 lg:p-20 text-primary-foreground shadow-elegant">
            <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" aria-hidden />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-white/10 blur-3xl" aria-hidden />

            <div className="relative max-w-2xl">
              <span className="text-xs tracking-[0.2em] uppercase opacity-80">Ready when you are</span>
              <h2 className="mt-3 font-display text-4xl lg:text-6xl tracking-tight">
                Book your consultation today.
              </h2>
              <p className="mt-5 text-lg opacity-90 max-w-xl">
                Free first-visit assessment, personalized treatment plan, and zero pressure.
                Your perfect smile begins with a single conversation.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button asChild size="xl" className="bg-background text-primary hover:bg-background/90 rounded-full">
                  <a href="#contact"><Calendar className="w-4 h-4" /> Book Appointment</a>
                </Button>
                <Button asChild size="xl" variant="outline" className="border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 rounded-full bg-transparent">
                  <a href="tel:+10000000000"><Phone className="w-4 h-4" /> Call +1 (000) 000-0000</a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
