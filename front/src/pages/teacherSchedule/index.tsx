import { SelectTeacher, SelectWeekType } from '../../components/selects';
import { StyledBtn } from '../../components/button';
import { useContext, useEffect, useState } from 'react';
import { getTeachersSchedule } from '../../api/getSchedule';
import EmptyResponseIcon from '../../components/emptyResponse';
import LessonIndicator from '../../components/lessonIndicator';
import {
    StyledPageContainer,
    StyledScheduleForm,
    StyledShaduleContainer,
} from '../styles';
import { TeachersScheduleData, TeachersData } from '../studentsSchedule/types/types';
import { getTeachers } from '../../api/getTeachers';
import { ScheduleContext } from '../../App';
import TeachersScheduleSection from '../../components/scheduleSection/TeacherScheduleSection';

export default function TeacherSchedule() {
    const { TeachersScheduleData, setTeachersScheduleData, selectedTeacherSchedule, setSelectedTeacherSchedule } = useContext(ScheduleContext);
    const [teachersData, setTeachersData] = useState<TeachersData[]>([]);

    useEffect(() => {
        getTeachers(setTeachersData);
    }, []);

    function handleGetTeacherSchadule() {
        const weekType = document.getElementById(
            'weekType'
        ) as HTMLSelectElement;
        const teacherId = document.getElementById(
            'teacher'
        ) as HTMLSelectElement;
        const week = weekType.value === "currentWeek" ? "текущую неделю" : "следующую неделю";
        setSelectedTeacherSchedule(`Для ${teacherId.options[teacherId.selectedIndex].text} на ${week}: `)
        getTeachersSchedule(teacherId.value, weekType.value, setTeachersScheduleData);
    }

    return (
        <StyledPageContainer>
            <StyledScheduleForm>
                <SelectTeacher teachersData={teachersData} />
                <SelectWeekType />
                <StyledBtn $primary onClick={handleGetTeacherSchadule}>
                    Расписание
                </StyledBtn>
            </StyledScheduleForm>
            <LessonIndicator />

            <p>{selectedTeacherSchedule}</p>
            {TeachersScheduleData.flat().length > 0 ? (
                <StyledShaduleContainer>
                    {TeachersScheduleData.map(
                        (weekDaysLesson: TeachersScheduleData[], index: number) => (
                            <TeachersScheduleSection
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
