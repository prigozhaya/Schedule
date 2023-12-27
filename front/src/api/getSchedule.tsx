import {
    RespondeStudentScheduleData,
    RespondeTeacherScheduleData,
    StudentsScheduleData,
    TeachersScheduleData,
} from '../pages/studentsSchedule/types/types';

const API_LINK = 'http://localhost:5000/';

export async function getStudentsSchedule(
    idGroups: string,
    weekType: string,
    setScheduleData: (value: StudentsScheduleData[][]) => void
) {
    const apiLink = `${API_LINK}?groupId=${idGroups}&weekType=${weekType}`;
    const apiUrl = await fetch(apiLink);
    const responseData = await apiUrl.json();
    const result = JSON.parse(responseData).map(
        (element: RespondeStudentScheduleData) => {
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
        }
    );

    const preparedScheduleData = [];
    for (let i = 1; i < 7; i++) {
        const subArr = result.filter(
            (el: StudentsScheduleData) => el.dayNumber === i
        );
        preparedScheduleData.push(subArr);
    }
    setScheduleData(preparedScheduleData);
}

export async function getTeachersSchedule(
    teacherId: string,
    weekType: string,
    setScheduleData: (value: TeachersScheduleData[][]) => void
) {
    const apiLink = `${API_LINK}teachers?teacherId=${teacherId}&weekType=${weekType}`;
    const apiUrl = await fetch(apiLink);
    const responseData = await apiUrl.json();
    const result = JSON.parse(responseData).map(
        (element: RespondeTeacherScheduleData) => {
            const prepareData = {
                idSchedule: element.IdSchedule,
                day: element.Day,
                dayNumber: element.DayNumber,
                discipline: element.Discipline,
                disciplineType: element.Discipline_Type,
                groups: element.Group,
                lesson: element.Lesson,
                timeIn: element.TimeIn.slice(0, 5),
                timeOut: element.TimeOut.slice(0, 5),
                classroom: element.Classroom,
            };
            return prepareData;
        }
    );

    const preparedScheduleData = [];
    for (let i = 1; i < 7; i++) {
        const subArr = result.filter(
            (el: TeachersScheduleData) => el.dayNumber === i
        );
        const uniqueArr = [subArr[0]];
        for (let i = 1; i < subArr.length; i++) {
            const found = uniqueArr.filter(
                (element: TeachersScheduleData) =>
                    element.discipline === subArr[i].discipline &&
                    element.disciplineType === subArr[i].disciplineType &&
                    element.lesson === subArr[i].lesson
            );

            if (found.length === 0) {
                uniqueArr.push(subArr[i]);
            }
        }
        const uniqeGroups = [];
        for (let i = 0; i < uniqueArr.length; i++) {
            const initialValue = uniqueArr[i] ? uniqueArr[i] : {};
            const unionGroups = subArr.reduce(
                (
                    accumulator: TeachersScheduleData,
                    currentValue: TeachersScheduleData
                ) => {
                    if (
                        uniqueArr[i].discipline === currentValue.discipline &&
                        uniqueArr[i].disciplineType ===
                            currentValue.disciplineType &&
                        uniqueArr[i].lesson === currentValue.lesson
                    ) {
                        accumulator.groups += ', ' + currentValue.groups;
                    }
                    return accumulator;
                },
                initialValue
            );
            uniqeGroups.push(unionGroups);
        }

        if (Object.keys(uniqeGroups[0]).length !== 0) {
            preparedScheduleData.push(uniqeGroups);
        } else {
            preparedScheduleData.push([]);
        }
    }

    setScheduleData(preparedScheduleData);
}
