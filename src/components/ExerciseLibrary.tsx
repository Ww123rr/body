import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, Filter, ChevronRight, Info } from "lucide-react";
import { EXERCISES } from "../constants";
import { cn } from "../lib/utils";

export default function ExerciseLibrary() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Strength", "Cardio", "Flexibility"];

  const filteredExercises = EXERCISES.filter(ex => {
    const matchesSearch = ex.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === "All" || ex.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8 pb-24">
      <header className="space-y-4">
        <h1 className="text-5xl font-display uppercase tracking-tighter">Exercise <span className="text-neon">Vault</span></h1>
        
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
            <input 
              type="text"
              placeholder="Search exercises..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-surface border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:border-neon outline-none transition-colors"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-6 py-2 rounded-full border whitespace-nowrap transition-all",
                  activeCategory === cat 
                    ? "bg-neon text-dark border-neon font-bold" 
                    : "bg-surface text-white/60 border-white/10 hover:border-white/30"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredExercises.map((ex, i) => (
            <motion.div
              layout
              key={ex.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, delay: i * 0.05 }}
              className="bg-surface rounded-3xl border border-white/5 overflow-hidden group hover:border-neon/50 transition-colors"
            >
              <div className="aspect-video bg-muted relative overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${ex.id}/800/450`} 
                  alt={ex.name}
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-dark/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-neon border border-neon/20">
                  {ex.difficulty}
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{ex.name}</h3>
                    <p className="text-sm text-white/40">{ex.targetMuscle || ex.category}</p>
                  </div>
                  <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon hover:text-dark transition-colors">
                    <Info className="w-5 h-5" />
                  </button>
                </div>
                
                <p className="text-sm text-white/60 line-clamp-2">
                  {ex.description}
                </p>

                <button className="w-full flex items-center justify-between p-4 bg-white/5 rounded-2xl group/btn hover:bg-white/10 transition-colors">
                  <span className="text-sm font-bold uppercase tracking-wider">View Technique</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
