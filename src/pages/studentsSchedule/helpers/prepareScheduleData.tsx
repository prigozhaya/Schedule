import { ScheduleData, RespondeScheduleData } from "../types/types";
import { SCHEDULE } from "./shedule";

export default function prepareScheduleData(): Array<ScheduleData[]>{
  const result = JSON.parse(SCHEDULE).map((element: RespondeScheduleData) => {
      const prepareData = {
          idSchedule: element.IdSchedule,
          day: element.Day,
          dayNumber: element.DayNumber,
          discipline: element.Discipline,
          disciplineType: element.Discipline_Type,
          fioTeacher: element.FIO_teacher,
          lesson: element.Lesson,
          timeIn: element.TimeIn.slice(0, 5),
          timeOut: element.TimeOut.slice(0, 5),
          classroom: element.Classroom,
      };
      return prepareData;
  });
  const preparedScheduleData = [];
  for (let i = 1; i < 7; i++) {
      const subArr = result.filter((el: ScheduleData) => el.dayNumber === i);
      preparedScheduleData.push(subArr);
  }
  return preparedScheduleData;
}
