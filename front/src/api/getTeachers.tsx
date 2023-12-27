import {
  RespondeTeachersData,
  TeachersData,
} from '../pages/studentsSchedule/types/types';

const API_LINK = 'http://localhost:5000/getTeacherNames';

export async function getTeachers(
  setTeachersData: (value: TeachersData[]) => void
) {
  const apiUrl = await fetch(API_LINK);
  const responseData = await apiUrl.json();
  const result = JSON.parse(responseData).map((element: RespondeTeachersData) => {
      const prepareData = {
        fio: element.FIO_teacher,
        idTeacher: element.IdTeacher,
      };
      return prepareData;
  });
  setTeachersData(result);
}
