import {
  GroupsData,
  RespondeGroupsData,
} from '../pages/studentsSchedule/types/types';

const API_LINK = 'http://localhost:5000/buttonClicked?';

export async function getTeachers(
  facultyId: string,
  educationForm: string,
  setGroupsData: (value: GroupsData[]) => void
) {
  const apiLink = `${API_LINK}facultyId=${facultyId}&educationForm=${educationForm}`;
  const apiUrl = await fetch(apiLink);
  const responseData = await apiUrl.json();
  const result = JSON.parse(responseData).map((element: RespondeGroupsData) => {
      const prepareData = {
          name: element.Name,
          idGroup: element.IdGroup,
      };
      return prepareData;
  });

  setGroupsData(result);
}
