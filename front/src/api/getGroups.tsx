import {
    GroupsData,
    RespondeGroupsData,
} from '../pages/studentsSchedule/types/types';

const API_LINK = 'http://localhost:5000';

export async function getGroups(
    facultyId: string,
    educationForm: string,
    setGroupsData: (value: GroupsData[]) => void
) {
    const apiLink = `${API_LINK}?facultyId=${facultyId}/?educationForm=${educationForm}`;
    const apiUrl = await fetch(apiLink);
    const responseData = await apiUrl.json();
    const result = responseData.map((element: RespondeGroupsData) => {
        const prepareData = {
            name: element.Name,
            idGrou: element.IdGroup,
        };
        return prepareData;
    });
    setGroupsData(result);
}
