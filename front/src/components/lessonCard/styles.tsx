import styled from "styled-components";

const StyledCard = styled.div`
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
  min-width: 300px;
  max-width: 400px;
  border-radius: 5px;
  text-align: center;
  font-family: arial;
  border: 1px solid #aeaeae;
  position: relative;
  display: flex;
  gap: 15px;
`;

const StyledLessonSection = styled.div`
margin: 5px 0;
text-align: start;
`;

const StyledLessonSectionClassroom = styled.div`
flex-grow: 1;
margin: 5px 10px;
display: flex;
justify-content: end;
text-align: end;
`;

const StyledLessonTimeIn = styled.p`
margin: 0;
`;

const StyledLessonName = styled.h3`
margin: 0;
`;

const StyledLessoninfo = styled.p`
margin: 0;
color: #4e4e4e;
font-size: 14px;
max-width: 200px;
min-width: 40px;
`;

const StyledLessonTypeIndicator = styled.div<{ $lessonType?: string }>`
  width: 7px;
  border-radius: 7px;
  position: relative;
  top: 0;
  left: 0;
  ${props => {
    switch (props.$lessonType) {
      
      case "Лек":  
      return `
      background-color: #66f995;
    `
      case "Сем":  
      return `
      background-color: #ffd950;
    `
    default:  
      return `
      background-color: #ed6363;
    `
  }}}
`;

export {
  StyledCard,
  StyledLessonTypeIndicator,
  StyledLessonSection,
  StyledLessonSectionClassroom,
  StyledLessonTimeIn,
  StyledLessoninfo,
  StyledLessonName,
};