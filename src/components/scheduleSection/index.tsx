import LessonCard from "../lessonCard";
import { Lesson } from "../lessonCard/types";
import { ScheduleSectionProps } from "./types";

export default function ScheduleSection({ weekDaysLesson }: ScheduleSectionProps) {
const {day} = weekDaysLesson[0]
  return (
    <>
    {day}
    {weekDaysLesson.map((pair: Lesson) => (
      <LessonCard pair={pair} key={pair.idSchedule} />
  ))}
  </>
  );
  
}
