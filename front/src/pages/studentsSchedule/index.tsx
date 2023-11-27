import { Formik } from 'formik';
import {
    StyledScheduleForm,
    StyledPageContainer,
    StyledGroupsWrapper,
    StyledShaduleContainer,
} from './styles';
import {
    SelectEducationForm,
    SelectFaculty,
    SelectGroup,
} from '../../components/selects';
import { StyledBtn } from '../../components/button';
import { GroupsData, ScheduleData } from './types/types';
import ScheduleSection from '../../components/scheduleSection';
import { useState } from 'react';
import { getGroups } from '../../api/getGroups';
import { getSchedule } from '../../api/getSchedule';
import { displayGroupsBlock, hideGroupsBlock } from './helpers/hideGroups';

export default function StudentsSchedule() {
    const [groupsData, setGroupsData] = useState<GroupsData[]>([]);
    const [scheduleData, setScheduleData] = useState<ScheduleData[][]>([]);

    function chooseGroup() {
        const faculty = document.getElementById('faculty') as HTMLSelectElement;
        const educationForm = document.getElementById(
            'educationForm'
        ) as HTMLSelectElement;
        getGroups(faculty.value, educationForm.value, setGroupsData);
        displayGroupsBlock()
    }

    return (
        <StyledPageContainer>
            <StyledScheduleForm>
            <SelectFaculty />
            <SelectEducationForm />
            <StyledBtn name="selectedgroup" onClick={chooseGroup}>
                Выбрать группу
            </StyledBtn>

            <Formik
                initialValues={{
                    group: '1',
                }}
                onSubmit={(values) => {
                    const idGroups = values.group
                    getSchedule(idGroups, setScheduleData)
                    hideGroupsBlock()
                }}
            >
                {() => (
                    
                        <StyledGroupsWrapper id='groupsWrapper'>
                            <SelectGroup groupsData={groupsData} />
                            <StyledBtn $primary type="submit">
                                Расписание
                            </StyledBtn>
                        </StyledGroupsWrapper>
                )}
            </Formik>
            </StyledScheduleForm>

            <StyledShaduleContainer>
                {scheduleData.map(
                    (weekDaysLesson: ScheduleData[], index: number) => (
                        <ScheduleSection
                            weekDaysLesson={weekDaysLesson}
                            key={index}
                        />
                    )
                )}
            </StyledShaduleContainer>
        </StyledPageContainer>
    );
}
