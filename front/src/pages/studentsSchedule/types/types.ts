import { GroupData } from "../../../api/types";

export type RespondeStudentScheduleData = {
  IdSchedule: number;
  Day: string;
  DayNumber: number;
  Discipline: string;
  Discipline_Type: string;
  FIO_teacher: string;
  Lesson: number;
  TimeIn: string;
  TimeOut: string;
  Classroom: string;
};

export type RespondeTeacherScheduleData = {
  IdSchedule: number;
  Day: string;
  DayNumber: number;
  Discipline: string;
  Discipline_Type: string;
  Group: string;
  Lesson: number;
  TimeIn: string;
  TimeOut: string;
  Classroom: string;
};

export type RespondeGroupsData = {
  Name: string;
  IdGroup: number;
};

export type RespondeTeachersData = {
  FIO_teacher: string;
  IdTeacher: number;
};


export type StudentsScheduleData = {
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
};

export type TeachersScheduleData = {
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
};

export type GroupsData = {
  name: string;
  idGroup: number;
};

export type TeachersData = {
  fio: string;
  idTeacher: number;
};

export type PrepareGroupsDataProps ={
    setGroupsData:(value: GroupsData[]) => void;
     groupData: GroupData;
}