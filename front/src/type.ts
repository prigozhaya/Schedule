import { StudentsScheduleData, TeachersScheduleData } from "./pages/studentsSchedule/types/types";

export type ScheduleContextData = {
  StudentsScheduleData: StudentsScheduleData[][],
  setStudentsScheduleData: (value: StudentsScheduleData[][]) => void
  TeachersScheduleData: TeachersScheduleData[][],
  setTeachersScheduleData: (value: TeachersScheduleData[][]) => void
  selectedGroupSchedule: string,
  setSelectedGroupSchedule: (value: string) => void,
  selectedTeacherSchedule: string,
  setSelectedTeacherSchedule: (value: string) => void,
};