import { ScheduleData, RespondeScheduleData } from "../pages/studentsSchedule/types/types";

const API_LINK = 'http://localhost:5000';

export async function getSchedule(
    idGroups: string,
    weekType: string,
    setScheduleData: (value: ScheduleData[][]) => void){
  const apiLink = `${API_LINK}?idgroup=${idGroups}&weekType=${weekType}`;
  const apiUrl = await fetch(apiLink);
  const responseData = await apiUrl.json();
  const result = responseData.map((element: RespondeScheduleData) => {
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
  setScheduleData(preparedScheduleData)
}