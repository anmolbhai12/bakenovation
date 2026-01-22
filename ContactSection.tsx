import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export function ContactSection() {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Enquiry Sent",
      description: "Chef Harmeet will get back to you within 24 hours.",
    });
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <span className="text-white tracking-[0.2em] uppercase text-sm font-medium">The Visionary</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mt-4">Chef Harmeet</h2>
              <div className="w-20 h-1 bg-white mt-6" />
            </div>

            <p className="text-lg text-white/70 font-light leading-relaxed">
              With over 15 years of experience in luxury patisserie, Chef Harmeet brings an architectural approach to cake design. 
              Each creation at Bakenovation is a blend of traditional craftsmanship and avant-garde innovation, 
              using only the finest ingredients sourced globally.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email Us</h4>
                  <p className="text-white/50 text-sm">concierge@bakenovation.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Call Us</h4>
                  <p className="text-white/50 text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full" />
            <Card className="relative bg-white/5 border-white/10 backdrop-blur-xl rounded-none p-8">
              <h3 className="text-2xl font-serif text-white mb-8 text-center uppercase tracking-widest text-white">General Enquiry</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-white/70 text-xs uppercase tracking-tighter">Your Name</Label>
                    <Input className="bg-white/5 border-white/10 rounded-none text-white h-12" required />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-white/70 text-xs uppercase tracking-tighter">Email Address</Label>
                    <Input type="email" className="bg-white/5 border-white/10 rounded-none text-white h-12" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-white/70 text-xs uppercase tracking-tighter">Occasion</Label>
                  <Input className="bg-white/5 border-white/10 rounded-none text-white h-12" placeholder="Wedding, Birthday, Gala..." />
                </div>
                <div className="space-y-2">
                  <Label className="text-white/70 text-xs uppercase tracking-tighter">Details</Label>
                  <Textarea className="bg-white/5 border-white/10 rounded-none text-white min-h-[120px]" placeholder="Tell us more about your event..." required />
                </div>
                <Button type="submit" className="w-full bg-white text-black font-serif h-14 text-lg rounded-none hover:bg-white/90">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
