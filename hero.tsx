import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-white tracking-[0.2em] uppercase text-sm font-medium mb-4 block">
              Luxury Custom Cakes
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight">
              Artistry in <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white">
                Every Slice
              </span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-white/70 max-w-lg leading-relaxed font-light"
          >
            Experience the pinnacle of cake design with Chef Harmeet. 
            From bespoke wedding tiers to avant-garde celebration cakes, 
            we craft edible masterpieces tailored to your vision.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a href="#customizer">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-none h-14 px-8 text-lg font-serif">
                Design Your Cake
              </Button>
            </a>
            <a href="#signature">
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-none h-14 px-8 text-lg font-serif">
                View Gallery
              </Button>
            </a>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10 hidden md:block"
        >
          <div className="absolute inset-0 bg-white/10 blur-[100px] rounded-full transform scale-75" />
          <img 
            src="/hero-cake.png" 
            alt="Luxury Wedding Cake" 
            className="relative w-full h-auto drop-shadow-2xl rounded-sm rotate-[-2deg] hover:rotate-0 transition-transform duration-700"
          />
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
}
