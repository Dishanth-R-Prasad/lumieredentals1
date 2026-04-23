import { Reveal } from "@/components/Reveal";
import doc1 from "@/assets/doctor-1.jpg";
import doc2 from "@/assets/doctor-2.jpg";
import doc3 from "@/assets/doctor-3.jpg";

const doctors = [
  { img: doc1, name: "Dr. Aisha Rahman", role: "Cosmetic & Implant Dentistry", qual: "BDS, MDS — Prosthodontics" },
  { img: doc2, name: "Dr. Marcus Bennett", role: "Endodontist & Root Canal Specialist", qual: "DMD, MSc — Endodontics" },
  { img: doc3, name: "Dr. Lina Kovač", role: "Orthodontist & Aligners Expert", qual: "BDS, MOrth RCS" },
];

export const Doctors = () => {
  return (
    <section id="doctors" className="py-24 lg:py-32 bg-soft">
      <div className="container">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">Meet the Team</span>
            <h2 className="mt-3 font-display text-4xl lg:text-5xl tracking-tight">
              Specialists who <span className="italic gradient-text">truly care</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Award-winning dentists trained at top institutions, dedicated to your comfort and confidence.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {doctors.map((d, i) => (
            <Reveal key={d.name} delay={i * 0.1}>
              <article className="group bg-card border border-border rounded-3xl overflow-hidden hover-lift">
                <div className="aspect-[4/5] overflow-hidden bg-mint">
                  <img
                    src={d.img}
                    alt={`${d.name}, ${d.role}`}
                    loading="lazy"
                    width={768}
                    height={960}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl">{d.name}</h3>
                  <div className="text-sm text-primary mt-1">{d.role}</div>
                  <div className="text-xs text-muted-foreground mt-2">{d.qual}</div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
