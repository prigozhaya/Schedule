import StudentsLessonCard from "../../lessonCard/StudentsLessonCard";
import { StudentsLesson } from "../../lessonCard/types";
import { WeekDay } from "../styles";
import { StudentsScheduleSectionProps } from "../types";

export default function StudentsScheduleSection({ weekDaysLesson }: StudentsScheduleSectionProps) {
  if(weekDaysLesson.length===0){
    return (
      <></>
      )}
  
const {day} = weekDaysLesson[0]
  return (
    <>
    <WeekDay className="weekDay">{day}</WeekDay>
    
    {weekDaysLesson.map((pair: StudentsLesson) => (
      <StudentsLessonCard pair={pair} key={pair.idSchedule} />
  ))}
  </>
  );
  
}
