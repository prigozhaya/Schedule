
import { StyledLessonTypeIndicator, StyledCard, StyledLessonSection, StyledLessonTimeIn, StyledLessoninfo, StyledLessonName, StyledLessonSectionClassroom } from '../styles';
import { TeachersLessonCardProps } from '../types';


export default function TeachersLessonCard({ pair }: TeachersLessonCardProps) {

  const {
    discipline,
    disciplineType,
    groups,
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
          <StyledLessoninfo>{groups}</StyledLessoninfo>
        </StyledLessonSection>
        <StyledLessonSectionClassroom>
          <StyledLessoninfo>{classroom}</StyledLessoninfo>
        </StyledLessonSectionClassroom>
    </StyledCard>
  );
}
