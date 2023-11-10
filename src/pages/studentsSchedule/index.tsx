import { Formik } from 'formik';
import { GroupData } from '../../api/types';
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
import { ScheduleData } from './types/types';
import prepareScheduleData from './helpers/prepareScheduleData';
import ScheduleSection from '../../components/scheduleSection';



export default function StudentsSchedule() {

    const scheduleData: Array<ScheduleData[]> = prepareScheduleData();

    return (
        <StyledPageContainer>
            <Formik
                initialValues={{
                    faculty: '',
                    educationForm: '',
                }}
                onSubmit={(values) => {
                    const groupData: GroupData = {
                        faculty: Number(values.faculty),
                        educationForm: Number(values.educationForm),
                    };
                    console.log(groupData);
                }}
            >
                {({ touched }) => (
                    <StyledScheduleForm>
                        <SelectFaculty />
                        <SelectEducationForm />

                        <StyledBtn type="submit">Выбрать группу</StyledBtn>
                        {touched.faculty && (
                            <StyledGroupsWrapper>
                                <SelectGroup />
                                <StyledBtn $primary type="submit">
                                    Расписание
                                </StyledBtn>
                            </StyledGroupsWrapper>
                        )}
                    </StyledScheduleForm>
                )}
            </Formik>
            <StyledShaduleContainer>
                {scheduleData.map((weekDaysLesson: ScheduleData[], index:number) => (
                    <ScheduleSection weekDaysLesson={weekDaysLesson} key={index} />
                ))}
            </StyledShaduleContainer>
        </StyledPageContainer>
    );
}
