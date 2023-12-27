
import { StyledLessonTypeIndicator, StyledCard, StyledLessonSection, StyledLessonTimeIn, StyledLessoninfo, StyledLessonName, StyledLessonSectionClassroom } from '../styles';
import { StudentsLessonCardProps } from '../types';


export default function StudentsLessonCard({ pair }: StudentsLessonCardProps) {

  const {
    discipline,
    disciplineType,
    fioTeacher,
    timeIn,
    timeOut,
    classroom
  } = pair;

  return (
    <StyledCard>
      <StyledLessonTypeIndicator $lessonType={disciplineType}/>
        <StyledLessonSection>
          <StyledLessonTimeIn>{timeIn}</StyledLessonTimeIn>
          <StyledLessoninfo>{timeOut}</StyledLessoninfo>
        </StyledLessonSection>
        <StyledLessonSection>
          <StyledLessonName>{discipline}</StyledLessonName>
          <StyledLessoninfo>{fioTeacher}</StyledLessoninfo>
        </StyledLessonSection>
        <StyledLessonSectionClassroom>
          <StyledLessoninfo>{classroom}</StyledLessoninfo>
        </StyledLessonSectionClassroom>
    </StyledCard>
  );
}
