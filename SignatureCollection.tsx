import { Button } from "@/components/ui/button";

export function SignatureCollection() {
  const CAKES = [
    { title: "Midnight Silk", desc: "Dark chocolate truffle with gold dust", price: "₹6,500", img: "/cake-chocolate.png" },
    { title: "Royal Velvet", desc: "Classic red velvet with cream cheese", price: "₹7,200", img: "/cake-redvelvet.png" },
    { title: "Golden Orchid", desc: "Vanilla bean with sugar flowers", price: "₹9,500", img: "/cake-gold.png" },
    { title: "Lavender Dream", desc: "Honey blossom with lavender sprigs", price: "₹8,400", img: "/cake-lavender.png" },
    { title: "Persian Garden", desc: "Pistachio and rose petal infusion", price: "₹10,500", img: "/cake-pistachio.png" },
    { title: "Espresso Noir", desc: "Midnight mocha with gold leaf", price: "₹7,800", img: "/cake-espresso.png" },
    { title: "Pink Soirée", desc: "Champagne and strawberry gold-dip", price: "₹12,000", img: "/cake-champagne.png" },
    { title: "Emerald Tea", desc: "Ceremonial matcha with white chocolate", price: "₹9,800", img: "/cake-matcha.png" },
    { title: "Salted Smoke", desc: "Caramel with smoked sea salt crystals", price: "₹6,800", img: "/cake-caramel.png" },
  ];

  return (
    <section id="signature" className="py-24 bg-gradient-to-b from-transparent to-black/40">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-white tracking-[0.2em] uppercase text-sm font-medium">Curated Excellence</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">Signature Collection</h2>
          </div>
          <Button variant="link" className="hidden md:flex text-white hover:opacity-70 transition-opacity">
            View Full Catalogue &rarr;
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {CAKES.map((cake, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden mb-6 bg-white/5 rounded-sm">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors z-10 duration-500" />
                <img 
                  src={cake.img} 
                  alt={cake.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="flex justify-between items-start border-b border-white/10 pb-4 group-hover:border-white/50 transition-colors">
                <div>
                  <h3 className="text-2xl font-serif text-white group-hover:text-white transition-colors">{cake.title}</h3>
                  <p className="text-white/50 text-sm mt-1">{cake.desc}</p>
                </div>
                <span className="text-lg font-medium text-white">{cake.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
