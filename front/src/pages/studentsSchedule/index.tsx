import {
    StyledScheduleForm,
    StyledPageContainer,
    StyledGroupsWrapper,
    StyledShaduleContainer,
} from './styles';
import {
    SelectEducationForm,
    SelectFaculty,
    SelectWeekType,
    SelectGroup,
} from '../../components/selects';
import { StyledBtn } from '../../components/button';
import { GroupsData, StudentsScheduleData } from './types/types';
import { useContext, useState } from 'react';
import { getGroups } from '../../api/getGroups';
import { getStudentsSchedule } from '../../api/getSchedule';
import { displayGroupsBlock, hideGroupsBlock } from './helpers/hideGroups';
import EmptyResponseIcon from '../../components/emptyResponse';
import LessonIndicator from '../../components/lessonIndicator';
import { ScheduleContext } from '../../App';
import StudentsScheduleSection from '../../components/scheduleSection/StudentScheduleSection';

export default function StudentsSchedule() {
    const { StudentsScheduleData, setStudentsScheduleData, selectedGroupSchedule, setSelectedGroupSchedule } = useContext(ScheduleContext);

    const [groupsData, setGroupsData] = useState<GroupsData[]>([]);
    const [faculty, setFaculty] = useState<string>('');
    const [educationForm, setEducationForm] = useState<string>('');
    const [weekType, setWeekType] = useState<string>('');

    function chooseGroup() {
        const faculty = document.getElementById('faculty') as HTMLSelectElement;
        const educationForm = document.getElementById(
            'educationForm'
        ) as HTMLSelectElement;
        const weekType = document.getElementById(
            'weekType'
        ) as HTMLSelectElement;
        getGroups(faculty.value, educationForm.value, setGroupsData);

        displayGroupsBlock();
        setFaculty(faculty.options[faculty.selectedIndex].text);
        setWeekType(weekType.value);
        setEducationForm(
            educationForm.options[educationForm.selectedIndex].text
        );
        getGroups(faculty.value, educationForm.value, setGroupsData);
        displayGroupsBlock();
    }

    function handleGetSchadule() {
        const groupId = document.getElementById('group') as HTMLSelectElement;
        const week = weekType === "currentWeek" ? "текущую неделю" : "следующую неделю";
        getStudentsSchedule(groupId.value, weekType, setStudentsScheduleData);
        setSelectedGroupSchedule(
            `Расписание для группы ${
                groupId.options[groupId.selectedIndex].text
            } ${faculty} ${educationForm} на ${week}:`
        );
        hideGroupsBlock();
    }

    return (
        <StyledPageContainer>
            <StyledScheduleForm>
                <SelectFaculty />
                <SelectEducationForm />
                <SelectWeekType />
                <StyledBtn name="selectedgroup" onClick={chooseGroup}>
                    Выбрать группу
                </StyledBtn>

                <StyledGroupsWrapper id="groupsWrapper">
                    <SelectGroup groupsData={groupsData} />
                    <StyledBtn $primary onClick={handleGetSchadule}>
                        Расписание
                    </StyledBtn>
                </StyledGroupsWrapper>
            </StyledScheduleForm>
            <LessonIndicator />
            <p>{selectedGroupSchedule}</p>
            {StudentsScheduleData.flat().length > 0 ? (
                <StyledShaduleContainer>
                    {StudentsScheduleData.map(
                        (
                            weekDaysLesson: StudentsScheduleData[],
                            index: number
                        ) => (
                            <StudentsScheduleSection
                                weekDaysLesson={weekDaysLesson}
                                key={index}
                            />
                        )
                    )}
                </StyledShaduleContainer>
            ) : (
                <EmptyResponseIcon />
            )}
        </StyledPageContainer>
    );
}
