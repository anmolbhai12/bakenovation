import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Layers, Sparkles, Palette, Plus, Minus, Info, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FLAVORS = [
  { id: "vanilla", name: "Classic Vanilla Bean", color: "bg-amber-100", price: 0 },
  { id: "chocolate", name: "Belgian Chocolate", color: "bg-amber-950", price: 800 },
  { id: "redvelvet", name: "Royal Red Velvet", color: "bg-red-900", price: 1200 },
  { id: "lemon", name: "Zesty Lemon Elderflower", color: "bg-yellow-200", price: 1000 },
  { id: "pistachio", name: "Persian Pistachio & Rose", color: "bg-emerald-200", price: 1500 },
  { id: "espresso", name: "Midnight Espresso Mocha", color: "bg-stone-900", price: 1400 },
  { id: "lavender", name: "Lavender Honey Blossom", color: "bg-purple-200", price: 1600 },
  { id: "champagne", name: "Pink Champagne & Berry", color: "bg-rose-100", price: 2000 },
  { id: "hazelnut", name: "Roasted Praline Hazelnut", color: "bg-orange-900", price: 1200 },
  { id: "matcha", name: "Ceremonial Matcha Green Tea", color: "bg-lime-900", price: 1500 },
  { id: "salted-caramel", name: "Smoked Salted Caramel", color: "bg-amber-600", price: 1000 },
  { id: "coconut", name: "Toasted Coconut & Lime", color: "bg-slate-100", price: 1200 },
];

const SHAPES = [
  { id: "round", name: "Classic Round" },
  { id: "square", name: "Modern Square" },
  { id: "heart", name: "Romantic Heart" },
  { id: "hexagon", name: "Architectural Hexagon" },
  { id: "petal", name: "Scalloped Petal" },
  { id: "star", name: "Celestial Star" },
  { id: "oval", name: "Elegant Oval" },
  { id: "pillow", name: "Royal Pillow" },
];

export function CakeCustomizer() {
  const [tiers, setTiers] = useState([1]);
  const [flavor, setFlavor] = useState("vanilla");
  const [shape, setShape] = useState("round");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const calculateTotal = () => {
    const basePrice = 4500;
    const tierPrice = (tiers[0] - 1) * 3500;
    const flavorPrice = FLAVORS.find(f => f.id === flavor)?.price || 0;
    return basePrice + tierPrice + flavorPrice;
  };

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
        toast({
          title: "Inspiration Uploaded",
          description: "Chef Harmeet will use this image as reference for your design.",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleOrder = () => {
    const selectedFlavor = FLAVORS.find(f => f.id === flavor)?.name;
    const selectedShape = SHAPES.find(s => s.id === shape)?.name;
    const total = calculateTotal();
    
    const subject = encodeURIComponent(`New Cake Order Request - Bakenovation`);
    const body = encodeURIComponent(
      `Order Details:\n` +
      `--------------\n` +
      `Flavor: ${selectedFlavor}\n` +
      `Shape: ${selectedShape}\n` +
      `Tiers: ${tiers[0]}\n` +
      `Personal Message: ${message || "None"}\n` +
      `Estimated Total: ₹${total}\n\n` +
      `Please contact the customer for delivery address and payment confirmation.`
    );

    window.location.href = `mailto:japindersinghbhasin@gmail.com?subject=${subject}&body=${body}`;

    toast({
      title: "Opening Email Client",
      description: `Preparing your order details for japindersinghbhasin@gmail.com`,
    });
  };

  return (
    <section id="customizer" className="py-24 relative bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-white tracking-[0.2em] uppercase text-sm font-medium">Create Your Masterpiece</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">The Atelier</h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto font-light">
            Use our interactive design studio to visualize your dream cake. Select shapes, flavors, and tier configurations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Controls */}
          <div className="lg:col-span-5 space-y-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-md">
              <CardContent className="p-6">
                <Tabs defaultValue="shape" className="w-full">
                  <TabsList className="w-full bg-black/20 mb-8 border border-white/5">
                    <TabsTrigger value="shape" className="flex-1 font-serif">Structure</TabsTrigger>
                    <TabsTrigger value="flavor" className="flex-1 font-serif">Flavor</TabsTrigger>
                    <TabsTrigger value="details" className="flex-1 font-serif">Details</TabsTrigger>
                  </TabsList>

                  <TabsContent value="shape" className="space-y-8">
                    <div className="space-y-4">
                      <Label className="text-white">Cake Shape</Label>
                      <div className="grid grid-cols-2 gap-4">
                        {SHAPES.map((s) => (
                          <button
                            key={s.id}
                            onClick={() => setShape(s.id)}
                            className={`
                              cursor-pointer p-4 rounded-lg border transition-all duration-300 flex items-center gap-3 text-left
                              ${shape === s.id ? "bg-primary/20 border-primary" : "bg-white/5 border-white/10 hover:border-white/20"}
                            `}
                          >
                            <div className={`w-8 h-8 rounded-full border border-current flex items-center justify-center ${shape === s.id ? "text-white" : "text-white/50"}`}>
                                {shape === s.id && <Check className="w-4 h-4" />}
                            </div>
                            <span className={shape === s.id ? "text-white font-medium" : "text-white/70"}>{s.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Label className="text-white">Number of Tiers</Label>
                        <span className="text-white font-serif text-xl">{tiers[0]}</span>
                      </div>
                      <Slider
                        value={tiers}
                        max={5}
                        min={1}
                        step={1}
                        className="py-4 cursor-pointer"
                        onValueChange={setTiers}
                      />
                    </div>
                  </TabsContent>

                  <TabsContent value="flavor" className="space-y-6">
                     <RadioGroup value={flavor} onValueChange={setFlavor} className="grid grid-cols-1 gap-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                      {FLAVORS.map((f) => (
                        <div key={f.id} className="flex items-center space-x-2 bg-white/5 p-4 rounded-lg border border-white/10 has-[button[data-state=checked]]:border-white/50 transition-colors text-white">
                          <RadioGroupItem value={f.id} id={f.id} className="border-white/50 text-white" />
                          <div className={`w-8 h-8 rounded-full ${f.color} shadow-inner`} />
                          <div className="flex-1">
                            <Label htmlFor={f.id} className="text-white cursor-pointer block font-medium">{f.name}</Label>
                            {f.price > 0 && <span className="text-xs text-white/70">+$ {f.price}</span>}
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </TabsContent>

                  <TabsContent value="details" className="space-y-6">
                    <div className="space-y-4">
                        <Label className="text-white">Upload Reference Image</Label>
                        <div className="flex flex-col gap-4">
                          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-white/10 border-dashed rounded-lg cursor-pointer bg-white/5 hover:bg-white/10 transition-colors">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="w-8 h-8 text-white/50 mb-2" />
                              <p className="text-sm text-white/50 text-center">Click to upload your inspiration<br/><span className="text-[10px]">(Reference Image)</span></p>
                            </div>
                            <input type="file" className="hidden" onChange={handleImageUpload} accept="image/*" />
                          </label>
                          {selectedImage && (
                            <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-white/20 mx-auto">
                              <img src={selectedImage} alt="Uploaded" className="w-full h-full object-cover" />
                              <button 
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-1 right-1 bg-black/50 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                              >
                                ×
                              </button>
                            </div>
                          )}
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <Label className="text-white">Personal Message</Label>
                        <Input 
                            placeholder="e.g. Happy Birthday Sarah" 
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/20"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-white">Delivery Address</Label>
                        <Input placeholder="House No, City..." className="bg-white/5 border-white/10 text-white h-10" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-white">Payment Mode</Label>
                        <RadioGroup defaultValue="online" className="flex gap-4 pt-2">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="cash" id="cash" className="border-white/50 text-white" />
                            <Label htmlFor="cash" className="text-white text-xs">Cash</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="online" id="online" className="border-white/50 text-white" />
                            <Label htmlFor="online" className="text-white text-xs">Online</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="space-y-4">
                        <Label className="text-white">Special Instructions</Label>
                        <Textarea 
                            placeholder="Describe any specific decorations or dietary needs..." 
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/20 min-h-[80px]"
                        />
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="bg-white/10 border border-white/20 p-6 flex justify-between items-center mb-4">
                <span className="text-white/70 font-light">Estimated Total</span>
                <span className="text-3xl font-serif text-white">₹{calculateTotal()}</span>
            </div>

            <div className="flex gap-4">
              <Button 
                onClick={handleOrder}
                className="flex-1 bg-white text-black font-serif h-14 text-lg rounded-none hover:bg-white/90 transition-all active:scale-95"
              >
                Book Consultation
              </Button>
              <Button variant="outline" className="flex-1 border-white/20 text-white font-serif h-14 text-lg rounded-none hover:bg-white/10">
                Gallery
              </Button>
            </div>
          </div>

          {/* Visualizer */}
          <div className="lg:col-span-7 lg:sticky lg:top-32">
            <div className="aspect-[4/5] bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/10 p-8 flex items-center justify-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('/silk-bg.png')] opacity-20 bg-cover bg-center mix-blend-overlay" />
              
              <div className="relative z-10 flex flex-col items-center justify-end h-3/4 w-full">
                <AnimatePresence mode="popLayout">
                  {Array.from({ length: tiers[0] }).map((_, index) => {
                    const width = 100 - (index * 15);
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: -50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5, y: 20 }}
                        transition={{ 
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            delay: (tiers[0] - index) * 0.05 
                        }}
                        className={`
                          relative shadow-2xl mb-1
                          ${shape === 'round' ? 'rounded-[50%_50%_10px_10px] / 100%_100%_20%_20%' : ''}
                          ${shape === 'square' ? 'rounded-sm' : ''}
                          ${shape === 'heart' ? 'rounded-[50%_50%_10px_10px]' : ''}
                        `}
                        style={{
                          width: `${width}%`,
                          height: '80px',
                          background: flavor === 'chocolate' ? '#3E2723' : 
                                     flavor === 'redvelvet' ? '#880E4F' :
                                     flavor === 'lemon' ? '#FFF59D' : '#F5F5DC',
                          maxWidth: '350px'
                        }}
                      >
                        {/* Shading */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 rounded-[inherit]" />
                        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-[inherit]" />
                        
                        {/* Message Preview */}
                        {index === 0 && message && (
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <span className="font-serif text-[10px] text-black/40 italic uppercase tracking-widest px-2 text-center leading-none">
                                    {message}
                                </span>
                            </div>
                        )}
                        
                        {/* Ribbon/Border decorative hint */}
                        <div className="absolute bottom-2 w-full h-[2px] bg-white/20 shadow-[0_1px_2px_rgba(255,255,255,0.2)]" />
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
                
                {/* Cake Stand Base */}
                <div className="w-1/2 h-6 bg-white/5 mt-2 rounded-full blur-[2px] shadow-inner" />
                <div className="w-[15%] h-16 bg-gradient-to-b from-white/10 to-transparent mx-auto mt-[-8px] border-x border-white/5" />
                <div className="w-3/4 h-4 bg-white/10 rounded-full mt-[-8px] shadow-lg" />
              </div>
              
              {/* Overlay info */}
              <div className="absolute top-4 right-4 flex items-center gap-2 text-white/40 text-[10px] uppercase tracking-tighter">
                <Sparkles className="w-3 h-3" />
                Live Design Preview
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
