export interface StudentsLesson {
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

export interface StudentsLessonCardProps {
  pair: StudentsLesson;
}

export interface TeachersLesson {
  idSchedule: number;
  day: string;
  dayNumber: number;
  discipline: string;
  disciplineType: string;
  groups: string;
  lesson: number;
  timeIn: string;
  timeOut: string;
  classroom: string;
}

export interface TeachersLessonCardProps {
  pair: TeachersLesson;
}