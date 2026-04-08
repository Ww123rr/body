import { Exercise, ProgressData, Workout } from "./types";

export const EXERCISES: Exercise[] = [
  {
    id: '1',
    name: 'Barbell Squat',
    category: 'Strength',
    targetMuscle: 'Quads',
    difficulty: 'Intermediate',
    description: 'A fundamental lower body exercise that targets the quadriceps, hamstrings, and glutes.'
  },
  {
    id: '2',
    name: 'Bench Press',
    category: 'Strength',
    targetMuscle: 'Chest',
    difficulty: 'Intermediate',
    description: 'The standard exercise for building chest strength and mass.'
  },
  {
    id: '3',
    name: 'Deadlift',
    category: 'Strength',
    targetMuscle: 'Back',
    difficulty: 'Advanced',
    description: 'A full-body lift that primarily targets the posterior chain.'
  },
  {
    id: '4',
    name: 'Running',
    category: 'Cardio',
    difficulty: 'Beginner',
    description: 'Classic cardiovascular exercise for endurance and fat loss.'
  },
  {
    id: '5',
    name: 'Yoga Flow',
    category: 'Flexibility',
    difficulty: 'Beginner',
    description: 'A series of poses to improve mobility and mental focus.'
  },
  {
    id: '6',
    name: 'Pull-ups',
    category: 'Strength',
    targetMuscle: 'Back',
    difficulty: 'Intermediate',
    description: 'Upper body pulling exercise using bodyweight.'
  }
];

export const MOCK_PROGRESS: ProgressData[] = [
  { date: '2024-03-01', weight: 80, caloriesBurned: 450, workoutDuration: 45 },
  { date: '2024-03-02', weight: 79.8, caloriesBurned: 600, workoutDuration: 60 },
  { date: '2024-03-03', weight: 79.9, caloriesBurned: 0, workoutDuration: 0 },
  { date: '2024-03-04', weight: 79.5, caloriesBurned: 550, workoutDuration: 50 },
  { date: '2024-03-05', weight: 79.4, caloriesBurned: 700, workoutDuration: 75 },
  { date: '2024-03-06', weight: 79.2, caloriesBurned: 400, workoutDuration: 40 },
  { date: '2024-03-07', weight: 79.0, caloriesBurned: 500, workoutDuration: 55 },
];

export const MOCK_WORKOUTS: Workout[] = [
  {
    id: 'w1',
    name: 'Leg Day',
    date: '2024-03-07',
    exercises: [
      { exerciseId: '1', sets: 4, reps: 10, weight: 100 },
      { exerciseId: '3', sets: 3, reps: 5, weight: 140 },
    ]
  }
];
