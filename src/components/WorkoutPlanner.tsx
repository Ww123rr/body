import { motion } from "motion/react";
import { Plus, Calendar as CalendarIcon, Clock, ChevronRight, MoreVertical } from "lucide-react";
import { format, addDays, startOfWeek } from "date-fns";
import { MOCK_WORKOUTS, EXERCISES } from "../constants";
import { cn } from "../lib/utils";

export default function WorkoutPlanner() {
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(startOfWeek(new Date()), i));

  return (
    <div className="space-y-8 pb-24">
      <header className="flex items-center justify-between">
        <h1 className="text-5xl font-display uppercase tracking-tighter">Training <span className="text-neon">Log</span></h1>
        <button className="brutal-btn flex items-center gap-2">
          <Plus className="w-5 h-5" />
          <span className="hidden sm:inline">New Workout</span>
        </button>
      </header>

      {/* Week Selector */}
      <div className="flex gap-2 overflow-x-auto pb-4 no-scrollbar">
        {weekDays.map((day, i) => {
          const isToday = format(day, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');
          return (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "flex flex-col items-center min-w-[70px] p-4 rounded-2xl border transition-all",
                isToday 
                  ? "bg-neon text-dark border-neon shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]" 
                  : "bg-surface text-white/60 border-white/5 hover:border-white/20"
              )}
            >
              <span className="text-xs uppercase font-bold opacity-60">{format(day, 'EEE')}</span>
              <span className="text-xl font-display">{format(day, 'd')}</span>
            </motion.button>
          );
        })}
      </div>

      {/* Workouts List */}
      <div className="space-y-6">
        <h2 className="text-2xl font-display uppercase">Scheduled Sessions</h2>
        
        {MOCK_WORKOUTS.map((workout, i) => (
          <motion.div
            key={workout.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-surface rounded-3xl border border-white/5 p-8 hover:border-neon/30 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-neon/10 flex items-center justify-center">
                    <CalendarIcon className="w-6 h-6 text-neon" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{workout.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-white/40">
                      <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 45 min</span>
                      <span>{workout.exercises.length} Exercises</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {workout.exercises.map((item, idx) => {
                    const exercise = EXERCISES.find(e => e.id === item.exerciseId);
                    return (
                      <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-xs text-white/60 border border-white/5">
                        {exercise?.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="flex-1 md:flex-none px-8 py-3 bg-white/5 rounded-xl font-bold uppercase tracking-wider hover:bg-white/10 transition-colors">
                  Edit
                </button>
                <button className="flex-1 md:flex-none px-8 py-3 bg-neon text-dark rounded-xl font-bold uppercase tracking-wider hover:opacity-90 transition-opacity">
                  Start
                </button>
                <button className="p-3 text-white/40 hover:text-white transition-colors">
                  <MoreVertical className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Empty State / Add Suggestion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="border-2 border-dashed border-white/10 rounded-3xl p-12 flex flex-col items-center justify-center text-center space-y-4 group hover:border-neon/40 transition-colors cursor-pointer"
        >
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Plus className="w-8 h-8 text-white/20 group-hover:text-neon" />
          </div>
          <div>
            <h4 className="text-xl font-bold">Rest Day?</h4>
            <p className="text-white/40">Or schedule a light mobility session to stay active.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
