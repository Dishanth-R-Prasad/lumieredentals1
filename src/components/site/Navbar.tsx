import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#treatments", label: "Treatments" },
  { href: "#doctors", label: "Doctors" },
  { href: "#why-us", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl shadow-soft border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-20" aria-label="Main">
        <a href="#home" className="flex items-center gap-2 group">
          <span className="w-10 h-10 rounded-xl bg-primary-gradient grid place-items-center shadow-glow group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-primary-foreground" />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight">
            Lumière <span className="text-primary">Dental</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild variant="premium" size="lg">
            <a href="#book">Book Appointment</a>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg text-foreground"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <ul className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-base font-medium text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <Button asChild variant="premium" className="mt-2">
              <a href="#book" onClick={() => setOpen(false)}>Book Appointment</a>
            </Button>
          </ul>
        </div>
      )}
    </header>
  );
};
