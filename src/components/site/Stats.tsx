import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { Users, Clock, Star, Stethoscope, Award } from "lucide-react";

const stats = [
  { icon: Users, end: 5000, suffix: "+", label: "Happy Patients" },
  { icon: Clock, end: 15, suffix: "+", label: "Years Experience" },
  { icon: Star, end: 49, suffix: "", label: "4.9 Average Rating", display: "4.9" },
  { icon: Stethoscope, end: 30, suffix: "+", label: "Modern Treatments" },
  { icon: Award, end: 12, suffix: "+", label: "Certified Specialists" },
];

export const Stats = () => {
  return (
    <section className="py-16 lg:py-20 border-y border-border bg-card">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.07}>
              <div className="text-center">
                <s.icon className="w-6 h-6 mx-auto text-primary mb-3" />
                <div className="font-display text-3xl lg:text-4xl font-semibold text-foreground">
                  {s.display ?? <Counter end={s.end} suffix={s.suffix} />}
                </div>
                <div className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
