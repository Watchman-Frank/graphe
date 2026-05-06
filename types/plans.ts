export interface ReadingPlanDay {
  day: number;
  passages: { book: string; chapter: number }[];
  completed: boolean;
  completedAt?: number;
}

export interface ReadingPlan {
  id: string;
  name: string;
  description: string;
  totalDays: number;
  days: ReadingPlanDay[];
  startDate: number;
  reminderTime?: string;
  reminderEnabled: boolean;
  createdAt: number;
}

export interface ReadingPlanTemplate {
  id: string;
  name: string;
  description: string;
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  focus: 'whole-bible' | 'nt' | 'ot' | 'devotional' | 'topical';
  dailyMinutes: number;
}
