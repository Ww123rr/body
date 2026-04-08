import { motion } from "motion/react";
import { LayoutDashboard, Dumbbell, Calendar, TrendingUp } from "lucide-react";
import { cn } from "../lib/utils";

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const tabs = [
    { id: 'dashboard', label: 'Home', icon: LayoutDashboard },
    { id: 'workouts', label: 'Plan', icon: Calendar },
    { id: 'exercises', label: 'Library', icon: Dumbbell },
    { id: 'progress', label: 'Stats', icon: TrendingUp },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-surface/80 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 z-50 shadow-2xl">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300",
              isActive ? "text-dark" : "text-white/60 hover:text-white"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="active-pill"
                className="absolute inset-0 bg-neon rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <Icon className="w-5 h-5 relative z-10" />
            <span className="text-sm font-medium relative z-10 hidden sm:block">
              {tab.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
