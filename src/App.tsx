/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import ExerciseLibrary from "./components/ExerciseLibrary";
import WorkoutPlanner from "./components/WorkoutPlanner";
import Progress from "./components/Progress";

export default function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "exercises":
        return <ExerciseLibrary />;
      case "workouts":
        return <WorkoutPlanner />;
      case "progress":
        return <Progress />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white selection:bg-neon selection:text-dark">
      {/* Background Glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-neon/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-neon/5 blur-[120px] rounded-full" />
      </div>

      <main className="max-w-7xl mx-auto px-6 pt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
