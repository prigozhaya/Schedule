import { StyledSelectLabel } from "./styles";
import { GroupsData } from "../../pages/studentsSchedule/types/types";
import { SelectGroupProps } from "./types";
import { Field } from "formik";

function SelectFaculty() {
  return (
    <StyledSelectLabel>Факультет<select name="faculty" id="faculty">
  <option value="202">ФАЯ</option>
  <option value="196">ФНЯ</option>
  <option value="222">ФРЯ</option>
  <option value="221">ФКЯиК</option>
  <option value="203">ПФ</option>
  <option value="193">ФМК</option>
    </select>
    </StyledSelectLabel>
  );
}

function SelectEducationForm() {
  return (
    
    <select name="educationForm" id="educationForm">
  <option value="1">Дневная</option>
  <option value="2">Заочная</option>
    </select>
  );
}

function SelectGroup({groupsData}: SelectGroupProps) {
  return (
    <StyledSelectLabel>Группа
    <Field as="select" name="group" id="group">
    {groupsData.map((el: GroupsData, index:number) => (
                    <option key={index} value={el.idGroup}>{el.name}</option>
                ))}
    </Field>
    </StyledSelectLabel>
  );
}


export{SelectFaculty, SelectEducationForm, SelectGroup}