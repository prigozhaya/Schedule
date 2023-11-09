import { StyledSelect, StyledSelectLabel } from "./styles";

function SelectFaculty() {
  return (
    <StyledSelectLabel>Факультет<StyledSelect as="select" name="faculty" placeholder="Факультет">
  <option value="202">ФАЯ</option>
  <option value="196">ФНЯ</option>
  <option value="222">ФРЯ</option>
  <option value="221">ФКЯиК</option>
  <option value="203">ПФ</option>
  <option value="193">ФМК</option>
    </StyledSelect>
    </StyledSelectLabel>
  );
}

function SelectEducationForm() {
  return (
    <StyledSelectLabel>Форма обучения 
    <StyledSelect as="select" name="education-form">
  <option value="1">Дневная</option>
  <option value="2">Заочная</option>
    </StyledSelect>
    </StyledSelectLabel>
  );
}

function SelectGroup() {
  return (
    <StyledSelectLabel>Группа
    <StyledSelect as="select" name="education-form">
  <option value="1">101/1</option>
  <option value="2">101/2</option>
  <option value="2">102/1</option>
  <option value="2">102/2</option>
    </StyledSelect>
    </StyledSelectLabel>
  );
}


export{SelectFaculty, SelectEducationForm, SelectGroup}