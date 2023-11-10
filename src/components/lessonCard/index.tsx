
import { StyledLessonTypeIndicator, StyledCard, StyledLessonSection, StyledLessonTimeIn, StyledLessoninfo, StyledLessonName, StyledLessonSectionLector } from './styles';
import { LessonCardProps } from './types';

export default function LessonCard({ pair }: LessonCardProps) {

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
          <StyledLessoninfo>{classroom}</StyledLessoninfo>
        </StyledLessonSection>
        <StyledLessonSectionLector>
          <StyledLessoninfo>{fioTeacher}</StyledLessoninfo>
        </StyledLessonSectionLector>
    </StyledCard>
  );
}
