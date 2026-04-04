import { Link } from "react-router-dom";
import { Brain, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Strona główna", href: "/" },
    { label: "Strefa terapeuty", href: "/strefa-terapeuty" },
    { label: "Szkolenia", href: "/szkolenia-i-webinary" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Pomoc", href: "/pomoc" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group" data-testid="link-logo">
          <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Brain className="w-6 h-6 text-primary" />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">GoBrain</span>
        </Link>

        {/* Desktop Nav */}
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
          <Button asChild size="sm" className="ml-2 font-semibold shadow-sm" data-testid="button-buy-nav">
            <a href="https://automater.com/rest/order-viewer/buy/1073862" target="_blank" rel="noopener noreferrer">
              Kup kod aktywacyjny
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          data-testid="button-mobile-menu-toggle"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
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
            <Button asChild className="w-full font-semibold shadow-sm" data-testid="button-buy-nav-mobile">
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
