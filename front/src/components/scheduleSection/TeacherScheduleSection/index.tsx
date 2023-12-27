import TeachersLessonCard from "../../lessonCard/TeacherLessonCard";
import { TeachersLesson } from "../../lessonCard/types";
import { WeekDay } from "../styles";
import { TeachersScheduleSectionProps } from "../types";

export default function TeachersScheduleSection({ weekDaysLesson }: TeachersScheduleSectionProps) {
  if(weekDaysLesson.length===0){
    return (
      <></>
      )}
  
const {day} = weekDaysLesson[0]
  return (
    <>
    <WeekDay className="weekDay">{day}</WeekDay>
    
    {weekDaysLesson.map((pair: TeachersLesson) => (
      <TeachersLessonCard pair={pair} key={pair.idSchedule} />
  ))}
  </>
  );
  
}
