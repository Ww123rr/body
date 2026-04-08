import { motion } from "motion/react";
import { Activity, Flame, Clock, Trophy } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts";
import { MOCK_PROGRESS } from "../constants";

export default function Dashboard() {
  return (
    <div className="space-y-8 pb-24">
      <header className="space-y-2">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-display uppercase tracking-tighter"
        >
          Welcome Back, <span className="text-neon">Warrior</span>
        </motion.h1>
        <p className="text-white/60 text-lg">You're on a 5-day streak. Keep pushing!</p>
      </header>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Calories', value: '2,450', icon: Flame, color: 'text-orange-500' },
          { label: 'Workouts', value: '12', icon: Activity, color: 'text-neon' },
          { label: 'Minutes', value: '480', icon: Clock, color: 'text-blue-400' },
          { label: 'Goals', value: '3/5', icon: Trophy, color: 'text-yellow-400' },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface p-6 rounded-2xl border border-white/5 hover:border-neon/30 transition-colors"
          >
            <stat.icon className={`w-6 h-6 ${stat.color} mb-4`} />
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-sm text-white/40 uppercase tracking-wider">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Progress Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-surface p-8 rounded-3xl border border-white/5"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-display uppercase">Weekly Burn</h2>
          <div className="flex gap-2">
            <span className="flex items-center gap-2 text-xs text-white/40">
              <div className="w-2 h-2 rounded-full bg-neon" /> Calories
            </span>
          </div>
        </div>
        
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={MOCK_PROGRESS}>
              <defs>
                <linearGradient id="colorBurn" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#d4ff00" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#d4ff00" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
              <XAxis 
                dataKey="date" 
                stroke="#ffffff40" 
                fontSize={12}
                tickFormatter={(str) => new Date(str).toLocaleDateString('en-US', { weekday: 'short' })}
              />
              <YAxis stroke="#ffffff40" fontSize={12} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ffffff20', borderRadius: '12px' }}
                itemStyle={{ color: '#d4ff00' }}
              />
              <Area 
                type="monotone" 
                dataKey="caloriesBurned" 
                stroke="#d4ff00" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorBurn)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </motion.div>

      {/* Today's Plan */}
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-neon text-dark p-8 rounded-3xl"
        >
          <h2 className="text-3xl font-display uppercase mb-4">Today's Mission</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-dark/10 pb-2">
              <span className="font-bold">Heavy Leg Day</span>
              <span className="text-sm opacity-60">60 min</span>
            </div>
            <p className="text-sm font-medium">Focus on explosive movements and progressive overload. You've got this!</p>
            <button className="w-full bg-dark text-white font-display uppercase py-3 rounded-xl mt-4 hover:opacity-90 transition-opacity">
              Start Workout
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-surface p-8 rounded-3xl border border-white/5"
        >
          <h2 className="text-2xl font-display uppercase mb-6">Recent Achievements</h2>
          <div className="space-y-4">
            {[
              { title: 'New PR: Squat', desc: '140kg x 5 reps', date: 'Yesterday' },
              { title: 'Early Bird', desc: '5 workouts before 7 AM', date: '2 days ago' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl">
                <div className="w-12 h-12 rounded-full bg-neon/20 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-neon" />
                </div>
                <div>
                  <div className="font-bold">{item.title}</div>
                  <div className="text-sm text-white/40">{item.desc} • {item.date}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
