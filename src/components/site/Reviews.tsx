import { Reveal } from "@/components/Reveal";
import { Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

const reviews = [
  { name: "Sarah M.", treatment: "Dental Implants", text: "Truly painless and incredibly professional. The whole team made me feel completely at ease — and my new smile looks unbelievable." },
  { name: "James T.", treatment: "Smile Makeover", text: "I haven't smiled this confidently in 20 years. Lumière is on another level — modern, calm and beautifully run." },
  { name: "Priya K.", treatment: "Teeth Whitening", text: "Eight shades brighter in one visit, zero sensitivity. The clinic feels more like a luxury spa than a dental office." },
  { name: "Daniel R.", treatment: "Root Canal", text: "I was terrified. They were patient, gentle and finished in a single visit. I genuinely felt nothing." },
];

export const Reviews = () => {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="reviews" className="py-24 lg:py-32">
      <div className="container">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Patient Stories</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl tracking-tight">
              Loved by <span className="italic gradient-text">thousands</span>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-14 max-w-3xl mx-auto">
            <div className="relative bg-card border border-border rounded-3xl p-10 lg:p-14 shadow-soft">
              <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
              <div className="flex gap-1 justify-center mb-6">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p key={i} className="font-display text-2xl lg:text-3xl text-center leading-snug animate-fade-in">
                "{reviews[i].text}"
              </p>
              <div className="mt-8 text-center">
                <div className="font-medium">{reviews[i].name}</div>
                <div className="text-sm text-muted-foreground">{reviews[i].treatment}</div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Review ${k + 1}`}
                  className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-1.5 bg-border"}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
