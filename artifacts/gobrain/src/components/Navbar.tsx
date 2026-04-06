import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function GoBrainLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="21" stroke="currentColor" strokeWidth="2" />
      <path
        d="M11 24 Q11 11 24 11 Q37 11 37 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M11 24 Q13 30 19 28 Q24 32 29 28 Q35 30 37 24"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <line x1="24" y1="11" x2="24" y2="25" stroke="currentColor" strokeWidth="1" strokeDasharray="2.5 2" strokeLinecap="round" />
      <path
        d="M21 25 Q20 29 21.5 30.5 L26.5 30.5 Q28 29 27 25 Q27 21.5 24 21.5 Q21 21.5 21 25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="21.5" y1="30.5" x2="26.5" y2="30.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="32.5" x2="26" y2="32.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="24" y1="19.5" x2="24" y2="17.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="27.2" y1="20.8" x2="28.5" y2="19.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="20.8" y1="20.8" x2="19.5" y2="19.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Strona g\u0142\u00f3wna", href: "/" },
    { label: "Sklep", href: "/sklep" },
    { label: "Strefa terapeuty", href: "/strefa-terapeuty" },
    { label: "Szkolenia", href: "/szkolenia-i-webinary" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Pomoc", href: "/pomoc" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border transition-all shadow-sm">
      <div className="container mx-auto px-4 h-18 flex items-center justify-between" style={{ height: "72px" }}>
        <Link to="/" className="flex items-center gap-3 group" data-testid="link-logo">
          <div className="bg-primary/10 p-2.5 rounded-xl group-hover:bg-primary/20 transition-colors border border-primary/10">
            <GoBrainLogo className="w-9 h-9 text-primary" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-black text-2xl tracking-tight text-foreground" style={{ letterSpacing: "-0.02em" }}>GoBrain</span>
            <span className="text-[10px] font-semibold text-orange-500 uppercase tracking-widest">{'Trening s\u0142uchowy'}</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              data-testid={`link-${link.label.toLowerCase().replace(/ /g, "-")}`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild size="sm" className="ml-2 font-semibold shadow-sm bg-orange-500 hover:bg-orange-600 text-white border-0" data-testid="button-buy-nav">
            <a href="https://automater.com/rest/order-viewer/buy/1073862" target="_blank" rel="noopener noreferrer">
              Kup kod aktywacyjny
            </a>
          </Button>
        </nav>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          data-testid="button-mobile-menu-toggle"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 py-4 space-y-4">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                data-testid={`link-mobile-${link.label.toLowerCase().replace(/ /g, "-")}`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full font-semibold shadow-sm bg-orange-500 hover:bg-orange-600 text-white border-0" data-testid="button-buy-nav-mobile">
              <a href="https://automater.com/rest/order-viewer/buy/1073862" target="_blank" rel="noopener noreferrer">
                Kup kod aktywacyjny
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
