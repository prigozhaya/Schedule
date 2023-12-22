import {
  SelectTeacher,
} from '../../components/selects';
import { StyledBtn } from '../../components/button';
import ScheduleSection from '../../components/scheduleSection';
import { useState } from 'react';
import { getSchedule } from '../../api/getSchedule';
import EmptyResponseIcon from '../../components/emptyResponse';
import LessonIndicator from '../../components/lessonIndicator';
import { StyledPageContainer, StyledScheduleForm, StyledGroupsWrapper, StyledShaduleContainer } from '../styles';
import { ScheduleData, TeachersData } from '../studentsSchedule/types/types';

export default function TeacherSchedule() {
  const [teachersData, setteachersData] = useState<TeachersData[]>([]);
  const [scheduleData, setScheduleData] = useState<ScheduleData[][]>([]);


  function handlChangeTeacher() {
      // const groupId = document.getElementById('group') as HTMLSelectElement;
      // getSchedule(groupId.value, setScheduleData)
  }

  return (
      <StyledPageContainer>
          <StyledScheduleForm>
          <SelectTeacher teachersData={teachersData}  />
          </StyledScheduleForm>

          <LessonIndicator/>

{scheduleData.flat().length > 0 ? 
          <StyledShaduleContainer>
              {scheduleData.map(
                  (weekDaysLesson: ScheduleData[], index: number) => (
                      <ScheduleSection
                          weekDaysLesson={weekDaysLesson}
                          key={index}
                      />
                  )
              )}
          </StyledShaduleContainer> :
          <EmptyResponseIcon/>
}
      </StyledPageContainer>
  );
}
