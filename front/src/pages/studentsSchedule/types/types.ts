import { GroupData } from "../../../api/types";

export type RespondeScheduleData = {
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

export type RespondeGroupsData = {
  Name: string;
  IdGroup: number;
};


export type ScheduleData = {
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

export type GroupsData = {
  name: string;
  idGroup: number;
};

export type PrepareGroupsDataProps ={
    setGroupsData:(value: GroupsData[]) => void;
     groupData: GroupData;
}

export interface ScheduleContextData {
  groupsData: GroupsData[],
  setScheduleData:(value: Array<ScheduleData[]>) => void;
  setGroupsData:(value: GroupsData[]) => void;
  scheduleData: Array<ScheduleData[]>,
}
