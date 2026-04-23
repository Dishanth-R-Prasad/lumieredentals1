import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Treatments } from "@/components/site/Treatments";
import { WhyUs } from "@/components/site/WhyUs";
import { Doctors } from "@/components/site/Doctors";
import { Reviews } from "@/components/site/Reviews";
import { FAQ } from "@/components/site/FAQ";
import { BookCTA } from "@/components/site/BookCTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Treatments />
      <WhyUs />
      <Doctors />
      <Reviews />
      <FAQ />
      <BookCTA />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
