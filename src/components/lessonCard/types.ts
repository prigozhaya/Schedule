export interface Lesson {
  idSchedule: number;
  day: string;
  dayNumber: number;
  discipline: string;
  disciplineType: string;
  fioTeacher: string;
  lesson: number;
  timeIn: string;
  timeOut: string;
  classroom: string;
}

export interface LessonCardProps {
  pair: Lesson;
}