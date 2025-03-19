export interface Task {
  id: string;
  title: string;
  course?: string;
  dueDate: Date;
  dueTime?: string;
  expectedDuration?: number; // in minutes
  priority: 'high' | 'medium' | 'low';
  completed: boolean;
  type: 'assignment' | 'appointment' | 'class';
  startTime?: string;
  endTime?: string;
  location?: string;
  notes?: string;
  description?: string;
  classDays?: string[]; // Array of days when the class occurs
}

export interface ScheduleBlock {
  id: string;
  task: Task;
  startTime: Date;
  endTime: Date;
}
