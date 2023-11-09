import { Formik } from "formik";
import { GroupData } from "../../api/types";
import { StyledScheduleForm, StyledPageContainer, StyledGroupsWrapper, StyledShaduleContainer } from "./styles";
import { SelectEducationForm, SelectFaculty, SelectGroup } from "../../components/selects";
import { StyledBtn } from "../../components/button";
import LessonCard from "../../components/lessonCard";
import { Lesson } from "../../components/lessonCard/types";

export default function StudentsSchedule() {
  const cardsData: Lesson[]= [{id:"1",lesson:"ПУПР", lessonType:"лек", timeIn: "08.00", timeOut: "09.35", classroom: "Д303", lector: "Глюк Андреева"}, {id:"2", lesson:"КОТЕЯ", lessonType:"сем", timeIn: "09.45", timeOut: "11.20", classroom: "А503", lector: "Суваль Дарсонваль"}]
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
          console.log(groupData)
      }}
    >
      {({touched}) => (
          <StyledScheduleForm>
       
              <SelectFaculty/>
              <SelectEducationForm/>

<StyledBtn type="submit">Выбрать группу</StyledBtn>
{touched.faculty && (
  <StyledGroupsWrapper>
                <SelectGroup/>
<StyledBtn $primary type="submit">Расписание</StyledBtn>
</StyledGroupsWrapper>
              )}

          </StyledScheduleForm>
      )}
      
    </Formik>
    <StyledShaduleContainer>
    {cardsData.map((pair: Lesson) => (
    <LessonCard pair={pair} key={pair.id}/>
        ))}
</StyledShaduleContainer>
    </StyledPageContainer>
  );
}
