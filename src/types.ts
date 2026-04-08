export interface Exercise {
  id: string;
  name: string;
  category: 'Strength' | 'Cardio' | 'Flexibility' | 'Other';
  targetMuscle?: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  imageUrl?: string;
}

export interface Workout {
  id: string;
  name: string;
  date: string;
  exercises: {
    exerciseId: string;
    sets: number;
    reps: number;
    weight?: number;
  }[];
}

export interface ProgressData {
  date: string;
  weight: number;
  caloriesBurned: number;
  workoutDuration: number;
}
