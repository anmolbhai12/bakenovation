import { Link } from "wouter";
import { Menu, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-background/95 border-r border-white/10 text-white">
              <div className="flex flex-col gap-6 mt-10 font-serif text-lg">
                <a href="#" className="hover:text-primary transition-colors">Home</a>
                <a href="#customizer" className="hover:text-primary transition-colors">Custom Cakes</a>
                <a href="#signature" className="hover:text-primary transition-colors">Signature Collection</a>
                <a href="#about" className="hover:text-primary transition-colors">About Chef Harmeet</a>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Logo Area */}
        <div className="flex items-center gap-4">
          <img 
            src="/logo.jpg" 
            alt="Bakenovation Logo" 
            className="h-16 w-16 md:h-20 md:w-20 rounded-full border-2 border-white/50 object-cover"
          />
          <div className="hidden md:block">
            <h1 className="font-serif text-2xl tracking-widest text-white">BAKENOVATION</h1>
            <p className="text-xs tracking-[0.3em] text-white/80 uppercase">By Chef Harmeet</p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-widest font-medium text-white/90">
          <a href="#" className="hover:text-white/70 transition-colors">HOME</a>
          <a href="#customizer" className="hover:text-white/70 transition-colors">CUSTOM CAKES</a>
          <a href="#signature" className="hover:text-white/70 transition-colors">COLLECTION</a>
          <a href="#about" className="hover:text-white/70 transition-colors">ABOUT</a>
        </div>

        {/* Cart / CTA */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white/70">
            <ShoppingBag className="h-5 w-5" />
          </Button>
          <a href="#customizer">
            <Button className="hidden md:flex bg-white text-black hover:bg-white/90 font-serif rounded-none px-6">
              Order Now
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
