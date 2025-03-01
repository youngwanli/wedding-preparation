export interface Task {
  id: string;
  date: string;
  lunarDate: string; // 农历日期
  task: string;
  completed: boolean;
  notes: string;
} 