import { Button } from "@/components/ui/button";
import { Phone, Calendar, ShieldCheck, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import heroImg from "@/assets/hero-dental.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-hero">
      {/* Decorative blobs */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="absolute -bottom-32 -left-20 w-[420px] h-[420px] rounded-full bg-accent/40 blur-3xl" aria-hidden />

      <div className="container relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-secondary-foreground text-xs font-medium mb-6"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            Trusted by 5,000+ happy patients
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-foreground"
          >
            Advanced Dental Care{" "}
            <span className="gradient-text italic">For Every Smile</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Experience truly painless treatment with our award-winning specialists,
            world-class technology, and a calm, modern environment designed around
            your comfort.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Button asChild variant="premium" size="xl">
              <a href="#book"><Calendar className="w-4 h-4" /> Book Appointment</a>
            </Button>
            <Button asChild variant="outline" size="xl">
              <a href="tel:+10000000000"><Phone className="w-4 h-4" /> Call Now</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-2"><Award className="w-4 h-4 text-primary" /> Certified Specialists</span>
            <span className="inline-flex items-center gap-2"><Sparkles className="w-4 h-4 text-primary" /> Painless Procedures</span>
            <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-primary" /> Hospital-grade Hygiene</span>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-[2rem] overflow-hidden shadow-elegant aspect-[4/5] bg-card">
            <img
              src={heroImg}
              alt="Friendly dental specialist at Lumière Dental Clinic"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating cards */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-4 sm:-left-10 bottom-12 bg-card/95 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-elegant w-56"
          >
            <div className="text-xs text-muted-foreground">Patient rating</div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="font-display text-3xl font-semibold">4.9</span>
              <span className="text-sm text-muted-foreground">/ 5</span>
            </div>
            <div className="text-xs text-primary mt-1">Based on 1,200+ reviews</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 sm:-right-8 top-12 bg-card/95 backdrop-blur-xl border border-border rounded-2xl p-4 shadow-elegant w-52"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-gradient grid place-items-center">
                <ShieldCheck className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-sm font-semibold">Pain-Free</div>
                <div className="text-xs text-muted-foreground">Gentle care promise</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground">
        <span className="text-[11px] tracking-[0.2em] uppercase">Scroll</span>
        <span className="w-px h-10 bg-gradient-to-b from-primary to-transparent animate-scroll-bounce" />
      </div>
    </section>
  );
};
