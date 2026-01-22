import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black/80 border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <h2 className="font-serif text-3xl text-white mb-6">BAKENOVATION</h2>
            <p className="text-white/60 max-w-sm font-light leading-relaxed">
              Crafting edible memories with passion and precision. 
              Chef Harmeet brings global techniques to your special moments.
            </p>
          </div>
          
          <div>
            <h4 className="text-white uppercase tracking-widest text-sm font-medium mb-6 underline decoration-white/20 underline-offset-8">Explore</h4>
            <ul className="space-y-4 text-white/70 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-white transition-colors">The Menu</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Custom Orders</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Wedding Consultations</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest text-sm font-medium mb-6 underline decoration-white/20 underline-offset-8">Contact</h4>
            <ul className="space-y-4 text-white/70 font-light">
              <li>info@bakenovation.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Baker Street<br/>New York, NY 10012</li>
            </ul>
            <div className="flex gap-4 mt-6 text-white/50">
              <Instagram className="hover:text-white cursor-pointer transition-colors" />
              <Facebook className="hover:text-white cursor-pointer transition-colors" />
              <Twitter className="hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 uppercase tracking-wider">
          <p>&copy; 2024 Bakenovation. All rights reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
