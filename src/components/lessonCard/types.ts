export interface Lesson {
  id: string;
  lesson: string;
  lessonType: string;
  timeIn: string;
  timeOut: string;
  classroom: string;
  lector: string;
}

export interface LessonCardProps {
  pair: Lesson;
}