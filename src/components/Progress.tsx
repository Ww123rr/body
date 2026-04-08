import { motion } from "motion/react";
import { TrendingUp, Scale, Target, Calendar } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { MOCK_PROGRESS } from "../constants";

export default function Progress() {
  return (
    <div className="space-y-8 pb-24">
      <header className="space-y-2">
        <h1 className="text-5xl font-display uppercase tracking-tighter">Performance <span className="text-neon">Analytics</span></h1>
        <p className="text-white/60">Tracking your journey to greatness.</p>
      </header>

      {/* Weight Tracking */}
      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-2 bg-surface p-8 rounded-3xl border border-white/5"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Scale className="w-6 h-6 text-neon" />
              <h2 className="text-2xl font-display uppercase">Body Weight</h2>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold">79.0 <span className="text-sm text-white/40">kg</span></div>
              <div className="text-xs text-neon">-1.0kg this week</div>
            </div>
          </div>
          
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={MOCK_PROGRESS}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis 
                  dataKey="date" 
                  stroke="#ffffff40" 
                  fontSize={12}
                  tickFormatter={(str) => new Date(str).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
                />
                <YAxis stroke="#ffffff40" fontSize={12} domain={['dataMin - 1', 'dataMax + 1']} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #ffffff20', borderRadius: '12px' }}
                  itemStyle={{ color: '#d4ff00' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="weight" 
                  stroke="#d4ff00" 
                  strokeWidth={3}
                  dot={{ fill: '#d4ff00', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, strokeWidth: 0 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-neon text-dark p-8 rounded-3xl"
          >
            <h3 className="text-xl font-display uppercase mb-4">Current Goal</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-sm font-bold uppercase">Weight Loss</span>
                <span className="text-3xl font-display">75%</span>
              </div>
              <div className="w-full h-3 bg-dark/10 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '75%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-dark" 
                />
              </div>
              <p className="text-sm font-medium">3.5kg to go until you reach your target of 75.5kg.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-surface p-8 rounded-3xl border border-white/5"
          >
            <h3 className="text-xl font-display uppercase mb-6">Key Metrics</h3>
            <div className="space-y-6">
              {[
                { label: 'Avg Workout', value: '52 min', icon: Calendar },
                { label: 'Total Calories', value: '14.2k', icon: TrendingUp },
                { label: 'Consistency', value: '85%', icon: Target },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-white/40" />
                    <span className="text-sm text-white/60">{item.label}</span>
                  </div>
                  <span className="font-bold">{item.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Activity Distribution */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-surface p-8 rounded-3xl border border-white/5"
      >
        <h2 className="text-2xl font-display uppercase mb-8">Workout Duration</h2>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={MOCK_PROGRESS}>
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
                cursor={{ fill: '#ffffff05' }}
              />
              <Bar 
                dataKey="workoutDuration" 
                fill="#d4ff00" 
                radius={[4, 4, 0, 0]}
                maxBarSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </motion.div>
    </div>
  );
}
