import LessonCard from "../lessonCard";
import { Lesson } from "../lessonCard/types";
import { WeekDay } from "./styles";
import { ScheduleSectionProps } from "./types";

export default function ScheduleSection({ weekDaysLesson }: ScheduleSectionProps) {
const {day} = weekDaysLesson[0]
  return (
    <>
    <WeekDay className="weekDay">{day}</WeekDay>
    
    {weekDaysLesson.map((pair: Lesson) => (
      <LessonCard pair={pair} key={pair.idSchedule} />
  ))}
  </>
  );
  
}
