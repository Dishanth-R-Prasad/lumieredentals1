import { Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-14 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <span className="w-9 h-9 rounded-xl bg-primary-gradient grid place-items-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </span>
            <span className="font-display text-lg font-semibold">Lumiere<span className="text-primary">Dental</span></span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Premium, painless, modern dentistry — designed around your comfort and trusted by thousands of patients.
          </p>
        </div>

        <div>
          <h3 className="font-display text-base mb-3">Explore</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#treatments" className="hover:text-primary">Treatments</a></li>
            <li><a href="#doctors" className="hover:text-primary">Doctors</a></li>
            <li><a href="#why-us" className="hover:text-primary">Why Us</a></li>
            <li><a href="#reviews" className="hover:text-primary">Reviews</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-base mb-3">Contact</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>+1 (000) 000-0000</li>
            <li>hello@lumieredental.com</li>
            <li>12 Aurora Ave, City</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-5 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} Lumière Dental. All rights reserved.</span>
          <span>Crafted with care for every smile.</span>
        </div>
      </div>
    </footer>
  );
};
